import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRentalAssignment,
  deleteRentalAssignment,
  fetchRentalAssignments,
} from "../reducer/boxRentalSlice";

const generateWarehouseUnit = (size, identifier, rented) => {
  return { size, identifier, rented };
};

const generateWarehouseRental = (customer_name, begin_date, end_date, unit) => {
  return {
    customer_name,
    begin_date,
    end_date,
    unit,
  };
};

const warehouseUnits = [
  generateWarehouseUnit(10, "Unit 1", false),
  generateWarehouseUnit(10, "Unit 2", true),
  generateWarehouseUnit(15, "Unit 3", true),
  generateWarehouseUnit(15, "Unit 4", false),
  generateWarehouseUnit(20, "Unit 5", false),
  generateWarehouseUnit(25, "Unit 6", true),
  generateWarehouseUnit(30, "Unit 7", false),
];

const WarehouseRentalManager = () => {
  const [totalUnits, setTotalUnits] = useState(0);
  const [rentedUnits, setRentedUnits] = useState(0);

  const [showCreationModal, setShowCreationModal] = useState(false)

  const dispatch = useDispatch();
  const [units, setUnits] = useState(warehouseUnits);

  const Modal = () => {
    return (
      <div
        className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
        style={{ backgroundColor: "#000000A0", backdropFilter: "blur(5px)", zIndex: 9999 }}
      >
        <div className="w-1/3 bg-black pb-3 pl-3 pr-3 pt-1">
          <button
            className="p-2 mb-2 rounded-full bg-red-500"
            onClick={() => setShowCreationModal(false)}
          ></button>{" "}
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => createAssignment(e)}
          >
            <input
              required
              className="p-2"
              type="text"
              placeholder="Customer name..."
            ></input>
            <input
              required
              defaultValue={new Date().toISOString().substring(0, 10)}
              className="p-3"
              type="date"
            ></input>
            <input required className="p-3" type="date"></input>
            <input
              required
              className="p-3"
              type="number"
              placeholder="Unit"
            ></input>
            <button
              className="p-3 mt-2 mb-2 border-2 w-fit m-auto rounded"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen p-4 flex flex-col gap-2">
      {showCreationModal && <Modal></Modal>}
      <div className="m-auto p-4 border-2 border-black rounded w-fit">
        <p>Total units: {totalUnits}</p>
        <p>Rented units: {rentedUnits}</p>
      </div>
      <div className="m-auto p-4 flex flex-col gap-2 w-full h-full border-2 border-black rounded">
        <button
          style={{ backgroundColor: "#343434" }}
          className="p-2 shadow rounded-lg w-fit border-2"
          onClick={() => setShowCreationModal(true)}
        >
          Add rental
        </button>
        <div className="grid grid-cols-4 gap-2 p-2 border-2 border-black rounded h-full">
          {units.map((unit) => {
            const normalizedSize = Math.ceil((unit.size - 1) / (12 - 1));
            return (
              <div
                style={{ backgroundColor: "#343434" }}
                className={`relative col-span-${normalizedSize} p-2 flex flex-col justify-center items-center`}
              >
                <button
                  style={{ backgroundColor: unit.rented ? "red" : "green" }}
                  className="absolute top-0 left-0 ml-2 mt-2 p-2 rounded-full"
                ></button>
                <div className="flex justify-center items-center h-full">
                  {unit.identifier}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WarehouseRentalManager;
