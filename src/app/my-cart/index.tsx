import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {ProductGridComponent} from "../../components";
import {ArrowLeftIcon, ExitIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import React from "react";
import {getBuckets} from "../../redux/reducers/bucket.ts";

export default function Controller() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {buckets} = useAppSelector(state => state.bucket)

    React.useLayoutEffect(() => {
        dispatch(getBuckets())
    }, [])


    return (
        <div className="min-h-screen px-3 pb-5 mt-5 bg-white rounded-lg shadow-lg">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                <h2 className="text-lg font-semibold">My Cart</h2>
            </div>

            <div className={'mb-24'}>
                {buckets?.order.items.map((bucket, key) => (
                    <ProductGridComponent key={key} {...bucket} id={buckets.order.id} />
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 px-3 py-6 bg-white">
                <button onClick={() => navigate('/payment/3')} className="relative uppercase bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4">
                    <ExitIcon/>
                    GO TO CHECKOUt
                    <span className="absolute p-1 rounded right-4 bg-primary-blurple-dark">${buckets?.order.total_price}</span>
                </button>
            </div>
        </div>
    )
}