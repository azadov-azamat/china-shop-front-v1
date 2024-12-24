import {FilterRowSection, HeaderSection, ProductCardComponent, TopMenuSection} from "../../components"
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import React from "react";
import {getCategories, getProducts, login} from "../../redux/reducers/variable.ts";
import {useSearchParams} from "react-router-dom";
import {unwrapResult} from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from "../../config/api.ts";

export default function Controller() {

    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const {products} = useAppSelector(state => state.variables)

    const userId = searchParams.get("userId");
    const name = searchParams.get("name");
    const phone = searchParams.get("p-n");
    const phone2 = searchParams.get("p-n2");

    React.useLayoutEffect(() => {
        // dispatch(login({
        //     'tg-id': userId,
        //     name,
        //     'p-n': phone,
        //     'p-n2': phone2
        // })).then(unwrapResult).then(() => {
            dispatch(getProducts())
        // })
    }, [])

    return (
        <>
            <div className={'mx-3'}>
                <HeaderSection/>
            </div>
            <div className="sticky top-0 z-10 bg-white pt-5 px-3">
                <TopMenuSection/>
                <div className={'py-6'}>
                    <FilterRowSection/>
                </div>
            </div>
            <div className={'flex flex-wrap max-350:flex-auto gap-4 justify-between px-3'}>
                {products.map((item, index) => <ProductCardComponent
                    key={index}
                    {...item}
                />)}
            </div>
        </>
    )
}