import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {PageHeaderComponent, ProductCardComponent} from "../../components";
import {BucketIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import React from "react";
import { getLikedProducts } from "../../redux/reducers/variable.ts";
// import {createBuckets} from "../../redux/reducers/bucket.ts";

export default function Controller() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {liked} = useAppSelector(state => state.variables)

    React.useLayoutEffect(() => {
        dispatch(getLikedProducts({}))
    }, [])

    // asynx function transitionToBucket() {
    //     const {payload} = await dispatch(createBuckets({count: quantity, size: selectedSize, product}))
    //     dispatch(createBuckets)
    // }

    return (
        <div className="min-h-screen px-3 mt-5 bg-white rounded-lg shadow-lg">
            <PageHeaderComponent title={'Favorite'}/>

            <div className={'flex flex-wrap max-350:flex-auto gap-4 justify-between'}>
                {liked.map((like) => (
                    <ProductCardComponent key={like.id} {...like}/>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 px-3 py-6 bg-white">
                <button onClick={() => navigate('/carts')} className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4 uppercase">
                    <BucketIcon color={'white'}/>
                    get carts
                </button>
            </div>
        </div>
    )
}