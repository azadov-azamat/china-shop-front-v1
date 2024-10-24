// import React from 'react';

import {cartCardProps} from "../../../interface/redux/variable.interface.ts";
import {DismissIcon} from "../../../assets/icons";

export default function Component({image, name, price, quantity, brand}: cartCardProps) {
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
                <img src={image} alt={name} className="w-24 h-24 object-contain rounded-lg"/>
                <div className={'flex flex-col h-full justify-between'}>
                    <div className={'mt-4'}>
                        <h3 className="text-[16px] font-semibold text-primary-blurple">{name}</h3>
                        <p className="text-[12px] text-primary-gray">{brand}</p>
                    </div>
                    <p className="text-lg font-semibold">${price.toFixed(2)} USD</p>
                </div>
            </div>
            <div className="flex items-end h-full">
                <button
                    onClick={handleDecrease}
                    className="border rounded-l px-3 "
                >
                    -
                </button>
                <span className="border-t border-b px-4">{quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="border rounded-r px-3 "
                >
                    +
                </button>
            </div>
            <button
                onClick={handleRemove}
                className="absolute top-5 right-5"
            >
                <DismissIcon/>
            </button>
        </div>
    );
}
