// import React from 'react';

import {productCardProps} from "../../../interface/redux/variable.interface.ts";
import {LikeIcon} from "../../../assets/icons";
import {Link} from "react-router-dom";

export default function Component({media, id, name, like, price}: productCardProps) {
    return (
        <Link to={'/product/' + id} className="relative text-center max-350:w-full">
            <div
                className="relative bg-primary-amber rounded-[30px] shadow-md p-4 max-350:w-full max-350:h-[250px] max-380:w-[150px] max-380:h-[170px] w-[170px] h-[208px] flex justify-center items-center">
                <div className={'w-full h-[130px] max-350:h-[170px] object-center object-contain flex justify-center items-center'}>
                    <img src={media[0]?.path} alt={name} className="rounded-lg w-4/5 h-full"/>
                </div>
                <button className="absolute bg-transparent top-4 right-2 p-2">
                    <LikeIcon like={like ? like.liked : false}/>
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
