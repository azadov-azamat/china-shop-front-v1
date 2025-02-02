import { ArrowLeftIcon } from "../../assets/icons/index.tsx"
import {useNavigate} from "react-router-dom";

export default function Component({title}: {title?: string}) {
    const navigate = useNavigate()

    return (
        <header className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                {title && <h2 className="text-lg font-semibold">{title}</h2>}
        </header>
    )
}