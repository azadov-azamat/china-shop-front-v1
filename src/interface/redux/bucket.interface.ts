import {defaultKeys, productCardProps, sizesDataProps} from "./variable.interface.ts";

export interface BucketInitialStateProps {
    loading: boolean;
    buckets: bucketsProps | null;
    bucket: bucketProps | null;

    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}
export interface bucketsProps extends defaultKeys {
    order: orderBucketProps;
    payment_link: string;
}

export interface orderBucketProps extends defaultKeys {
    user: number;
    items: orderItemProps[] | [];
    is_paid: boolean;
    total_price: number;
}

export interface orderItemProps extends defaultKeys {
    product: productCardProps;
    size?: sizesDataProps;
    quantity?: number;
    available_stock?: number;
    total_price?: number;
    order_item_id?: number;
}

export interface bucketProps extends defaultKeys{
    quantity: number;
    size_id: number;
    product_id?: number;
    order_item_id?: number;
}