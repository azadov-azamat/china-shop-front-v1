// import React from 'react';

import {ArrowRightIcon, DismissIcon} from "../../../assets/icons";
import {Link} from "react-router-dom";
import {bucketProps} from "../../../interface/redux/bucket.interface.ts";
import {useAppDispatch} from "../../../redux/hooks.ts";
import {deleteBuckets, updateBuckets} from "../../../redux/reducers/bucket.ts";
import React from "react";
import _debounce from "lodash/debounce";

// import React from "react";

interface component extends bucketProps {
    isRoute?: boolean;
}

export default function Component({product, count, size, id, isRoute = false}: component) {

    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = React.useState(count);

    const debounceUpdate = React.useCallback(
        _debounce(async () => {
            if (id) {
                await dispatch(updateBuckets({id, count: quantity, product, size}));
            }
        }, 500),
        [id, quantity, product]
    );

    const handleQuantityChange = React.useCallback(
        (delta: number) => {
            setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
            debounceUpdate();
        },
        [debounceUpdate]
    );

    const handleRemove = React.useCallback(async () => {
        if (id) {
            await dispatch(deleteBuckets(id));
        }
    }, [id]);


    return (
        <div className="relative flex items-center justify-between w-full p-5 mb-4 rounded-lg h-36 bg-primary-amber">
            <div className="flex items-center h-full">
                <img src={product?.image} alt={product?.name}
                     className={(isRoute ? 'w-20 h-20 ' : 'w-24 h-24 ') + ` object-contain rounded-lg mr-2`}/>
                <div className={'flex flex-col h-full justify-between'}>
                    <div className={'mt-4'}>
                        <h3 className="text-[16px] font-semibold text-primary-blurple">{product?.name}</h3>
                    </div>
                    {!isRoute && <p className="font-semibold">
                        <span className="text-lg font-bold">{product?.price.toFixed(0)}</span>
                        <span
                            className="text-sm mb-[2px]">.{(Number(product?.price) % 1).toFixed(2).split('.')[1]}</span>
                        {/* <span className="text-sm mb-[2px]">&nbsp; USD</span> */}
                    </p>}
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
            </div> : <div className={'h-full flex items-start mt-7'}>
                <p className="font-semibold">
                    <span className="text-lg font-bold">{product?.price.toFixed(0)}</span>
                    <span className="text-sm mb-[2px]">.{(Number(product?.price) % 1).toFixed(2).split('.')[1]}</span>
                    {/* <span className="text-sm mb-[2px]">&nbsp; USD</span> */}
                </p>
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
                <ArrowRightIcon/>
            </Link>}
        </div>
    );
}
