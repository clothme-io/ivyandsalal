"use client";

import Link from "next/link";
import {
  Sidebar,
  Menu,
  MenuItem
} from "react-pro-sidebar";
import {
  MdSpaceDashboard,
  MdAnalytics,
  MdSupervisorAccount,
  MdOutlinePersonOutline,
  MdOutlineLocalMall,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";

export const runtime = "edge";

export const SideBar = () => {
  // const { collapseSidebar } = useProSidebar();

  return (
    <>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            // icon={<MdSpaceDashboard />}
            onClick={() => {
              // collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>ClothME</h2>
          </MenuItem>
          <div className="py-5"></div>
          <MenuItem
            // active ? active : null
            component={<Link href="/application/dashboard" />}
            icon={<MdSpaceDashboard />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link href="/application/brand" />}
            icon={<MdAnalytics />}
          >
            Brand
          </MenuItem>
          <MenuItem
            component={<Link href="/application/product" />}
            icon={<MdOutlineLocalMall />}
          >
            Product
          </MenuItem>
          <MenuItem
            component={<Link href="/application/order" />}
            icon={<MdOutlineLocalGroceryStore />}
          >
            Order
          </MenuItem>
          <MenuItem
            component={<Link href="/customer/all" />}
            icon={<MdSupervisorAccount />}
          >
            Customer
          </MenuItem>
          <MenuItem
            component={<Link href="/profile" />}
            icon={<MdOutlinePersonOutline />}
          >
            Profile
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};
