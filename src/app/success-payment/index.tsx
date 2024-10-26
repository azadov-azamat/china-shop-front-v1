import {ArrowLeftIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import success from '../../assets/success.png';

export default function Controller() {

    const navigate = useNavigate()

    return (
        <div className="mt-5 bg-white px-4 rounded-lg shadow-lg h-screen">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
            </div>

            <div className={'w-full h-[50hv] flex justify-center items-center p-10'}>
                <img src={success} alt="successfull-payment" className={'w-full h-full object-center object-contain'}/>
            </div>

            <div className={'w-full text-center mt-5'}>
                <h2 className={'font-semibold text-2xl'}>Congrats! Your Order has
                    been placed</h2>
                <p className={'text-primary-gray text-xs mt-5'}>Your items has been placcd and is on
                    it’s way to being processed</p>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-3">
                <button onClick={() => navigate('/error-payment')} className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4 uppercase">
                    Continue shopping
                </button>
            </div>
        </div>
    )
}