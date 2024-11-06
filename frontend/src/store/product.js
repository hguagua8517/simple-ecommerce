import { create } from 'zustand';

// Create a store for the products this store will be used to store the products that we fetch from the backend and display them in the frontend. is a global store that can be accessed from any component in the application.
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: 'Please fill all the fields.' };
        }
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        const data = await response.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: 'Product created successfully' };
    },
    fetchProducts: async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        set({ products: data.data });
    }
}));