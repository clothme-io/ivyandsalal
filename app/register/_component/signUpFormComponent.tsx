"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSignUpMutation } from '../_actions/useSignUpMutation';
import { SignUpModelInterface } from '../_model/signUpModel';
import { Button, Form, Input, Select } from 'antd';

export const runtime = "edge";

type FieldType = {
  companyName: string;
  email: string;
  vendorType: string;
  country: string;
  password?: string;
};

const { Option } = Select;

export default function SignUpFormComponent() {

  const router = useRouter();
  const [form] = Form.useForm();

  const { mutate, isError, isPending, isSuccess } = useSignUpMutation();

  const onFinish = (values: any) => {
    console.log('Got input from Values ==:', values);
    const input: SignUpModelInterface = {
      email: values.email,
      password: values.password,
      companyName: values.companyName,
      country: values.country,
      vendorType: values.vendorType
    }
    console.log('Input values for Input ==:', input);
    mutate(input)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
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
          label="Company Name"
          name="companyName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="vendorType"
          label="Type"
          rules={[{ required: true }]}>
          <Select
            placeholder="Select a type"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="Apparel">Apparel</Option>
            <Option value="Accessories">Accessories</Option>
            <Option value="Shoes">Shoes</Option>
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          name="country"
          label="Country"
          rules={[{ required: true }]}>
          <Select
            placeholder="Select your country"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="Canada">Canada</Option>
            <Option value="USA">USA</Option>
            <Option value="Nigeria">Nigeria</Option>
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Eamil' }]}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
