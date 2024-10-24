// import React from 'react';

import {cartCardProps} from "../../../interface/redux/variable.interface.ts";
import {ArrowRightIcon, DismissIcon} from "../../../assets/icons";
import {Link} from "react-router-dom";
// import React from "react";

interface component extends cartCardProps{
    isRoute?: boolean;
}
export default function Component({image, id, name, price, quantity, brand, isRoute = false}: component) {
    const handleIncrease = () => {
        // Miqdorni oshirish funksiyasi
    };

    const handleDecrease = () => {
        // Miqdorni kamaytirish funksiyasi
    };

    const handleRemove = () => {
        // Mahsulotni cart dan o'chirish funksiyasi
    };

    return (
        <div className="w-full h-36 relative flex items-center justify-between bg-primary-amber rounded-lg p-5 mb-4">
            <div className="flex items-center h-full">
                <img src={image} alt={name} className={(isRoute ? 'w-20 h-20 ' : 'w-24 h-24 ') + ` object-contain rounded-lg mr-2`}/>
                <div className={'flex flex-col h-full justify-between'}>
                    <div className={'mt-4'}>
                        <h3 className="text-[16px] font-semibold text-primary-blurple">{name}</h3>
                        <p className="text-[12px] text-primary-gray">{brand}</p>
                    </div>
                    {!isRoute && <p className="font-semibold">
                        <span className="text-lg font-bold">${price.toFixed(0)}</span>
                        <span className="text-sm mb-[2px]">.{(price % 1).toFixed(2).split('.')[1]}</span>
                        <span className="text-sm mb-[2px]">&nbsp; USD</span>
                    </p>}
                </div>
            </div>
            {!isRoute ? <div className="flex items-end h-full">
                <button
                    onClick={handleDecrease}
                    className="border rounded-l bg-transparent px-3 "
                >
                    -
                </button>
                <span className="border-t border-b px-4">{quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="border rounded-r bg-transparent px-3 "
                >
                    +
                </button>
            </div> : <div className={'h-full flex items-start mt-7'}>
                <p className="font-semibold">
                    <span className="text-lg font-bold">${price.toFixed(0)}</span>
                    <span className="text-sm mb-[2px]">.{(price % 1).toFixed(2).split('.')[1]}</span>
                    <span className="text-sm mb-[2px]">&nbsp; USD</span>
                </p>
            </div>}
            {!isRoute ? <button
                onClick={handleRemove}
                className="absolute top-5 bg-transparent right-5"
            >
                <DismissIcon/>
            </button> : <Link
                to={'/product/' + id}
                className="absolute bottom-5 right-5"
            >
                <ArrowRightIcon/>
            </Link>}
        </div>
    );
}
