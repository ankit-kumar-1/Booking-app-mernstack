import { Outlet } from "react-router-dom"
import Header from "./Header"

function Layout() {
    return (
        <div className="py-4 px-8 flex flex-col min-h-screen mx-36">
            <Header />
            <Outlet />

        </div>
    )
}

export default Layout
