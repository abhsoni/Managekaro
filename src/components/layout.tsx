// import Footer from "./footer";
// import LoginHeader from "./loginHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <LoginHeader /> */}
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
