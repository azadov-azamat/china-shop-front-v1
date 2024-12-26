import {useParams, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import React from "react";
import {ArrowLeftIcon, BucketIcon, CheckIcon, LikeIcon, UploadIcon} from "../../../assets/icons";
import {createLike, deleteLike, getProductById} from "../../../redux/reducers/variable.ts";
import Loading from "../../../components/loading";
import {createBuckets} from "../../../redux/reducers/bucket.ts";

export default function Controller() {
    const {id} = useParams<{ id: string; }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const productId = parseInt(String(id));
    const {product, loading} = useAppSelector(state => state.variables)

    const [isExpanded, setIsExpanded] = React.useState(false); // Tavsif qisqartirilganmi yoki to'liqmi
    const [quantity, setQuantity] = React.useState(1); // Miqdor holati
    const [selectedSize, setSelectedSize] = React.useState('');

    React.useLayoutEffect(() => {
        if (productId) {
            dispatch(getProductById(String(productId)))
        }
    }, [productId])

    const shortDescription = product?.description.slice(0, 150) + '...'; // 150 ta belgi

    const handleQuantityChange = (delta: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleBack = () => {
        navigate(-1);
    };

    async function getCheckout() {
        const {payload} = await dispatch(createBuckets({count: quantity, size: selectedSize, product}))
        if (payload.status !== 500) {
            navigate('/carts')
        }
    }

    async function liked(){
        if (!product?.id) return;

        if (product.like && product.like.id) {
            await dispatch(deleteLike(product.like.id))
        } else {
            await dispatch(createLike({liked: true, product}))
        }
    }

    if (loading) {
        return <div className={'w-full h-screen flex items-center justify-center'}>
            <Loading/>
        </div>
    }

    return !product ? (
        <div>Mahsulot topilmadi</div>
    ) : (
        <div className="bg-primary-amber rounded-lg shadow-md relative h-screen">
            <div className={'sticky top-0 z-10 w-full h-md:h-[50vh] h-[40vh] flex justify-center items-center'}>
                <div className="absolute top-10 left-2 right-2 z-20">
                    <div className=" w-full flex justify-between items-center ">
                        <button onClick={handleBack} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <ArrowLeftIcon/>
                        </button>

                        <div className={'w-12 h-12 flex items-center justify-center bg-white rounded-full'} onClick={liked}>
                            <LikeIcon like={product?.like?.liked}/>
                        </div>
                    </div>
                </div>

                <img src={product.media[0]?.path} alt={product.name}
                     className="h-md2:w-1/2 w-1/3 h-auto object-cover rounded-lg z-0"/>
            </div>

            {/* Mahsulot tafsilotlari */}
            <div
                className="absolute z-10 left-0 right-0 bottom-0 h-md:!h-auto h-sm-md:min-h-[60vh] p-4 bg-white rounded-t-[40px] shadow-md">
                <div className="mt-4 relative w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-semibold">{product.name}</h1>
                            {/*<StarRatingComponent rating={product.rating}/>*/}
                        </div>
                        <p className="font-semibold flex items-end">
                            <span className="text-xl font-bold">${product.price.toFixed(0)}</span>
                            <span className="text-sm mb-[2px]">.{(product.price % 1).toFixed(2).split('.')[1]}</span>
                            <span className="text-sm mb-[2px]">&nbsp; USD</span>
                        </p>
                    </div>

                    <div className="w-full flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <button onClick={() => handleQuantityChange(-1)}
                                    className="border bg-transparent rounded-l px-3 ">
                                -
                            </button>
                            <span className="border-t border-b px-4">{quantity}</span>
                            <button disabled={quantity === product.amount}
                                    onClick={() => handleQuantityChange(1)}
                                    className="border bg-transparent rounded-r px-3 ">
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => alert('Share this product!')}
                            className="p-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full"
                        >
                            <UploadIcon size={20}/>
                        </button>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-[Lato] font-bold text-[12px] leading-[19px]">DESCRIPTION</h3>
                        <p className="text-gray-600 font-[Lato] font-medium text-[12px] leading-[19px]">
                            {isExpanded ? (
                                <>
                                    {product.description}{' '}
                                    <button
                                        className="text-primary-blurple font-[Lato] font-medium text-[12px] bg-transparent leading-[19px]"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        less
                                    </button>
                                </>
                            ) : (
                                <>
                                    {shortDescription}{' '}
                                    <button
                                        className="text-primary-blurple bg-transparent font-[Lato] font-medium text-[12px] leading-[19px]"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        detail
                                    </button>
                                </>
                            )}
                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-[Lato] font-bold text-[12px] leading-[19px]">SELECT SIZE</h3>
                        <div className="flex space-x-2 mt-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded relative ${
                                        size === selectedSize ? 'bg-primary-blurple text-white' : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    {size === selectedSize && <div className={'absolute top-1 right-1'}>
                                        <CheckIcon/>
                                    </div>}
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={getCheckout}
                            disabled={!selectedSize}
                            className="mt-6 w-full text-xs bg-primary-blurple flex justify-center items-center gap-4 text-white py-4 rounded-[30px] h-md:mb-0">
                        <BucketIcon color={'white'}/> ADD TO CART
                    </button>
                </div>
            </div>
        </div>

    )
}