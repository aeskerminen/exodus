import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRentalAssignment,
  deleteRentalAssignment,
  fetchRentalAssignments,
} from "../reducer/boxRentalSlice";

const WarehouseRentalManager = () => {
  const [totalBoxes, setTotalBoxes] = useState(0);
  const [rentedBoxes, setRentedBoxes] = useState(0);

  const dispatch = useDispatch();
  const rentalAssignments = useSelector((state) => state.rentalAssignments);

  return (
    <div className="w-full h-full p-4">
      <div className="m-auto p-4 border-2 border-black rounded w-fit mb-4">
        <p>Total units: {totalBoxes}</p>
        <p>Rented units: {rentedBoxes}</p>
      </div>
      <div className="m-auto p-4 flex flex-col gap-2 w-full border-2 border-black rounded">
        <button
          style={{ backgroundColor: "#343434" }}
          className="p-2 shadow rounded-lg w-fit border-2"
          onClick={() => setShowCreationModal(true)}
        >
          Add rental
        </button>
        <div className="grid grid-cols-4 gap-2 p-2 bg-gray-400">
          <svg width="100" height="125">
            <rect
              width="100"
              height="125"
              fill="white"
              stroke="black"
              strokeWidth={5}
            />
          </svg>
          
        </div>
      </div>
    </div>
  );
};

export default WarehouseRentalManager;
