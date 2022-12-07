import React from 'react'
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { useAppDispatch } from '../../app/hook';
import { fetchSignin } from '../../slice/auth';
type Props = {}

const signin = (props: Props) => {
  const dispatch = useAppDispatch();
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values: any) => {
    dispatch(fetchSignin(values))
  };
  return (
    <>
    <Layout>Sign in form </Layout>
    <Form
      name="basic"
      labelCol={{ span: 10}}
      wrapperCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default signin