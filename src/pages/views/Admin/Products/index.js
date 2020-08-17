import React from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'sweetalert2-react'
import PropTypes from 'prop-types';

const ProductsManager = ({ products, onRemove, onEdit }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    // const editHandle = (id) => {
    //     onEdit(id)
    // }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Products</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Products</h6>
                    <Link to="/admin/add-product" className="btn btn-info float-right">Thêm</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price, saleprice, shortdesc, desc, showmenu }, index) => (
                                    <tr key={index}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{name}</td>
                                        <td><img src={image} width="50" /> </td>
                                        <td>{price}</td>

                                        <td>
                                            <Link to={`/admin/edit-product/${id}`}><button className="btn btn-info">Sửa</button></Link>
                                            <button className="btn btn-danger ml-2" onClick={() => { if (window.confirm('Bạn có chắc chắn xóa?')) { removeHandle(id) }; }}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
