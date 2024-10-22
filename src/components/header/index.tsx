import { 
    LikeIcon,
    BellIcon,
    BucketIcon,
    SearchIcon,
    MenuIcon
} from "../icons"

export default function Component() {
    return (
        <header>
            <div className="flex items-center gap-4">
            <BellIcon/>
            <BucketIcon/>
            <LikeIcon/>
            <SearchIcon/>
            <MenuIcon/>
            </div>
        </header>
    )
}