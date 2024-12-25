export interface InitialStateProps {
    loading: boolean;
    subscribeLoading: boolean;
    categories: categoryDataProps[] | [];
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

export interface categoryDataProps extends defaultKeys{
    name: string;
}

export interface productCardProps extends defaultKeys{
    name: string;
    price: number;
    sizes: string[];
    description: string;
    media: any;
    amount: number; // Omborda mavjud miqdor
}


export interface defaultKeys {
    id: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}