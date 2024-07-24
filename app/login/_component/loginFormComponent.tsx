"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useLoginMutation } from '../_actions/useLoginMutation';
import { LoginModelInterface } from '../_model/loginModel';
import { Button, Checkbox, Form, Input } from 'antd';

export const runtime = "edge";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { mutate, isError, isSuccess } = useLoginMutation();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const input: LoginModelInterface = {
      email: values.email,
      password: values.password
    }

    mutate(input)

    values.email = ""
    values.password = ""

    router.push("")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
