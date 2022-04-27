import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonClose, ButtonSave } from "./Modal/Styles";

const url = "http://localhost:5000/clients";
//===========================================

export const Edi = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [direction, setDirection] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHome, setPhoneHome] = useState("");
  const [phoneOffice, setPhoneOffice] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const EditClient = async (e) => {
    e.preventDefault();
    await axios.put(`${url}/${id}`, {
      firstName,
      lastName,
      direction,
      phone,
      email,
      phoneHome,
      phoneOffice,
    });

    navigate("/");
  };

  const HandleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    updateById();
  }, []);

  const updateById = async () => {
    const res = await axios.get(`${url}/${id}`);
    console.log(res);
    setFirstName(res.data.firstName);
    setLastName(res.data.lastName);
    setPhone(res.data.phone);
    setEmail(res.data.email);
    setDirection(res.data.direction);
    setPhoneHome(res.data.phoneHome);
    setPhoneOffice(res.data.phoneOffice);
  };

  return (
    <>
      <div
        style={{
          margin: "40px auto",
          display: "grid",
          width: "320px",
          height: "400px",
          alignContent: "center",
          justifyContent: "center",
          border: "solid 1px ",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h4>Edit Client</h4>
        <ButtonClose
          onClick={HandleNavigate}
          style={{ marginLeft: "auto", marginTop: "-34px" }}
        >
          X
        </ButtonClose>
        <form
          onSubmit={EditClient}
          style={{
            width: "300px",
            height: "360px",
            margin: "auto",
            borderRadius: "10px",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <input
            className="form-control mb-2"
            placeholder="FirstName"
            type="text"
            style={{ width: "280px" }}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            placeholder="LastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            placeholder="Direction"
            type="text"
            name="direction"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Phone Office"
            type="number"
            name="phoneOffice"
            value={phoneOffice}
            onChange={(e) => setPhoneOffice(e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Phone Home"
            type="number"
            name="phoneHome"
            value={phoneHome}
            onChange={(e) => setPhoneHome(e.target.value)}
          />

          <input
            placeholder="Email"
            className="form-control"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <ButtonSave type="submit">Save</ButtonSave>
        </form>
      </div>
    </>
  );
};
