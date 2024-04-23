import { Outlet } from "react-router-dom";
import Navbar from "../nav";
import Sidebar from "../sidebar";
import "./index.scss"

const Layout = () => {
    return (
        <>
            <Navbar/>
            <main className="app">
                <Sidebar/>
                <Outlet/>
            </main>
        </>
      );
}
 
export default Layout;