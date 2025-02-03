import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {PageHeaderComponent, ProductGridComponent} from "../../components";
import {ExitIcon} from "../../assets/icons";
import React from "react";
import {getBuckets} from "../../redux/reducers/bucket.ts";
import { useTranslation } from "react-i18next";

export default function Controller() {

    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {buckets} = useAppSelector(state => state.bucket)

    React.useLayoutEffect(() => {
        dispatch(getBuckets())
    }, [])

    return (
        <div className="min-h-screen px-3 pb-5 mt-5 bg-white rounded-lg shadow-lg">
            <PageHeaderComponent title={'my-cart'}/>

            <div className={'mb-24'}>
                {buckets?.order.items.map((bucket, key) => (
                    <ProductGridComponent key={key} {...bucket} id={buckets.order.id} />
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 px-3 py-6 bg-white">
                <a href={buckets?.payment_link} className="relative uppercase bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4">
                    <ExitIcon/>
                    {t ('go-to-checkout')}
                    <span className="absolute p-1 rounded right-4 bg-primary-blurple-dark">${buckets?.order.total_price}</span>
                </a>
            </div>
        </div>
    )
}