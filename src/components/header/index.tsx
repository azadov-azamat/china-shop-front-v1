import {
    LikeIcon,
    SearchIcon,
    MenuIcon
} from "../../assets/icons"
import {BucketComponent, NotificationComponent} from "../index.ts";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {buckets} = useAppSelector(state => state.bucket)
    const {notifications} = useAppSelector(state => state.variables)
    
    return (
        <header className={'w-100 flex justify-between items-center mt-5 mb-5'}>
            <h2 className={'font-bold text-xl'}>Uzchinetrade</h2>
            <div className="flex items-center !gap-4">
                <Link to={'/notifications'}>
                    <NotificationComponent value={notifications.length} isActive={true}/>
                </Link>
                <BucketComponent 
                    isActive={buckets && buckets.order.items.length > 0 || false} 
                    value={buckets && buckets.order.items.length || 0}
                />
                <Link to={'/favorite'}>
                    <LikeIcon like={false}/>
                </Link>
                <Link to={'/search'}>
                    <SearchIcon/>
                </Link>
                <MenuIcon/>
            </div>
        </header>
    )
}