import {
    IndexController, 
    ProductPreviewController
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
    }
]