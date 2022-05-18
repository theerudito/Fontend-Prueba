import axios from "axios";

const url = "http://localhost:5000/clients";

export const getallClients = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const getByIdClient = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  const data = res.data
  console.log(res)
  console.log(data)
  return data
};

export const addClient = async (formData) => {
  return await axios.post(url, formData);
};

export const upDateClient = async (id) => {
  const res = await axios.put(`${url}/${id}`);
  console.log(res)
  return res
};

export const deleteClient = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
