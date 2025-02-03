import React from "react";

import {DismissIcon, LikeIcon} from "../../../assets/icons";
import {Link} from "react-router-dom";
import {bucketProps, orderItemProps} from "../../../interface/redux/bucket.interface.ts";
import {useAppDispatch} from "../../../redux/hooks.ts";
import {deleteBuckets, updateBuckets} from "../../../redux/reducers/bucket.ts";
import _debounce from "lodash/debounce";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface component extends orderItemProps {
    isRoute?: boolean;
}

export default function Component({product, order_item_id, quantity, size, id, isRoute = false}: component) {

    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [count, setCount] = React.useState<number>(quantity || 0);

    const debounceUpdate = React.useCallback(
        _debounce(async () => {
            console.log("quantity", count);
            
            if (product) {
                await dispatch(updateBuckets({
                    quantity: count, 
                    product_id: product.id || 1, 
                    size_id: size?.id || 1
                } as bucketProps));
            }
        }, 500),
        [count, product]
    );

    const handleQuantityChange = React.useCallback(
        (delta: number) => {
            setCount((prevQuantity) => Math.max(1, prevQuantity + delta));
            debounceUpdate();
        },
        [debounceUpdate]
    );

    const handleRemove = React.useCallback(async () => {
        if (order_item_id) {
            await dispatch(deleteBuckets(order_item_id));
        }
    }, [id]);


    return (
        <div className="relative flex items-center justify-between w-full p-5 mb-4 rounded-lg h-36 bg-primary-amber">
            <div className="relative flex items-center h-full">
                <img src={product?.image} alt={product?.name}
                     className={(isRoute ? 'w-20 h-20 ' : 'w-24 h-24 ') + ` object-contain rounded-lg mr-2`}/>
                <div className={'flex flex-col h-full '}>
                    <div>
                        <h3 className="text-[16px] font-semibold text-primary-blurple">{product?.name}</h3>
                    </div>
                    <p className="flex p-0 m-0 text-sm truncate text-primary-gray">
                        {isRoute ? product.description : t ('selected-size') + ": " + size?.size_name}
                    </p>
                    <p className="absolute bottom-0 font-semibold">
                        <span className="text-lg font-bold">{product?.price.toFixed(0)}</span>
                        <span
                            className="text-sm mb-[2px]">.{(Number(product?.price) % 1).toFixed(2).split('.')[1]}</span>
                        {/* <span className="text-sm mb-[2px]">&nbsp; USD</span> */}
                    </p>
                </div>
            </div>
            {!isRoute ? <div className="flex items-end h-full">
                <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 bg-transparent border rounded-l "
                >
                    -
                </button>
                <span className="px-4 border-t border-b">{quantity}</span>
                <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 bg-transparent border rounded-r "
                >
                    +
                </button>
            </div> : <div className="h-full">
                <LikeIcon like={product.liked_by_user}/>
            </div>}
            {!isRoute ? <button
                onClick={handleRemove}
                className="absolute bg-transparent top-5 right-5"
            >
                <DismissIcon/>
            </button> : <Link
                to={'/product/' + product?.id}
                className="absolute bottom-5 right-5"
            >
                <BsArrowRight size={20}/>
            </Link>}
        </div>
    );
}
