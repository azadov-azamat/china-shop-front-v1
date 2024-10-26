import {useAppSelector} from "../../redux/hooks.ts";
import {ProductGridComponent} from "../../components";
import {ArrowLeftIcon, ExitIcon} from "../../assets/icons";
import {useNavigate} from "react-router-dom";

export default function Controller() {

    const navigate = useNavigate()
    const {carts} = useAppSelector(state => state.variables)

    const totalPrice = carts.reduce(
        (total, cart) => total + cart.price * cart.quantity,
        0
    );

    return (
        <div className="mt-5 bg-white px-3 rounded-lg shadow-lg pb-5">
            <div className={'sticky top-0 z-10 pb-4 pt-5 bg-white flex justify-center items-center'}>
                <div onClick={() => navigate(-1)} className={'absolute left-0 cursor-pointer'}>
                    <ArrowLeftIcon/>
                </div>
                <h2 className="text-lg font-semibold">My Cart</h2>
            </div>

            <div className={'mb-24'}>
                {carts.map((product) => (
                    <ProductGridComponent key={product.id} {...product} />
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white py-6 px-3">
                <button onClick={() => navigate('/success-payment')} className="relative bg-primary-blurple text-xs text-white w-full py-4 rounded-[90px] flex justify-center
                items-center gap-4">
                    <ExitIcon/>
                    GO TO CHECKOUT
                    <span className="absolute right-4 p-1 bg-primary-blurple-dark rounded">${totalPrice}</span>
                </button>
            </div>
        </div>
    )
}