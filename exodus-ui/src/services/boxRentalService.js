import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const addRentalAssignment = (assignment) => {
  axios.post(`${BASE_URL}/data/rentalAssignment`, assignment);
};

export default { addRentalAssignment };
