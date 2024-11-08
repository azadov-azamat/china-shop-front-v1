// import { 
//     SortToolIcon,
//     GridViewIcon,
//     FullViewIcon
// } from "../icons"

import React from "react";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {

    const {categories} = useAppSelector(state => state.variables)
    const [activeTab, setActiveTab] = React.useState(categories[0]?.id);

    return (
        <div className="flex space-x-8 justify-between items-center border-b border-gray-300">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative bg-transparent flex items-start pb-2 ${
                        activeTab === category.id
                            ? 'text-purple-600 font-semibold after:content-[""] after:absolute after:left-[13px] after:transform ' +
                            'after:-translate-x-1/2 after:bottom-0 after:h-[4px] after:w-6 after:bg-purple-600 after:rounded-full'
                            : 'text-gray-600 font-medium'
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    )
}