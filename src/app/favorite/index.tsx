import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {ProductCardComponent} from "../../components";
import {ArrowLeftIcon, BucketIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import React from "react";
import {getLikes} from "../../redux/reducers/like.ts";
// import {createBuckets} from "../../redux/reducers/bucket.ts";

export default function Controller() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {likes} = useAppSelector(state => state.like)

    React.useLayoutEffect(() => {
        dispatch(getLikes({}))
    }, [])

    // asynx function transitionToBucket() {
    //     const {payload} = await dispatch(createBuckets({count: quantity, size: selectedSize, product}))
    //     dispatch(createBuckets)
    // }

    return (
        <div className="mt-5 bg-white px-3 rounded-lg shadow-lg min-h-screen">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                <h2 className="text-lg font-semibold">Favorite</h2>
            </div>

            <div className={'flex flex-wrap max-350:flex-auto gap-4 justify-between'}>
                {likes.map((like) => (
                    <ProductCardComponent key={like.id} {...like.product}/>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-3">
                <button onClick={() => navigate('/carts')} className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4 uppercase">
                    <BucketIcon color={'white'}/>
                    get carts
                </button>
            </div>
        </div>
    )
}