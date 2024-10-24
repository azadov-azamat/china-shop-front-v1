import {useAppSelector} from "../../redux/hooks.ts";
import {ProductCardComponent} from "../../components";
import {ArrowLeftIcon, SearchIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";

export default function Controller() {

    const navigate = useNavigate()
    const {products} = useAppSelector(state => state.variables)

    return (
        <div className="mt-5 bg-white px-3 rounded-lg shadow-lg">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                <h2 className="text-lg font-semibold">Find Products</h2>
            </div>

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