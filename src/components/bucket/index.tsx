// import React from 'react';

import {BucketIcon} from "../../assets/icons";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";

interface notificationDataProps {
    isActive: boolean
}
export default function Component({isActive = false}: notificationDataProps) {
    const {totalCount} = useAppSelector(state => state.bucket)
    return (
        <Link to={'/carts'} className={'relative'}>
            {isActive && <span className="absolute flex h-4 w-4 -top-1 -left-1">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blurple opacity-75"></span>
  <span
      className="relative rounded-full h-4 w-4 flex justify-center text-white items-center bg-primary-blurple text-xs">{totalCount}</span>
</span>}

            <BucketIcon/>
        </Link>
    );
}