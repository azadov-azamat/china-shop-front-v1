import {
    LikeIcon,
    BucketIcon,
    SearchIcon,
    MenuIcon
} from "../../assets/icons"
import {NotificationComponent} from "../index.ts";

export default function Component() {
    return (
        <header className={'w-100 flex justify-between items-center my-10'}>
            <h2 className={'font-bold text-xl'}>UzChinaShop</h2>
            <div className="flex items-center gap-4">
                <NotificationComponent value={5} isActive={false}/>
                <BucketIcon/>
                <LikeIcon/>
                <SearchIcon/>
                <MenuIcon/>
            </div>
        </header>
    )
}