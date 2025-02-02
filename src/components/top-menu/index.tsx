import React from "react";
import {CATEGORIES} from "../../utils/constants.ts";
import {useLocation, useNavigate} from "react-router-dom";
import qs from "qs";
import { useTranslation } from "react-i18next";

export default function Component() {

    const {t} = useTranslation();
    const location = useLocation()
    const navigate = useNavigate()

    const query = qs.parse(location.search, {ignoreQueryPrefix: true})
    const [activeTab, setActiveTab] = React.useState<{name: string; value: string | null}>(CATEGORIES[0]);

    const toQuery = (category: {name: string; value: string | null}) => {
        if (!category.value) {
            navigate({
                search: ''
            })
        } else {
            navigate({
                search: qs.stringify({
                    ...query,
                    category_name: category.value
                })
            })
        }
        setActiveTab(category)
    }
    return (
        <div className="flex items-center justify-between space-x-8 border-b border-gray-300">
            {CATEGORIES.map((category, key) => (
                <button
                    key={key}
                    onClick={() => toQuery(category)}
                    className={`relative bg-transparent flex items-start pb-2 ${
                        activeTab === category
                            ? 'text-purple-600 font-semibold after:content-[""] after:absolute after:left-[13px] after:transform ' +
                            'after:-translate-x-1/2 after:bottom-0 after:h-[4px] after:w-6 after:bg-purple-600 after:rounded-full'
                            : 'text-gray-600 font-medium'
                    }`}
                >
                    {t (category.name)}
                </button>
            ))}
        </div>
    )
}