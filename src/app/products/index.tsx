import {FilterRowSection, HeaderSection, ProductCardComponent, TopMenuSection} from "../../components"
import { 
    ArrowLeftIcon,
    ArrowRightIcon,
    ExitIcon,
    UploadIcon,
    DismissIcon,
    TruckIcon
} from "../../assets/icons"
import {useAppSelector} from "../../redux/hooks.ts";

export default function Controller() {

    const {products} = useAppSelector(state => state.variables)

    return (
        <div className={'mx-3'}>
            <HeaderSection/>
            <TopMenuSection/>
            <FilterRowSection/>
            <div className={'flex flex-wrap gap-4 justify-between'}>
                {products.map((item, index) => <ProductCardComponent
                    key={index}
                    {...item}
                />)}
            </div>
            <ArrowLeftIcon/>
            <ArrowRightIcon/>
            <ExitIcon/>
            <UploadIcon/>
            <DismissIcon/>
            <TruckIcon/>
        </div>
    )
}