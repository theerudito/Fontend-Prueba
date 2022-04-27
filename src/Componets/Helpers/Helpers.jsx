import axios from "axios";

const url = "http://localhost:5000/clients";

export const getallClients = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addClient = async (formData) => {
  return await axios.post(url, formData);
};

