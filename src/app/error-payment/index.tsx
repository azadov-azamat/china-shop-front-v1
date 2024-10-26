import {ArrowLeftIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import alert from '../../assets/alert.png';

export default function Controller() {

    const navigate = useNavigate()

    return (
        <div className="bg-white relative px-4 flex flex-col justify-center rounded-lg shadow-lg h-screen">
            <div className={'absolute top-5 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
            </div>

            <div className={'w-full h-[50hv] flex justify-center items-center p-10'}>
                <img src={alert} alt="successfull-payment" className={'w-32 h-32 object-center object-contain'}/>
            </div>

            <div className={'w-full text-center mt-5'}>
                <h2 className={'font-semibold text-2xl'}>Oh Snap! Order Failed</h2>
                <p className={'text-primary-gray text-xs mt-5'}>Looks like something went wrong
                    while processing your request.</p>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-3">
                <button className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4 uppercase">
                    Please Try Again
                </button>
            </div>
        </div>
    )
}