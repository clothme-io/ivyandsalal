'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  RightOutlined,
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import Logo from '../components/Logo';
import { MdAnalytics, MdOutlineLocalGroceryStore, MdOutlineLocalMall, MdOutlinePersonOutline, MdSpaceDashboard, MdSupervisorAccount } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { isSiderExpanded, toggleSiderState } from '../_common/sider-state';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  onClick?: React.MouseEventHandler<HTMLElement>,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    onClick,
    children,
    label,
  } as MenuItem;
}

export default function WebAppLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const items: MenuItem[] = [
    getItem('Dashboard', '1', ()=>router.push('/application/dashboard'), <MdSpaceDashboard />),
    getItem('Analytic', '2', ()=>router.push('/application/order'), <MdAnalytics />),
    getItem('Brand', '3', ()=>router.push('/application/brand'), <MdOutlineLocalMall />),
    getItem('Product', '4', ()=>router.push('/application/product'), <MdOutlineLocalGroceryStore />),
  ];
  const [collapsed, setCollapsed] = useState(false);
  useEffect(()=>{
    setCollapsed(isSiderExpanded())
  },[])
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleSiderState = () =>{
    setCollapsed(!collapsed)
    toggleSiderState()
  }

  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <Sider
        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
        trigger={null}
        theme='light'
        collapsedWidth={45}
        className='border-r'
        style={{ overflow: 'visible', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className='flex justify-between items-center px-2.5 mt-4 mb-16'>
          <span
            className={`text-base font-semibold ${collapsed ? '![max-width:0px]':'[max-width:500px]'}
            overflow-hidden transition-all duration-300`}>
            ClothME
          </span>
          <Logo size='[&>*]:h-[12px]' space='-space-x-1' />
        </div>

        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          className='!border-0'
        />

        <Menu
          mode="inline"
          items={[{
            key: 1,
            label: 'Settings',
            icon: <SettingOutlined />,
          }]}
          selectable={false}
          className='absolute bottom-0 inset-x-0'
        />

        <button
          onClick={handleSiderState}
          style={{ transform: `rotate(${collapsed ? 180 : 0}deg)` }}
          className='absolute w-7 h-7 -right-3.5 top-14 bg-primary-blue rounded-full
          flex items-center justify-center ring-2 ring-white
          transform transition-transform duration-300 text-white'>
          <svg className='h-4 w-4' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 3.5L5.25 7L8.75 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 45 : 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};