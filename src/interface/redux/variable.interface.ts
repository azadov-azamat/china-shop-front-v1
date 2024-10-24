export interface InitialStateProps {
    loading: boolean;
    subscribeLoading: boolean;
    product: productCardProps | null;
    products: productCardProps[] | [];
    carts: cartCardProps[] | [];
    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface cartCardProps extends productCardProps{
    quantity: number;
}
export interface productCardProps extends defaultKeys{
    image: string;
    name: string;
    price: number;
    description: string;
    brand: string;
    rating: number;
    availableColors: string[]; // Mavjud ranglar (massiv shaklida)
    sizes: string[]; // Mavjud o'lchamlar (massiv shaklida)
    selectedSize: string; // Hozirgi tanlangan o'lcham
    stockQuantity: number; // Omborda mavjud miqdor
}


export interface defaultKeys {
    id: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}