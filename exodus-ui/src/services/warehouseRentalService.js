import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const addWarehouseRental = async (assignment) => {
  const res = await axios.post(
    `${BASE_URL}/data/warehouseRentals`,
    assignment
  );
  return res.data;
};

const removeWarehouseRental = async (id) => {
  const res = await axios.delete(`${BASE_URL}/data/warehouseRentals/${id}`);
  return res.data;
};

const getWarehouseRentals = async () => {
  const res = await axios.get(`${BASE_URL}/data/warehouseRentals`);
  return res.data;
};

export default {
  addWarehouseRental,
  removeWarehouseRental,
  getWarehouseRentals,
};
