import { 
    SortToolIcon,
    GridViewIcon,
    FullViewIcon
} from "../../assets/icons"

export default function Component() {
    return (
        <div className="flex justify-between items-center w-full max-w-sm mx-auto pb-4 mt-7">
            <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm">FILTER & SORT</span>
                <SortToolIcon/>
            </div>

            <div className="flex items-center space-x-2">
                <GridViewIcon/>
                <FullViewIcon/>
            </div>
        </div>
    )
}