import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {useAppDispatch} from "../redux/hooks.ts";
import {getUserMe, login} from "../redux/reducers/auth.ts";
import {UserDataProps} from "../interface/redux/auth.interface.ts";

interface AuthState {
    isAuthenticated: boolean;
    load: boolean;
    user: UserDataProps | null;
    error: string | null;
}

const useAuth = () => {
    const [authState, setAuthState] = useState<AuthState>({
        isAuthenticated: false,
        load: false,
        user: null,
        error: null,
    });

    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const local = localStorage.getItem('authenticate') || ""
        const { id } = JSON.parse(local);
        const telegramId = searchParams.get("telegramId") || id;

        if (telegramId) {
            setAuthState((prev) => ({ ...prev, loading: true }));

            dispatch(login(String(telegramId)))
                .unwrap()
                .then((res) => {
                    return dispatch(getUserMe(res.userId)).unwrap();
                })
                .then((user) => {
                    setAuthState({
                        isAuthenticated: true,
                        load: false,
                        user: user,
                        error: null,
                    });
                })
                .catch((error) => {
                    setAuthState({
                        isAuthenticated: false,
                        load: false,
                        user: null,
                        error: error.message,
                    });
                });
        }
    }, [searchParams]);

    return authState;
};

export default useAuth;
