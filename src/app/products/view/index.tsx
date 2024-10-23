import {useParams, useNavigate} from 'react-router-dom';
import {useAppSelector} from "../../../redux/hooks.ts";
import React from "react";
import {ArrowLeftIcon, LikeIcon, UploadIcon} from "../../../assets/icons";
import {StarRatingComponent} from "../../../components";

export default function Controller() {
    const {id} = useParams<{ id: string; }>(); // URL'dan ID ni olish
    const navigate = useNavigate();
    const productId = parseInt(String(id));
    const {products} = useAppSelector(state => state.variables)
    const product = products.find((p) => p.id === productId); // Mahsulotni topamiz

    const [isExpanded, setIsExpanded] = React.useState(false); // Tavsif qisqartirilganmi yoki to'liqmi
    const [quantity, setQuantity] = React.useState(1); // Miqdor holati
    const [selectedSize, setSelectedSize] = React.useState(product?.selectedSize || ''); // Tanlangan o'lcham

    if (!product) {
        return <div>Mahsulot topilmadi</div>;
    }

    const shortDescription = product.description.slice(0, 150) + '...'; // 150 ta belgi

    // Miqdorni o'zgartirish funksiyasi
    const handleQuantityChange = (delta: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleBack = () => {
        navigate(-1); // Foydalanuvchini oldingi sahifaga qaytarish
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md relative">
            <div className="absolute top-4 left-2 right-2">
                <div className=" w-full flex justify-between items-center ">
                    <button onClick={handleBack} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                        <ArrowLeftIcon/>
                    </button>

                    <div className={'p-2 bg-white rounded-full'}>
                        <LikeIcon/>
                    </div>
                </div>
            </div>

            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg"/>

            {/* Mahsulot tafsilotlari */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 rounded-t-lg">
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">{product.brand}</h2>
                            <h1 className="text-2xl font-semibold">{product.name}</h1>
                            <StarRatingComponent rating={product.rating}/>
                        </div>
                        <p className="text-gray-600 mt-1">${product.price.toFixed(2)} USD</p>
                    </div>

                    <div className="w-full flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <button onClick={() => handleQuantityChange(-1)} className="border rounded-l px-3 py-1">-
                            </button>
                            <span className="border-t border-b px-4 py-1">{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)} className="border rounded-r px-3 py-1">+
                            </button>
                        </div>

                        <button onClick={() => alert("Share this product!")}
                                className="p-2 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full">
                            <UploadIcon size={18}/>
                        </button>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-[Lato] font-bold text-[12px] leading-[19px]">DESCRIPTION</h3>
                        <p className="text-gray-600 font-[Lato] font-medium text-[12px] leading-[19px]">
                            {isExpanded ? (
                                <>
                                    {product.description}{" "}
                                    <button
                                        className="text-purple-600 font-[Lato] font-medium text-[12px] leading-[19px]"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        less
                                    </button>
                                </>
                            ) : (
                                <>
                                    {shortDescription}{" "}
                                    <button
                                        className="text-purple-600 font-[Lato] font-medium text-[12px] leading-[19px]"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                    >
                                        detail
                                    </button>
                                </>
                            )}
                        </p>
                    </div>

                    {/* O'lchamlarni tanlash */}
                    <div className="mt-4">
                        <h3 className="font-[Lato] font-bold text-[12px] leading-[19px]">SELECT SIZE</h3>
                        <div className="flex space-x-2 mt-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded ${size === selectedSize ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Savatchaga qo'shish tugmasi */}
                    <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>

    )
}