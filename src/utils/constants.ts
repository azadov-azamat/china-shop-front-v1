import {
    CartController, FavoriteController,
    IndexController,
    ProductPreviewController, SearchController
} from '../app/index';


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
    }
]