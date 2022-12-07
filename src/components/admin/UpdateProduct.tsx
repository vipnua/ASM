import React, { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, Layout, Upload, message, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchProduct, fetchProducts, fetchUpdateProduct } from '../../slice/product';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProduct';

const UpdateProduct : React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {        
        dispatch(fetchProduct(Number(id)));
    }, []);
    const product: any = useAppSelector((state) => state.products.value);
    console.log(product.name);
    const onSubmit = (values: any) => {
        message.info('thành công')
        values.id = Number(id)
        values.images = product.images
        dispatch(fetchUpdateProduct(values));
    }
    function covert(product: any) {
        return product = {
            value: product.category,
            lable: product.category
        }
    }
    return (
        <Form className='mt-10 mx-20' onFinish={onSubmit} name="product">
            <Form.Item name={'name'} label="Product name" rules={[{ required: true, message: '${label} is required' }]} initialValue={product.name}>
                <Input />
            </Form.Item>
            <Form.Item name={'description'} label="description" rules={[{ required: true, message: '${label} is required' }]} initialValue={product.description}>
                <Input />           
            </Form.Item>
            <Form.Item name={'category'} label="category">
            <Select
                    defaultValue={[covert(product)][0]}
                    options={[covert(product)]}
                />
            </Form.Item>
             
            <Form.Item name={'originalPrice'} label="original Price" rules={[{ type: 'number', min: 1, required: true, message: '${label} must be minimum ${min}' }]} initialValue={product.originalPrice}>
                <InputNumber />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
            <Button className='bg-rose-700' type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    )

}
export default UpdateProduct