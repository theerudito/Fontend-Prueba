import axios from "axios";

const url = "http://localhost:5000/clients";

export const getAllClients = async () => {
  const res = await axios.get(url);
  const data = await res.data
  return data
};

export const getByIdClient = async (id) => {
  await axios.get(`${url}/${id}`);
};

export const POSTClient = async (formData) => {
  await axios.post(url, formData);
};

export const PUTClient = async (id) => {
  const res = await axios.put(`${url}/${id}`);
  const data = await res.data
  console.log(res)
  console.log(data)
  return data
};

export const DELETEClient = async (id) => {
  await axios.delete(`${url}/${id}`);
};
