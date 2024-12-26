import React from "react";
import {CATEGORIES} from "../../utils/constants.ts";
import {useLocation, useNavigate} from "react-router-dom";
import qs from "qs";

export default function Component() {

    const location = useLocation()
    const navigate = useNavigate()

    const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const [activeTab, setActiveTab] = React.useState<string>(CATEGORIES[0]);

    const toQuery = (category: string) => {
        if (category === 'Popular') {
            navigate({
                search: ''
            })
        } else {
            navigate({
                search: qs.stringify({
                    ...query,
                    category
                })
            })
        }
        setActiveTab(category)
    }
    return (
        <div className="flex space-x-8 justify-between items-center border-b border-gray-300">
            {CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => toQuery(category)}
                    className={`relative bg-transparent flex items-start pb-2 ${
                        activeTab === category
                            ? 'text-purple-600 font-semibold after:content-[""] after:absolute after:left-[13px] after:transform ' +
                            'after:-translate-x-1/2 after:bottom-0 after:h-[4px] after:w-6 after:bg-purple-600 after:rounded-full'
                            : 'text-gray-600 font-medium'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}