import { Link } from "react-router-dom";

const ManagementScreen = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="flex justify-center items-center gap-2">
        <Link
          style={{ backgroundColor: "#343434" }}
          className="p-2 shadow rounded-lg w-fit border-2"
          to={"/management/boxes"}
        >
          Box rental manager
        </Link>
        <Link
          style={{ backgroundColor: "#343434" }}
          className="p-2 shadow rounded-lg w-fit border-2"
          to={"/management/warehouse"}
        >
          Warehouse rental manager
        </Link>
      </div>
    </div>
  );
};

export default ManagementScreen;
