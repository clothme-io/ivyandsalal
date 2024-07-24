"use client";

import React from 'react';
import { useRouter } from 'next/navigation'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Image } from 'antd';
import {
  MdChevronRight,
  MdOutlineChevronRight
} from "react-icons/md";

export const runtime = "edge";

interface DataType {
  key: React.Key;
  logo: string;
  name: string;
  price: string;
  quantity: string;
  review: string;
  status: string
  action: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (url) => <div onClick={(e)=>e.stopPropagation()}>
      <Image src={url} width={50} />,
    </div>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Review',
    key: 'review',
    dataIndex: 'review',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <Tag color={status === 'Approved' ? 'green' : 'volcano'} key={status}>
        {status}
      </Tag>
    ),
  },
  {
    // title: '',
    key: 'action',
    render: (_, record) => (
      <MdOutlineChevronRight size={24} />
      // <Space size="middle">
      //   <a>Invite {record.name}</a>
      //   <a>Delete</a>
      // </Space>
    ),
  },
];


const data: DataType[] = [
  {
    key: '1',
    logo: 'https://hartwoch.de/cdn/shop/products/CM_020_city_cycling_Hoodie_Cruiser_black_VS_Ansicht_1024x1024@2x.png?v=1693549210',
    name: 'John Brown',
    price: '100',
    quantity: '10',
    review: 'New York No. 1 Lake Park',
    status: 'Approved',
    action: 'action',
  },
  {
    key: '2',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xoSQgR91O1fCNqXGFVLNS3HNeB1MA51Rcw&s',
    name: 'Jim Green',
    price: '200',
    quantity: '20',
    review: 'London No. 1 Lake Park',
    status: 'Pending',
    action: 'action',
  },
];

const ProductTable: React.FC = () => {

  const router = useRouter()

  return (
    <div className="w-full">
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log('This is the row clicked record ===', record)

              router.push(`/application/product/detail/${record.key}`)
            }
          }
        }}
      />
    </div>
  )
}

export default ProductTable;