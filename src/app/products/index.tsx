import React from "react";
import {FilterRowSection, HeaderSection, ProductCardComponent, ProductGridComponent, TopMenuSection} from "../../components"
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {getNotifications, getProducts} from "../../redux/reducers/variable.ts";
import {useLocation} from "react-router-dom";
import qs from 'qs';
import { getBuckets } from "../../redux/reducers/bucket.ts";
// import {getBucketCount} from "../../redux/reducers/bucket";

export default function Controller() {

    const dispatch = useAppDispatch()
    const location = useLocation()

    const {products} = useAppSelector(state => state.variables)
    const {auth} = useAppSelector(state => state.auth)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const [view, setView] = React.useState('list')
    
    const toggleView =(item: string) => setView(item);
    
    React.useLayoutEffect(() => {
            if (location.search) {
                const newQuery = query;
                delete newQuery.telegramId
                delete newQuery.lang
                dispatch(getProducts({...newQuery}))
            } else {
                dispatch(getProducts({}))
            }
    }, [location.search]);

    const fetchApies = async() => {
        await Promise.all([
            dispatch(getNotifications()),
            dispatch(getBuckets())
        ])
    }
    
    React.useEffect(() => {
        if (auth) {
            fetchApies()
        }
    }, [auth]);

    return (
        <>
            <div className={'mx-3'}>
                <HeaderSection/>
            </div>
            <div className="px-3 bg-white">
                <TopMenuSection/>
                <div className={'py-6'}>
                    <FilterRowSection view={view} toggle={toggleView}/>
                </div>
            </div>
            <div className={'flex flex-wrap max-350:flex-auto gap-4 justify-between px-3'}>
                {products.map((item, index) => view === 'list' ? <ProductCardComponent
                    key={index}
                    {...item}
                /> : <ProductGridComponent
                        key={index}
                        isRoute
                        product={item}
                    />
                )}
            </div>
        </>
    )
}