import { useState } from "react";

const BoxRentalManager = () => {
  const [totalBoxes, setTotalBoxes] = useState(0);
  const [rentedBoxes, setRentedBoxes] = useState(0);

  const [showCreationModal, setShowCreationModal] = useState(false);

  const [rentalAssignments, setRentalAssignments] = useState([]);

  const generateExampleAssignment = (
    name,
    dateOfRental,
    dateOfReturn,
    numberOfBoxes
  ) => {
    return {
      name,
      dateOfRental,
      dateOfReturn,
      numberOfBoxes,
      id: rentalAssignments.length
    };
  };

  const deleteAssignment = (id) => {
    setRentalAssignments(rentalAssignments.filter((a) => a.id !== id));
  };

  const createAssignment = (e) => {
    e.preventDefault();

    const newAssignment = generateExampleAssignment(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value
    );

    setRentalAssignments([...rentalAssignments, newAssignment]);
  };

  const Modal = () => {
    return (
      <div
        className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
        style={{ backgroundColor: "#000000A0", backdropFilter: "blur(5px)" }}
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
              placeholder="Amount of boxes..."
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
    <div className="w-full h-full p-4">
      {showCreationModal && <Modal></Modal>}
      <div className="m-auto p-4 border-2 border-black rounded w-fit mb-4">
        <p>Total boxes: {totalBoxes}</p>
        <p>Rented boxes: {rentedBoxes}</p>
      </div>
      <div className="m-auto p-4 flex flex-col gap-2 w-full border-2 border-black rounded">
        <button
          style={{ backgroundColor: "#343434" }}
          className="p-2 shadow rounded-lg w-fit border-2"
          onClick={() => setShowCreationModal(true)}
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
