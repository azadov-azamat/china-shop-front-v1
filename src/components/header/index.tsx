import {
    LikeIcon,
    BucketIcon,
    SearchIcon,
    MenuIcon
} from "../../assets/icons"
import {NotificationComponent} from "../index.ts";

export default function Component() {
    return (
        <header className={'w-100 flex justify-between items-center'}>
            <h2>UzChinaShop</h2>
            <div className="flex items-center gap-4">
                <NotificationComponent/>
                <BucketIcon/>
                <LikeIcon/>
                <SearchIcon/>
                <MenuIcon/>
            </div>
        </header>
    )
}