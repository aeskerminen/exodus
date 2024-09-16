import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const addRentalAssignment = async (assignment) => {
  const res = await axios.post(`${BASE_URL}/data/rentalAssignment`, assignment);
  return res.data;
};

const removeRentalAssignment = async (id) => {
  const res = await axios.delete(`${BASE_URL}/data/rentalAssignment`, id);
  return res.data;
};

const getRentalAssignments = async () => {
  const res = await axios.get(`${BASE_URL}/data/rentalAssignments`);
  return res.data;
};

export default {
  addRentalAssignment,
  removeRentalAssignment,
  getRentalAssignments,
};
