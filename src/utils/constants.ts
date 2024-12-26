import {
    CartController, ErrorPaymentController, FavoriteController,
    IndexController, PaymentController,
    ProductPreviewController, SearchController, SuccessPaymentController
} from '../app/index';

export const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
export const CATEGORIES = ['Popular', 'Men', 'Women', 'Sale'];

export const routes = [
    {
        id: 1,
        name: 'products list page',
        path: '/',
        component: IndexController
    },
    {
        id: 2,
        name: 'product preview page',
        path: '/product/:id',
        component: ProductPreviewController
    },
    {
        id: 3,
        name: 'bucket cart page',
        path: '/carts',
        component: CartController
    },
    {
        id: 4,
        name: 'search page',
        path: '/search',
        component: SearchController
    },
    {
        id: 5,
        name: 'favorite page',
        path: '/favorite',
        component: FavoriteController
    },
    {
        id: 6,
        name: 'success payment page',
        path: '/success-payment',
        component: SuccessPaymentController
    },
    {
        id: 7,
        name: 'error payment page',
        path: '/error-payment',
        component: ErrorPaymentController
    },
    {
        id: 8,
        name: 'payment page',
        path: '/payment/:orderId',
        component: PaymentController
    }
]