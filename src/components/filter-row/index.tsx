import { 
    SortToolIcon,
    GridViewIcon,
    FullViewIcon
} from "../../assets/icons"

export default function Component() {
    return (
        <div className="flex justify-between items-center w-full">
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