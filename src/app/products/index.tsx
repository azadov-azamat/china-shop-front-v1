import { FilterRowSection, HeaderSection, TopMenuSection } from "../../components"
import { 
    ArrowLeftIcon,
    ArrowRightIcon,
    ExitIcon,
    UploadIcon,
    DismissIcon,
    TruckIcon
} from "../../assets/icons"

export default function Controller() {

    return (
        <div>
            <HeaderSection/>
            <TopMenuSection/>
            <FilterRowSection/>

            <ArrowLeftIcon/>
            <ArrowRightIcon/>
            <ExitIcon/>
            <UploadIcon/>
            <DismissIcon/>
            <TruckIcon/>
        </div>
    )
}