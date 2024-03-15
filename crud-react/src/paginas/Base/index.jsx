import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const {Header, Sider, Content} = Layout;

function Base(){
    return (
        <Layout>
            <Header>
                {/* Conteúdo do cabeçalho */}
            </Header>
            <Layout>
                <Sider>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="home">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="turmas">
                            <Link to="/turmas">Turmas</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{minHeight: "80vh", margin : "10px"}}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Base;