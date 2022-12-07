import { Button, message, Popconfirm, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchProducts,fetchDeleteProduct} from "../../slice/product";
import { IProduct } from '../../interfaces/IProduct';
import { key } from "localforage";

const Product = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const confirm =(key:any,type:string) =>{
        if(type === 'delete'){
           return dispatch(fetchDeleteProduct(key))
        }
    }
    const getProduct = () =>{
        return products.map((product)=>({
            key: product.id,
            name: product.name,
            originalPrice: product.originalPrice,
            images: product.images,
        }))
    }
    return (
        <div>
            {/* <Link to="/admin/products/add">Add</Link> */}
            <Table dataSource={getProduct()}>
                <Column title="Id" dataIndex="key" key="key" />
                <Column title="Product name" dataIndex="name" key="name" />
                <Column title="original Price" dataIndex="originalPrice" key="originalPrice" />
                <Column title="Images" dataIndex="images" key="images" render={(images: any) => (
                    <>
                        <div><img src={images.image} alt="product" style={{ maxWidth: '15vh' }} /></div>
                    </>
                )} />
                <Column
                    title="Action"
                    key="key"
                    dataIndex="key"
                    render={(key:any,type:string) => (
                        <Space size="middle">
                             <Popconfirm
                                    title="are you sure to delete?"
                                    placement="top"
                                    onConfirm={() => confirm(key,type="delete")}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button type="primary" danger>
                                        Delete
                                    </Button>
                                </Popconfirm>
                                {/* <Popconfirm
                                    title="are you sure to update"
                                    placement="top"
                                    onConfirm={() => confirm(key,type="update")}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button type="primary" style={{backgroundColor:'green',color:'white'}}>Update</Button>
                                      
                                </Popconfirm> */}
                                <Link className="btn btn-warning" to={`/admin/product/edit/${key}`}>
                                <Button type="primary" style={{backgroundColor:'green',color:'white'}}>Update</Button>
                                </Link>
                        </Space>
                    )}
                />
            </Table>
        </div>
    );
};

export default Product;