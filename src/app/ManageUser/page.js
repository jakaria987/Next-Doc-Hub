import Layout from "@/components/Dashboard/Layout";
import React from "react";

const ManageUser = () => {
  return (
    <>
      <div className="invisible lg:visible flex">
        <Layout></Layout>

        <h5 className="text-xl w-full">All Users:</h5>
      </div>
    </>
  );
};

export default ManageUser;
