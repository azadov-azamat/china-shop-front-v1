import {FilterRowSection, HeaderSection, ProductCardComponent, TopMenuSection} from "../../components"
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import React from "react";
import {getCategories, login} from "../../redux/reducers/variable.ts";
import {useSearchParams} from "react-router-dom";
import {unwrapResult} from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from "../../config/api.ts";

export default function Controller() {

    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const {products} = useAppSelector(state => state.variables)

    const userId = searchParams.get("userId");

    async function fetch() {
        const response = await axios.get(`${baseUrl}/login?userid=${userId}`)
        const cookies = response.headers["Set-Cookie"];
        console.log(cookies);
    }
    React.useLayoutEffect(() => {
        fetch()
        // dispatch(login(String(userId))).then(unwrapResult).then(()=> {
        //     dispatch(getCategories())
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