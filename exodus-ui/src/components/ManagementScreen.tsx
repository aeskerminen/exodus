import React from "react";
import { Link } from "react-router-dom";

const ManagementScreen = () : React.JSX.Element => {
  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <Link
          style={{ backgroundColor: "#343434" }}
          className="p-3 shadow rounded-lg w-fit shadow"
          to={"/management/boxes"}
        >
          Box rental manager
        </Link>
        <Link
          style={{ backgroundColor: "#343434" }}
          className="p-3 shadow rounded-lg w-fit shadow"
          to={"/management/warehouse"}
        >
          Warehouse rental manager
        </Link>
        <Link
          style={{ backgroundColor: "#343434" }}
          className="p-3 shadow rounded-lg w-fit shadow"
          to={"/management/move"}
        >
          Move manager
        </Link>
      </div>
    </div>
  );
};

export default ManagementScreen;
