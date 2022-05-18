import React, { useEffect, useState } from "react";
import { ButtonSave } from "../Modal/Styles";
import { addClient, getByIdClient } from "../Helpers/Helpers";
import { Alerta, TituloAlert } from "../Styles/Styles";
import { getByIdUser } from "../Crud";

const inicialValues = {
  id: 0,
  firstName: "",
  lastName: "",
  direction: "",
  phone: "",
  email: "",
};

export const FormularioCrearCliente = () => {
  const [formData, setFormData] = useState(inicialValues);
  const { firstName, lastName, direction, phone, email } = formData;
  const [guardado, setGuardado] = useState(false);

  const onValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SaveData = async (e) => {
    setGuardado(true);
    e.preventDefault();
    await addClient(formData);

    setTimeout(() => setGuardado(), 2000);
    setFormData(inicialValues);
  };

  return (
    <>
      <h4>Create Client</h4>
      <form onSubmit={SaveData}>
        <input
          className="form-control mb-2"
          placeholder="FirstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => onValueChange(e)}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="LastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => onValueChange(e)}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Direction"
          type="text"
          name="direction"
          value={direction}
          onChange={(e) => onValueChange(e)}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Phone"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => onValueChange(e)}
          required
        />

        <input
          placeholder="Email"
          className="form-control"
          type="text"
          name="email"
          value={email}
          onChange={(e) => onValueChange(e)}
          required
        />

        <ButtonSave type="submit" style={{ margin: "30px auto" }}>
          Save
        </ButtonSave>
        <Alerta>
          {guardado && <TituloAlert>Contacto Guardado con Exito </TituloAlert>}
        </Alerta>
      </form>
    </>
  );
};

//====================================================================

export const FormEdit = (data) => {
  console.log(data)
  const [formData, setFormData] = useState(inicialValues);
  const { firstName, lastName, direction, phone, email } = formData;
  const [guardado, setGuardado] = useState(false);

  const onValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateClient = async (e, id) => {
   
  };


  const getById = async () => {
    
  };

  //getById();

  return (
    <>
      <h4>Edit Client</h4>
      <form onSubmit={updateClient}>
        <input
          className="form-control mb-2"
          placeholder="FirstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => onValueChange(e)}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="LastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => onValueChange(e)}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Direction"
          type="text"
          name="direction"
          value={direction}
          onChange={(e) => onValueChange(e)}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Phone"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => onValueChange(e)}
          required
        />

        <input
          placeholder="Email"
          className="form-control"
          type="text"
          name="email"
          value={email}
          onChange={(e) => onValueChange(e)}
          required
        />

        <ButtonSave type="submit" style={{ margin: "30px auto" }}>
          Save
        </ButtonSave>
        <Alerta>
          {guardado && <TituloAlert>Contacto Guardado con Exito </TituloAlert>}
        </Alerta>
      </form>
    </>
  );
};

//====================================================================
