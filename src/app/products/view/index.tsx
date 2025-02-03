import {useParams, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import React from "react";
import {ArrowLeftIcon, BucketIcon, CheckIcon, LikeIcon, UploadIcon} from "../../../assets/icons";
import {getProductById} from "../../../redux/reducers/variable.ts";
import Loading from "../../../components/loading";
import {createBuckets} from "../../../redux/reducers/bucket.ts";
import {createOrRemoveLike} from "../../../redux/reducers/like.ts";
import { bucketProps } from '../../../interface/redux/bucket.interface.ts';
import { useTranslation } from 'react-i18next';

export default function Controller() {
    const { t } = useTranslation();
    const {id} = useParams<{ id: string}>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const productId = parseInt(String(id));
    const {product, loading} = useAppSelector(state => state.variables)
    const {like} = useAppSelector(state => state.like)
    const {loading: bucketLoad} = useAppSelector(state => state.bucket)

    const [isExpanded, setIsExpanded] = React.useState(false); // Tavsif qisqartirilganmi yoki to'liqmi
    const [quantity, setQuantity] = React.useState(1); // Miqdor holati
    const [selectedSize, setSelectedSize] = React.useState<number>(0);

    React.useLayoutEffect(() => {
        if (productId) {
            dispatch(getProductById(String(productId)))
        }
    }, [productId])

    React.useEffect(() =>{
        if (product) {
            dispatch({
                type: 'likes/createOrRemoveLike/fulfilled',
                payload: { liked: product.liked_by_user }
            });
        }
        
        return () => {
            dispatch({
                type: 'likes/createOrRemoveLike/fulfilled',
                payload: { liked: false }
            });
        };
    }, [product])
    
    const isShort = product?.description && product?.description.length < 150;
    const shortDescription = product?.description.slice(0, 150) + (isShort ? '...' : ''); // 150 ta belgi

    const handleQuantityChange = (delta: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleBack = () => {
        navigate(-1);
    };

    async function getCheckout() {
        if (!selectedSize) return; // Agar o'lcham tanlanmagan bo'lsa, qaytib chiqamiz.
    
        // Mahsulotlar tanlanganligini tekshirish (multiple sizes or products)
        const selectedProducts = product?.sizes?.filter(size => size.id === selectedSize);
    
        if (selectedProducts && selectedProducts.length > 0) {
            // Har bir mahsulot uchun alohida action chaqiriladi
            const results = await Promise.all(
                selectedProducts.map(async size => {
                    return dispatch(
                        createBuckets({
                            quantity,
                            size_id: size.id,
                            product_id: product?.id
                        } as bucketProps)
                    );
                })
            );
    
            // Agar barcha actionlar muvaffaqiyatli bo'lsa, "Cart" sahifasiga o'tamiz
            const isSuccess = results.every(
                ({ payload }) => payload && payload.status !== 500
            );
    
            if (isSuccess) {
                navigate('/carts');
            } else {
                alert('Some products could not be added to the cart.');
            }
        }
    }
    
    async function liked(){
        if (!product?.id) return;

        await dispatch(createOrRemoveLike(product.id))
    }

    if (loading) {
        return <div className={'w-full h-screen flex items-center justify-center'}>
            <Loading/>
        </div>
    }


    return !product ? (
        <div>Mahsulot topilmadi</div>
    ) : (
        <div className="relative h-screen rounded-lg shadow-md bg-primary-amber">
            <div className={'sticky top-0 z-10 w-full h-md:h-[50vh] h-[40vh] flex justify-center items-center'}>
                <div className="absolute z-20 top-10 left-2 right-2">
                    <div className="flex items-center justify-between w-full ">
                        <button onClick={handleBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                            <ArrowLeftIcon/>
                        </button>

                        <div className={'w-12 h-12 flex items-center justify-center bg-white rounded-full'} onClick={liked}>
                            <LikeIcon like={like}/>
                        </div>
                    </div>
                </div>

                <img src={product.image} alt={product.name}
                     className="z-0 object-cover w-1/3 h-auto rounded-lg h-md2:w-1/2"/>
            </div>

            {/* Mahsulot tafsilotlari */}
            <div
                className="absolute z-10 left-0 right-0 bottom-0 h-md:!h-auto h-sm-md:min-h-[60vh] p-4 bg-white rounded-t-[40px] shadow-md">
                <div className="relative flex flex-col justify-between w-full h-full mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-semibold">{product.name}</h1>
                            {/*<StarRatingComponent rating={product.rating}/>*/}
                        </div>
                        <p className="flex items-end font-semibold">
                            <span className="text-xl font-bold">{product.price.toFixed(0)}</span>
                            <span className="text-sm mb-[2px]">.{(product.price % 1).toFixed(2).split('.')[1]}</span>
                            {/* <span className="text-sm mb-[2px]">&nbsp; USD</span> */}
                        </p>
                    </div>

                    <div className="flex items-center justify-between w-full mt-4">
                        <div className="flex items-center">
                            <button onClick={() => handleQuantityChange(-1)}
                                    className="px-3 bg-transparent border rounded-l ">
                                -
                            </button>
                            <span className="px-4 border-t border-b">{quantity}</span>
                            <button disabled={quantity === product.total_count}
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-3 bg-transparent border rounded-r ">
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => alert('Share this product!')}
                            className="flex items-center justify-center p-4 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                            <UploadIcon size={20}/>
                        </button>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-[Lato] font-bold text-[12px] leading-[19px] capitalize">{t ('description')}</h3>
                        <p className="text-gray-600 font-[Lato] font-medium text-[12px] leading-[19px]">
                            {isShort ? product.description : isExpanded ? (
                                <>
                                    {product.description}{' '}
                                    <button
                                        className="text-primary-blurple font-[Lato] font-medium text-[12px] bg-transparent leading-[19px]"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        {t ('less')}
                                    </button>
                                </>
                            ) : (
                                <>
                                    {shortDescription}{' '}
                                    <button
                                        className="text-primary-blurple bg-transparent font-[Lato] font-medium text-[12px] leading-[19px]"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        {t ('detail')}
                                    </button>
                                </>
                            )}
                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-[Lato] font-bold text-[12px] leading-[19px] capitalize">{t ('select-size')}</h3>
                        <div className="flex mt-2 space-x-2">
                            {product.sizes.map((size, key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedSize(size?.id || 0)}
                                    className={`px-4 py-2 border rounded relative ${
                                        size.id === selectedSize ? 'bg-primary-blurple text-white' : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    {size.id === selectedSize && <div className={'absolute top-1 right-1'}>
                                        <CheckIcon/>
                                    </div>}
                                    {size.size_name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={getCheckout}
                            disabled={!selectedSize || bucketLoad}
                            className="mt-6 w-full text-xs bg-primary-blurple uppercase flex justify-center items-center gap-4 text-white py-4 rounded-[30px] h-md:mb-0">
                        <BucketIcon color={'white'}/> {t ('add-to-cart')}
                    </button>
                </div>
            </div>
        </div>

    )
}