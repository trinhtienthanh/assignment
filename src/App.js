import React, { useState, useEffect } from 'react';
import apiRequest from './api/productApi';
import apiRequestCate from './api/categoryApi';
import dataFake from './dataFake';
import Routers from './routers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('You have an error: ', error);
      }
    }
    getProducts();
    const getCategories = async () => {
      try {
        const { data } = await apiRequestCate.getAll();
        setCategories(data);
      } catch (error) {
        console.log('You have an error: ', error);
      }
    }
    getCategories();
  }, [])

  const onHandleRemove = async (id) => {
    try {
      await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('You have an error', error)
    }

  }
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('You have an error', error)
    }

  }
  const onHandleEdit = (newProduct) => {
    try {
      apiRequest.update(newProduct.id, newProduct);
      const editedProduct = products.map(product => (
        product.id === newProduct.id ? newProduct : product
      ));
      // localStorage.setItem('products', JSON.stringify(editedProduct));
      setProducts(editedProduct);
    } catch (error) {
      console.log('You have an error', error)
    }
  }
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await apiRequestCate.create(category);
      setCategories([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('You have an error', error)
    }
  }
  return (
    <div className="App">
      <Routers
        products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        categories={categories} onAddCate={onHandleAddCate}
      />
    </div>
  )

}
export default App;
