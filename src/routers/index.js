import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'

//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct'
import EditProduct from '../pages/views/Admin/EditProduct'
import Categories from '../pages/views/Admin/Categories'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Products from '../pages/views/Main/Products'
import DetailProduct from '../pages/views/Main/DetailProduct'
import AddCategory from '../pages/views/Admin/AddCategory';


const Routers = ({ products, onRemove, onAdd, onEdit, categories, onAddCate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleAddCate = (category) => {
        onAddCate(category)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/add-product'>
                                <AddProduct products={products} onAdd={onHandleAdd} />
                            </Route>
                            <Route path='/admin/edit-product/:id'>
                                <EditProduct products={products} onEdit={onEdit} />
                            </Route>
                            <Route path='/admin/categories'>
                                <Categories categories={categories} />
                            </Route>
                            <Route path='/admin/add-category'>
                                <AddCategory categories={categories} onAdd={onHandleAddCate} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/products">
                                <Products products={products} />
                            </Route>
                            <Route path="/product/:id">
                                <DetailProduct products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
