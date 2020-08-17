import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Categories = ({ categories }) => {
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">CATEGORY</h1>
     
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Categories</h6>
                    <Link to="/admin/add-category" className="btn btn-info float-right">ADD</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name, desc, image }, index) => (
                                    <tr key={index}>
                                         <td scope="row">{index + 1}</td>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{desc}</td>
                                        <td>
                                           
                                            <button className="btn btn-danger ml-2" >Xóa</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div >
    )
}

Categories.propTypes = {

}

export default Categories
