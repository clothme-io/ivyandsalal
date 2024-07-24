/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Image } from 'antd';
import {
  MdChevronRight,
  MdOutlineChevronRight
} from "react-icons/md";
import { useGetBrands } from '../_actions/brandQuery';

export const runtime = "edge";

interface DataType {
  key: React.Key;
  logo: string;
  name: string;
  review: string;
  status: string;
  action: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (url) => <div onClick={(e) => e.stopPropagation()}>
      <Image src={url} width={50} />,
    </div>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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
    review: 'New York No. 1 Lake Park',
    status: 'Approved',
    action: 'action',
  },
  {
    key: '2',
    logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    name: 'Jim Green',
    review: 'London No. 1 Lake Park',
    status: 'Pending',
    action: 'action',
  },
];

const BrandTable: React.FC = () => {

  const router = useRouter()

  const formatData = (data: any) => {
    console.log("This is incoming data ==", data);
  }

  const { data, error, isError, isLoading } = useGetBrands({ vendorId: "rec_cqc8eobfhc96uceo0cc0" });

  useEffect(() => {
    if (data !== null || data !== undefined || !data) {
      formatData(data)
    }
  }, [isLoading]);

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="w-full">
      {data !== undefined || !data ?
        (<div><p>No data</p></div>) :
        (<Table
          columns={columns}
          dataSource={data}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                console.log('This is the row clicked record ===', record)

                router.push(`/application/brand/detail/${record.key}`)
              }
            }
          }}
        />)
      }
    </div>
  )
}

export default BrandTable;