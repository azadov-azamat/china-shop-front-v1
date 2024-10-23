// import React from 'react';

import {productCardProps} from "../../interface/redux/variable.interface.ts";
import {LikeIcon} from "../../assets/icons";
import {Link} from "react-router-dom";

export default function Component({ image, id, name, price }: productCardProps) {
    return (
        <Link to={'product/' + id} className="relative text-center">
            <div className="relative bg-[#F1F4FB] rounded-[30px] shadow-md p-4 w-[170px] h-[208px] flex justify-center items-center">
                <div className={'w-full h-[131px] object-center object-cover'}>
                    <img src={image} alt={name} className="rounded-lg mb-4 w-full h-full"/>
                </div>
                <button className="absolute top-2 right-2 p-2">
                    <LikeIcon/>
                </button>
            </div>
            <h3
                className="mt-4 font-extrabold text-black text-[18px] leading-[15px] tracking-tight text-center"
            >
                {name}
            </h3>

                <span className="text-primary-gray font-extrabold text-[16px] leading-[39.34px] text-center">
          ${price}.00 USD
        </span>
        </Link>
    );
}
