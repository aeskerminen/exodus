import { useState } from "react";

const BoxRentalManager = () => {
  const [totalBoxes, setTotalBoxes] = useState(0);
  const [rentedBoxes, setRentedBoxes] = useState(0);

  const generateExampleAssignment = () => {
    return {
      name: "Artturi Kerminen",
      dateOfRental: new Date().toJSON(),
      dateOfReturn: new Date().toJSON(),
      numberOfBoxes: 4,
      id: crypto.randomUUID(),
    };
  };

  const [rentalAssignments, setRentalAssignments] = useState([
    ...Array.from(Array(10).keys()).map((e) => generateExampleAssignment()),
  ]);

  const deleteAssignment = (id) => {
    setRentalAssignments(rentalAssignments.filter((a) => a.id !== id));
  };

  return (
    <div>
      <div className="m-auto p-4 border-2 border-black rounded w-fit">
        <p>Total boxes: {totalBoxes}</p>
        <p>Rented boxes: {rentedBoxes}</p>
      </div>
      <div className="m-auto p-2 flex flex-col gap-2">
        <button
          style={{ backgroundColor: "#343434" }}
          className="p-2 shadow rounded-lg w-fit"
        >
          Add rental
        </button>
        <div className="grid grid-cols-4 gap-2">
          {rentalAssignments.map((e, i) => {
            return (
              <div
                key={i}
                className="p-4 border-t"
                style={{ backgroundColor: "#343434" }}
              >
                <button
                  className="p-2 mb-2 rounded-full bg-red-500"
                  onClick={() => deleteAssignment(e.id)}
                ></button>
                <div className="flex flex-col gap-2">
                  <p>Name: {e.name}</p>
                  <p>Date of Rental: {e.dateOfRental}</p>
                  <p>Return date: {e.dateOfReturn}</p>
                  <p>Number of boxes: {e.numberOfBoxes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxRentalManager;
