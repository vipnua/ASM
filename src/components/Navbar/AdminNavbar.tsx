import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    LaptopOutlined, NotificationOutlined, UserOutlined, DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";

type Props = {};
const AminNavbar = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key={'1'}>
                        <Link to="product">Proudct</Link>
                    </Menu.Item>
                    <Menu.Item key={'2'}>123</Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    );
};

export default AminNavbar;