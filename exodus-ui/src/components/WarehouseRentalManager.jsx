import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addwarehouseRental,
  deleteWarehouseRental,
  fetchWarehouseRentals,
} from "../reducer/warehouseRentalSlice";

const generateWarehouseUnit = (size, identifier) => {
  return { size, identifier };
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
  generateWarehouseUnit(10, "Unit 1"),
  generateWarehouseUnit(10, "Unit 2"),
  generateWarehouseUnit(15, "Unit 3"),
  generateWarehouseUnit(15, "Unit 4"),
  generateWarehouseUnit(20, "Unit 5"),
  generateWarehouseUnit(25, "Unit 6"),
  generateWarehouseUnit(30, "Unit 7"),
];

const WarehouseRentalManager = () => {
  const [totalUnits, setTotalUnits] = useState(0);
  const [rentedUnits, setRentedUnits] = useState(0);

  const [showCreationModal, setShowCreationModal] = useState(false);

  const dispatch = useDispatch();
  const warehouseRentals = useSelector((state) => state.warehouseRentals);

  useEffect(() => {
    console.log(warehouseRentals);
    dispatch(fetchWarehouseRentals());
  }, []);

  const createRental = (e) => {
    e.preventDefault();

    const newRental = generateWarehouseRental(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );

    dispatch(addwarehouseRental(newRental));
  };

  const Modal = () => {
    return (
      <div
        className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
        style={{
          backgroundColor: "#000000A0",
          backdropFilter: "blur(5px)",
          zIndex: 9999,
        }}
      >
        <div className="w-1/3 bg-black pb-3 pl-3 pr-3 pt-1">
          <button
            className="p-2 mb-2 rounded-full bg-red-500"
            onClick={() => setShowCreationModal(false)}
          ></button>{" "}
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => createRental(e)}
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

  if (warehouseRentals === null) return <div>Loading...</div>;

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
          {warehouseUnits.map((unit,i) => (
            <WarehouseUnitContainer
              key={i}
              unit={unit}
              warehouseRentals={warehouseRentals}
            ></WarehouseUnitContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

const WarehouseUnitContainer = ({ unit, warehouseRentals }) => {
  const normalizedSize = Math.ceil((unit.size - 1) / (12 - 1));
  const rented =
    warehouseRentals.filter((elem) => `Unit ${elem.unit}` === unit.identifier)
      .length > 0;
    const rentalData = warehouseRentals.filter((elem) => `Unit ${elem.unit}` === unit.identifier)[0]
  return (
    <div
      style={{ backgroundColor: "#343434" }}
      className={`relative col-span-${normalizedSize} p-2 flex flex-col justify-center items-center`}
    >
      <button
        style={{ backgroundColor: rented ? "red" : "green" }}
        className="absolute top-0 left-0 ml-2 mt-2 p-2 rounded-full"
      ></button>
      <div className="flex flex-col justify-center items-center h-full">
        {unit.identifier}
        <div className="p-2">
          {rentalData !== undefined && Object.entries(rentalData).map((e,i)  => <p key={i}>{e[0].toUpperCase()}: {e[1]}</p>)}
        </div>
      </div>
    </div>
  );
};

export default WarehouseRentalManager;
