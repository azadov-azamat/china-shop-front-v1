import { useTranslation } from "react-i18next";
import { 
    SortToolIcon,
    GridViewIcon,
    FullViewIcon
} from "../../assets/icons"

export default function Component({toggle, view, toggleFilter}: {view: string; toggle: any; toggleFilter: any;}) {
    const {t} = useTranslation();
  
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2" onClick={toggleFilter}>
                <span className="text-sm font-semibold uppercase">{t ('filter-sort')}</span>
                <SortToolIcon/>
            </div>

            <div className="flex items-center space-x-2">
                <FullViewIcon onClick={toggle} active={view === 'list'}/>
                <GridViewIcon onClick={toggle} active={view === 'grid'}/>
            </div>
        </div>
    )
}