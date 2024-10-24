// import {useAppDispatch} from "../../redux/hooks.ts";

export default function Component({setLoading}: any) {

    // const dispatch = useAppDispatch();
    console.log(setLoading)
    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center">
            Loading....
        </div>
    );
}
