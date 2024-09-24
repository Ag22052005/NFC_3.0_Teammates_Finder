import { Outlet } from "react-router-dom";
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import ChatBot from "../components/ChatBot";
import { useAuthContext } from "../context/AuthContext";
export const HomeLayout = () => {
  const {authUser}=useAuthContext()
  return (
    <>
      <Navbar />
      <Outlet />
      {authUser? <div
        className="cursor-pointer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <ChatBot />
      </div>:null}
      <Footer />
    </>
  );
};