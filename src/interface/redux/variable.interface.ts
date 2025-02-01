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
    category: 1;
    description: string;
    image: string;
    liked_by_user: boolean;
    name: string;
    price: number;
    sizes: sizesDataProps[];
    total_count: number;
}

export interface sizesDataProps extends defaultKeys{
    count: number;
    is_available: boolean;
    size_name: string;
}

export interface defaultKeys {
    id?: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}