import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCallButton from "./FloatingCallButton";
import LocalBusinessSchema from "./LocalBusinessSchema";

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <LocalBusinessSchema />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <FloatingCallButton />
  </div>
);

export default Layout;
