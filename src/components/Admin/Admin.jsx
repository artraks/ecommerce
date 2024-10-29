import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { FaTrash, FaEdit } from "react-icons/fa";

function AdminDashboard() {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [color, setColor] = useState('');
    const [products, setProducts] = useState([]);
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editProductId) {
            const updatedProduct = { id: editProductId, title, rating, color };
            updateProduct(updatedProduct);
        } else {
            const newProduct = { id: Date.now(), title, rating, color };
            addProduct(newProduct);
        }
        setTitle('');
        setRating('');
        setColor('');
        setEditProductId(null);
    };

    const addProduct = (newProduct) => {
        const updatedProducts = [...products, newProduct];
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    };

    const deleteProduct = (title) => {
        const updatedProducts = products.filter((product) => product.title !== title);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        alert(`Product "${title}" has been deleted.`);
    };

    const editProduct = (product) => {
        setTitle(product.title);
        setRating(product.rating);
        setColor(product.color);
        setEditProductId(product.id);
    };

    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        alert(`Product "${updatedProduct.title}" has been updated.`);
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-md mx-auto mt-8">
                <h2 className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-md text-center">
                    {editProductId ? 'Edit Product' : 'Add New Product'}
                </h2>
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mt-4">
                    <div className="flex items-center mb-2">
                        <label className="text-black font-bold mr-2">Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-100 rounded-md p-2 w-full mt-1" required />
                    </div>
                    <div className="flex items-center mb-2">
                        <label className="text-black font-bold mr-2">Rating:</label>
                        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} className="bg-gray-100 rounded-md p-2 w-full mt-1" min="1" max="5" required />
                    </div>
                    <div className="flex items-center mb-2">
                        <label className="text-black font-bold mr-2">Color:</label>
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="bg-gray-100 rounded-md p-2 w-full mt-1" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-400 w-full">
                            {editProductId ? 'Update Product' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>

            <h2 className="text-xl font-bold mb-4 mt-8 text-center">Manage Products</h2>
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="flex justify-between items-center bg-white text-gray-800 rounded-lg shadow-md p-4 transition-all hover:shadow-lg">
                            <div>
                                <h3 className="font-semibold text-lg">{product.title}</h3>
                                <p className="text-sm text-gray-500">Rating: {product.rating}</p>
                                <p className="text-sm text-gray-500">Color: {product.color}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => editProduct(product)} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteProduct(product.title)} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products available.</p>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;
