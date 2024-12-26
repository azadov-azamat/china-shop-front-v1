import React from "react";
import {FilterRowSection, HeaderSection, ProductCardComponent, TopMenuSection} from "../../components"
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {getProducts} from "../../redux/reducers/variable.ts";
import {useLocation} from "react-router-dom";
import qs from 'qs';
import {getBucketCount} from "../../redux/reducers/bucket.ts";

export default function Controller() {

    const dispatch = useAppDispatch()
    const location = useLocation()

    const {products} = useAppSelector(state => state.variables)
    const {auth} = useAppSelector(state => state.auth)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    React.useLayoutEffect(() => {
        if (auth) {
            if (location.search) {
                const newQuery = query;
                delete newQuery.telegramId
                delete newQuery.lang
                dispatch(getProducts({...newQuery}))
            } else {
                dispatch(getProducts({}))
            }
        }
    }, [auth, location.search]);

    React.useEffect(()=>{
        dispatch(getBucketCount())
    }, []);

    return (
        <>
            <div className={'mx-3'}>
                <HeaderSection/>
            </div>
            <div className="sticky top-0 z-10 bg-white px-3">
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