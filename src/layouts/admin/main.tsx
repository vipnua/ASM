
import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Outlet } from 'react-router-dom'
import MenuAdminTop from '../../components/Header/AminHeader'
import AminNavbar from '../../components/Navbar/AdminNavbar';


type Props = {}

const main = (props: Props) => {
  return (
    <div>
          <Layout style={{ height: "100vh" }}>
             
            <Header>
                <MenuAdminTop />
            </Header>
            <Layout>        
             <Sider width={200} className="site-layout-background">
                     <AminNavbar />
                </Sider>
                <Content>  <Outlet /></Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </div>
  )
}

export default main