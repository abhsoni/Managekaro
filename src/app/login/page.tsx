// "use client";
import React, { useState } from "react";
import LoginCard from "../../components//LoginPage/LoginCard";
import Layout from "@/components/layout";

function LoginPage() {
  return (
    // <div className="flex bg-white top-0 left-0 w-screen h-screen justify-center items-center text-black ">
    <Layout>
      <LoginCard />
    </Layout>
    // </div>
  );
}

export default LoginPage;
