// import React from 'react';

import {BellIcon} from "../../assets/icons";

interface notificationDataProps {
    value: string | number;
    isActive: boolean
}
export default function Component({value = 5, isActive = false}: notificationDataProps) {
    return (
        <div className={'relative'}>
            {isActive && <span className="absolute flex h-4 w-4 -top-1 -left-1">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blurple opacity-75"></span>
  <span
      className="relative rounded-full h-4 w-4 flex justify-center text-white items-center bg-primary-blurple text-xs">{value}</span>
</span>}

            <BellIcon/>
        </div>
    );
}