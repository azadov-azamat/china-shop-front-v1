import {useAppSelector} from "../../redux/hooks.ts";
import {PageHeaderComponent, ProductCardComponent} from "../../components";
import {SearchIcon} from "../../assets/icons";

export default function Controller() {

    const {products} = useAppSelector(state => state.variables)

    return (
        <div className="px-3 mt-5 bg-white rounded-lg shadow-lg">
            <PageHeaderComponent title={'Find Products'}/>

            <div className={'relative flex items-center w-full h-12 bg-[#F2F3F2] rounded-2xl'}>
                <input type="text" className={'w-full ml-12 border-none h-full rounded-2xl bg-transparent focus:outline-none focus:ring-0'}/>
                <div className={'absolute left-4'}>
                    <SearchIcon/>
                </div>
            </div>

            <div className={'w-full text-center text-primary-gray text-xs my-4'}>
                139 Items found for “Hoodies”
            </div>

            <div className={'flex flex-wrap max-350:flex-auto gap-4 justify-between'}>
                {products.map((item, index) => <ProductCardComponent
                    key={index}
                    {...item}
                />)}
            </div>
        </div>
    )
}