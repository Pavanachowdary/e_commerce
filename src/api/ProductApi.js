import apiClient from './api';

// --- MOCKED DATA (for demonstration) ---
const mockProducts = [
  { id: 1, name: "Laptop Pro", price: 1200, category: "Electronics", stock: 50 },
  { id: 2, name: "Running Shoes", price: 80, category: "Fashion", stock: 120 },
  { id: 3, name: "Smart Watch", price: 200, category: "Accessories", stock: 200 },
];

// --- API FUNCTIONS ---

/**
 * Fetches a list of all products.
 * In a real app, this would be: return apiClient.get('/products');
 */
export const fetchProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: mockProducts });
    }, 500); // 0.5-second delay
  });
};

/**
 * Creates a new product.
 * In a real app, this would be: return apiClient.post('/products', productData);
 */
export const createProduct = (productData) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const newProduct = { id: Date.now(), ...productData };
      mockProducts.push(newProduct);
      console.log("API: Created product", newProduct);
      resolve({ data: newProduct });
    }, 500);
  });
};

/**
 * Fetches a single product by its ID.
 * In a real app, this would be: return apiClient.get(`/products/${id}`);
 */
export const fetchProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = mockProducts.find(p => p.id === parseInt(id));
            resolve({ data: product });
        }, 300);
    });
};

/**
 * Updates an existing product.
 * In a real app, this would be: return apiClient.put(`/products/${id}`, productData);
 */
export const updateProduct = (id, productData) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`API: Updated product ${id}`, productData);
            resolve({ data: { id, ...productData } });
        }, 500);
    });
};

/**
 * Deletes a product by its ID.
 * In a real app, this would be: return apiClient.delete(`/products/${id}`);
 */
export const deleteProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`API: Deleted product ${id}`);
            resolve({ data: { message: "Product deleted" } });
        }, 500);
    });
};