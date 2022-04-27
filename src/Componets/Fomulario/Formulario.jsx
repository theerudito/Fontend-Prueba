import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonSave } from "../Modal/Styles";
import axios from "axios";
import { useForm } from "react-hook-form";
import { addClient, editClient, getallClients } from "../Helpers/Helpers";


const url = "http://localhost:5000/clients";

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

  const onValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const SaveData = async (e) => {
    e.preventDefault();
    await addClient(formData);
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

        <ButtonSave type="submit">Save</ButtonSave>
      </form>
    </>
  );
};

//====================================================================

export const FormularioEditarCliente = () => {
  const [user, setUser] = useState(inicialValues);
  const { firstName, lastName, direction, phone, email } = user;
  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getallClients(id);
    setUser(res);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };

  const EditData = async (e) => {
    e.preventDefault();
    await editClient(id,user);
  };

  return (
    <>
      <h4>Edit Client</h4>
      <form onSubmit={EditData}>
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
          className="form-control mb-2"
          placeholder="Phone Office"
          type="number"
          name="phoneOffice"
          value={phone}
          onChange={(e) => onValueChange(e)}
        />

        <input
          className="form-control mb-2"
          placeholder="Phone Home"
          type="number"
          name="phoneHome"
          value={phone}
          onChange={(e) => onValueChange(e)}
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

        <ButtonSave type="submit">Save</ButtonSave>
      </form>
    </>
  );
};

//=============================================================================

export const FormularioCrear = () => {
  const [firtsName, setFirstName] = useState(inicialValues);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { firtsName: "Jorge" } });

  const onsubmit = async (data) => {
    console.log(data);
    await axios.post(url, { data });
  };

  return (
    <div>
      <h4>Create Client</h4>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <input
            className="form-control mb-2"
            placeholder="FirstName"
            type="text"
            {...register("firstName", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.firstName?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar un nombre</p>
          )}

          {errors.nombre?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo nombre debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="LastName"
            type="text"
            {...register("lastName", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.lastName?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar un apellido</p>
          )}

          {errors.lastName?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo apellido debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="Direction"
            type="text"
            {...register("direction", {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.direction?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar una direccion</p>
          )}

          {errors.direction?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo direccion debe tener maximo 30 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="Phone"
            type="number"
            {...register("phone", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.phone?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar un telefono</p>
          )}

          {errors.phone?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo telefono debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            placeholder="Email"
            className="form-control"
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />

          {errors.email?.type === "pattern" && (
            <p style={{ color: "orange" }}>
              El Formato del Email es incorrecto
            </p>
          )}
        </div>

        <br />
        <ButtonSave type="submit">Save</ButtonSave>
      </form>
    </div>
  );
};

export const FormularioApp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const onsubmit = (data) => {
    console.log(data);
  };

  const incluirTelefono = watch("incluirTelefono");

  return (
    <div>
      <h4>Edit Client</h4>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <input
            className="form-control mb-2"
            placeholder="FirstName"
            type="text"
            {...register("firstName", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.firstName?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar un nombre</p>
          )}

          {errors.nombre?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo nombre debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="LastName"
            type="text"
            {...register("lastName", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.lastName?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar un apellido</p>
          )}

          {errors.lastName?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo apellido debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="Direction"
            type="text"
            {...register("direction", {
              required: true,
              maxLength: 30,
            })}
          />
          {errors.direction?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar una direccion</p>
          )}

          {errors.direction?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo direccion debe tener maximo 30 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="Phone"
            type="number"
            {...register("phone", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.phone?.type === "required" && (
            <p style={{ color: "red" }}>Ingresar un telefono</p>
          )}

          {errors.phone?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo telefono debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="Phone Home"
            type="number"
            {...register("PhoneHome", {
              maxLength: 10,
            })}
          />
          {errors.PhoneHome?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo telefono debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            className="form-control mb-2"
            placeholder="Phone Office"
            type="number"
            {...register("PhoneOffice", {
              maxLength: 10,
            })}
          />
          {errors.PhoneOffice?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              campo telefono debe tener maximo 10 caracteres
            </p>
          )}
        </div>

        <div>
          <input
            placeholder="Email"
            className="form-control"
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />

          {errors.email?.type === "pattern" && (
            <p style={{ color: "orange" }}>
              El Formato del Email es incorrecto
            </p>
          )}
        </div>

        <br />
        <ButtonSave type="submit">Save</ButtonSave>
      </form>
    </div>
  );
};
