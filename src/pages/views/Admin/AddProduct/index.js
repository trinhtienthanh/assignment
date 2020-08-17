import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"
import { Editor } from '@tinymce/tinymce-react'
import firebase from '../../../../firebase'
import PropTypes from 'prop-types'

const AddProduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let redirect = useHistory();

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`products/${file.name}`);

        storageRef.put(file).then(() => {
            storageRef.getDownloadURL()
                .then((url) => {
                    console.log(url);
                    const newData = {
                        id: Math.random().toString(36).substr(2, 9),
                        ...data,
                        image: url
                    }
                    console.log(newData);
                    onAdd(newData);
                    redirect.push("/admin/products");
                });
        });
    }
    return (
        <div>
            {/* Page Heading */}
           
            
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">ADD-products</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text" className="form-control" placeholder="Enter name"
                                        name="name"
                                        ref={register({ required: true })}
                                    />
                                    {errors.name && errors.name.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa nhập tên</div>}
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="number" className="form-control" placeholder="Enter price"
                                        name="price"
                                        ref={register({ required: true, pattern: /^\d+$/ })}
                                    />
                                    {errors.price && errors.price.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa nhập giá</div>}
                                    {errors.price && errors.price.type === "pattern" && <div className="alert alert-danger mt-3">Giá phải là số</div>}
                                </div>
                                <div className="form-group">
                                    <label>Sale-Price</label>
                                    <input
                                        type="number" className="form-control" placeholder="Enter sale-price"
                                        name="saleprice"
                                        ref={register}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Short-Desc</label>
                                    <textarea
                                        className="form-control" rows="2"
                                        name="shortdesc"
                                        ref={register}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control" rows="5"
                                        name="desc"
                                        ref={register({ required: true })}
                                    ></textarea>
                                    {errors.desc && <div className="alert alert-danger mt-3">Bạn chưa nhập chi tiết sản phẩm</div>}
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input
                                        type="file" className="form-control-file"
                                        name="image"
                                        ref={register}
                                    />

                                </div>
                                {/* <div className="form-group form-check">
                                    <input
                                        type="checkbox" value="1" className="form-check-input"
                                        name="showmenu"
                                        ref={register}
                                    />
                                    <label className="form-check-label" for="exampleCheck1">Tình trạng hàng</label>
                                </div> */}
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

AddProduct.propTypes = {

}

export default AddProduct
