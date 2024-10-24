import {
    LikeIcon,
    SearchIcon,
    MenuIcon
} from "../../assets/icons"
import {BucketComponent, NotificationComponent} from "../index.ts";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Component() {
    const {carts} = useAppSelector(state => state.variables)

    return (
        <header className={'w-100 flex justify-between items-center mt-10 mb-5'}>
            <h2 className={'font-bold text-xl'}>UzChinaShop</h2>
            <div className="flex items-center gap-4">
                <NotificationComponent value={5} isActive={false}/>
                <BucketComponent value={carts.length} isActive/>
                <LikeIcon/>
                <SearchIcon/>
                <MenuIcon/>
            </div>
        </header>
    )
}