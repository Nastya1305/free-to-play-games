import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout as AntLayout } from "antd";



const Layout: FC = () => {
   return (
      <div className="container">
         <AntLayout >
            <AntLayout.Content style={{ padding: '50px 20px' }}>
               <Outlet />
            </AntLayout.Content>
         </AntLayout>
      </div >
   )
}

export default Layout;