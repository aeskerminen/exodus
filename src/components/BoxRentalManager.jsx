import { useState } from "react";

const BoxRentalManager = () => {
  const [totalBoxes, setTotalBoxes] = useState(0);
  const [rentedBoxes, setRentedBoxes] = useState(0);

  return (
    <div>
      <div style={{}}>
        <p>Total boxes: {totalBoxes}</p>
        <p>Rented boxes: {rentedBoxes}</p>
      </div>
    </div>
  );
};

export default BoxRentalManager;
