import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {ContentLoaderProductList, PageHeaderComponent, ProductCardComponent} from "../../components";
import {SearchIcon} from "../../assets/icons";
import React from "react";
import _debounce from "lodash/debounce";
import { getProducts } from "../../redux/reducers/variable.ts";
import { useTranslation } from "react-i18next";

export default function Controller() {

    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const {products, loading} = useAppSelector(state => state.variables)
    const [search, setSearch] = React.useState<string>('')

    const debounceUpdate = React.useCallback(
        _debounce(async () => {
            if (search.length > 1) {
                await dispatch(getProducts({search}));
            } else {
                dispatch({
                    type: 'variables/getProducts/fulfilled',
                    payload: []
                })
            }
        }, 1000),
        [search]
    );
    
    React.useEffect(() => {
        return () => {
            dispatch({
                type: 'variables/getProducts/fulfilled',
                payload: []
            })
        }
    }, [])
    
    const handlechange =(text: string) => {
        setSearch(text);
        debounceUpdate()
    }
    
    return (
        <div className="relative h-screen">
            <div className="px-3 mt-5 bg-white rounded-lg">
                <PageHeaderComponent title={'find-product'}/>

                <div className={'relative flex items-center w-full h-12 bg-[#F2F3F2] rounded-2xl'}>
                    <input 
                        type="text" 
                        className={'w-full ml-12 border-none h-full rounded-2xl bg-transparent focus:outline-none focus:ring-0'}
                        value={search}
                        placeholder={t ('find-by-name')}
                        onChange={(e) => handlechange(e.target.value)}
                    />
                    <div className={'absolute left-4'}>
                        <SearchIcon/>
                    </div>
                </div>
                <div className={'w-full text-center text-primary-gray text-xs my-4'}>
                    {search.length > 0 && (t ('result-find', {totalCount: products.length, search}))}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 grid justify-between grid-cols-2 gap-2 px-4 py-6 overflow-y-auto top-40">
            {loading ? [1,2 ,3, 4, 5].map(()=> <ContentLoaderProductList/>) : products.map((item, index) => <ProductCardComponent
                        key={index}
                        {...item}
                />)}
            </div>
        </div>
    )
}