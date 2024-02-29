interface Routes {
  [index: string]: string;
}

export const ROUTES: Routes = {
    HOME: '/',
    CART: 'cart',
    CATEGORY: '/categories/:id',
    PRODUCT: '/products/:id',
}
