import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {PageHeaderComponent, DateFormatComponent, ContentLoaderNotification} from "../../components/index.ts";
import React from "react";
import { getNotifications } from "../../redux/reducers/variable.ts";

export default function Controller() {

    const dispatch = useAppDispatch();
    const {notifications, loading} = useAppSelector(state => state.variables);

    React.useEffect(() => {
        dispatch(getNotifications())        
    }, []);
    
    return (
        <div className="relative h-screen">
            <div className="px-3 mt-5 bg-white rounded-lg">
                <PageHeaderComponent title={'notifications'}/>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#f2f3f2] rounded-t-3xl top-20 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                {
                    loading ? [1,2, 3, 4].map(() => <ContentLoaderNotification/>) :notifications.map((item, key) => (
                        <div key={key} className="flex flex-col w-full h-auto px-5 py-4 rounded-xl bg-primary-blurple-dark"> 
                            <div className="text-base text-white">{item.title}</div>
                            {item.message && <p className="text-xs text-primary-gray">{item.message}</p>}
                            <DateFormatComponent className="mt-4 text-xs text-start text-primary-gray" currentDate={item.created_at}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}