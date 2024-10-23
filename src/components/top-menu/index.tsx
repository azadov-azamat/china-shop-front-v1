// import { 
//     SortToolIcon,
//     GridViewIcon,
//     FullViewIcon
// } from "../icons"

import React from "react";

const tabs = [
    { label: 'Popular', value: 'popular' },
    { label: 'Mens', value: 'mens' },
    { label: 'Womens', value: 'womens' },
    { label: 'Sale', value: 'sale' },
];

export default function Component() {
    const [activeTab, setActiveTab] = React.useState(tabs[0].value);

    return (
        <div className="flex space-x-8 justify-between items-center border-b border-gray-300">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`relative flex items-start pb-2 ${
                        activeTab === tab.value
                            ? 'text-purple-600 font-semibold after:content-[""] after:absolute after:left-1/2 after:transform ' +
                            'after:-translate-x-1/2 after:bottom-0 after:h-[4px] after:w-6 after:bg-purple-600 after:rounded-full'
                            : 'text-gray-600 font-medium'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}