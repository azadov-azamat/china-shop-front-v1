import alert from '../../assets/alert.png';
import { PageHeaderComponent } from "../../components";

export default function Controller() {

    return (
        <div className="relative flex flex-col justify-center h-screen px-4 bg-white rounded-lg shadow-lg">
            <PageHeaderComponent/>

            <div className={'w-full h-[50hv] flex justify-center items-center p-10'}>
                <img src={alert} alt="successfull-payment" className={'w-32 h-32 object-center object-contain'}/>
            </div>

            <div className={'w-full text-center mt-5'}>
                <h2 className={'font-semibold text-2xl'}>Oh Snap! Order Failed</h2>
                <p className={'text-primary-gray text-xs mt-5'}>Looks like something went wrong
                    while processing your request.</p>
            </div>
            <div className="fixed bottom-0 left-0 right-0 px-3 py-6 bg-white">
                <button className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4 uppercase">
                    Please Try Again
                </button>
            </div>
        </div>
    )
}