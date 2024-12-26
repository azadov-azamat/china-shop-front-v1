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
        dispatch(getBuckets({}))
    }, [])

    const totalPrice = buckets.reduce(
        (total, cart) => total + (Number(cart.product?.price) * cart.count),
        0
    );

    return (
        <div className="mt-5 bg-white px-3 rounded-lg shadow-lg pb-5 min-h-screen">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                <h2 className="text-lg font-semibold">My Cart</h2>
            </div>

            <div className={'mb-24'}>
                {buckets.map((bucket, key) => (
                    <ProductGridComponent key={key} {...bucket}  />
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-3">
                <button onClick={() => navigate('/success-payment')} className="relative uppercase bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4">
                    <ExitIcon/>
                    GO TO CHECKOUt
                    <span className="absolute right-4 p-1 bg-primary-blurple-dark rounded">${totalPrice}</span>
                </button>
            </div>
        </div>
    )
}