import React from "react";
import {FilterRowSection, HeaderSection, ProductCardComponent, ProductGridComponent, TopMenuSection} from "../../components"
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {getNotifications, getProducts} from "../../redux/reducers/variable.ts";
import {useLocation} from "react-router-dom";
import qs from 'qs';
import { getBuckets } from "../../redux/reducers/bucket.ts";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function Controller() {

    const dispatch = useAppDispatch()
    const location = useLocation()
    const { t } = useTranslation();
    const {products} = useAppSelector(state => state.variables)
    const {auth} = useAppSelector(state => state.auth)
    const query = qs.parse(location.search, {ignoreQueryPrefix: true})

    const [view, setView] = React.useState('list')
    const [isVisible, setIsVisible] = React.useState(false);

    const handleToggle = () => {
      setIsVisible(!isVisible);
    };
    
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
                    <FilterRowSection view={view} toggle={toggleView} toggleFilter={handleToggle}/>
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
            {isVisible && (
        <motion.div
          initial={{ y: "100%" }} // Start position (bottom)
          animate={{ y: "0%" }} // End position (top)
          exit={{ y: "100%" }} // Exit position (back to bottom)
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-white"
        >
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={handleToggle} className={'absolute left-4 cursor-pointer'}>
                    <BiX size={24}/>
                </div>
                <h2 className="text-lg font-semibold">{t ('filters')}</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#f2f3f2] rounded-t-3xl top-16 grid justify-between grid-cols-2 gap-2 px-4 py-6 overflow-y-auto">
                
                <div className="fixed bottom-0 left-0 right-0 px-3 py-6">
                    <button onClick={handleToggle} className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                    items-center gap-4 uppercase">
                        {t ('find-by-filter')}
                    </button>
                </div>
            </div>
        </motion.div>
      )}
        </>
    )
}