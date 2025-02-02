import { 
    SortToolIcon,
    GridViewIcon,
    FullViewIcon
} from "../../assets/icons"

export default function Component({toggle, view}: {view: string; toggle: any}) {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold">FILTER & SORT</span>
                <SortToolIcon/>
            </div>

            <div className="flex items-center space-x-2">
                <FullViewIcon onClick={toggle} active={view === 'list'}/>
                <GridViewIcon onClick={toggle} active={view === 'grid'}/>
            </div>
        </div>
    )
}