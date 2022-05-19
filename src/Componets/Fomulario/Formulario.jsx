import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../ContextProvider/UserProvider";
import { POSTClient, PUTClient } from "../Helpers/Helpers";
import { ButtonSave } from "../Modal/Styles";
import { Alerta, TituloAlert } from "../Styles/Styles";

export const FormularioCrearCliente = () => {
  const [guardado, setGuardado] = useState(false);
  const { getAllUser } = useContext(userContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let firstName = "firstName";
  const SaveData = async (data) => {
    let name = data.firstName;
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      phone: data.phone,
      email: data.email,
      pic: `https://avatars.dicebear.com/api/micah/${name}.svg`,
    };
    setGuardado(true);
    await POSTClient(formData);
    reset();
    getAllUser();
    setTimeout(() => setGuardado(), 2000);
  };

  return (
    <>
      <h4>Create Client</h4>
      <form onClick={handleSubmit(SaveData)}>
        <div>
          {errors.firstName && (
            <span
              style={{ color: "red", fontSize: "12px", marginBottom: "20px" }}
            >
              {errors.firstName.message}
            </span>
          )}
        </div>

        <input
          className="form-control mb-2"
          placeholder="FirstName"
          type="text"
          name={firstName}
          {...register(firstName, {
            required: {
              value: true,
              message: "Ingresar un nombre",
              maxLenght: 20,
            },
          })}
        />

        <div>
          {errors.lastName && (
            <span
              style={{ color: "red", fontSize: "12px", marginBottom: "20px" }}
            >
              {errors.lastName.message}
            </span>
          )}
        </div>

        <input
          className="form-control mb-2"
          placeholder="LastName"
          type="text"
          name="lastName"
          {...register("lastName", {
            required: {
              value: true,
              message: "Ingresar un apellido",
              maxLenght: 20,
            },
          })}
        />

        <div>
          {errors.country && (
            <span
              style={{ color: "red", fontSize: "12px", marginBottom: "20px" }}
            >
              {errors.country.message}
            </span>
          )}
        </div>

        <input
          className="form-control mb-2"
          placeholder="Country"
          type="text"
          name="country"
          {...register("country", {
            required: {
              value: true,
              message: "Ingresar un pais",
              maxLenght: 20,
            },
          })}
        />

        <div>
          {errors.phone && (
            <span
              style={{ color: "red", fontSize: "12px", marginBottom: "20px" }}
            >
              {errors.phone.message}
            </span>
          )}
        </div>

        <input
          className="form-control mb-2"
          placeholder="Phone"
          type="number"
          name="phone"
          {...register("phone", {
            required: {
              value: true,
              message: "telefono requerido",
            },
            minLength: {
              value: 10,
              message: "Debe tener como minimo 10 caracteres",
            },
          })}
        />

        <div>
          {errors.email && (
            <span
              style={{ color: "red", fontSize: "12px", marginBottom: "20px" }}
            >
              {errors.email.message}
            </span>
          )}
        </div>

        <input
          placeholder="Email"
          className="form-control"
          type="text"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "debes ingresar un email",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "el formato del email es incorrecto",
            },
          })}
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

export const FormEdit = (userId, userData) => {
  console.log(userId.id);
  console.log(userData);

  const [guardado, setGuardado] = useState(false);
  const { getAllUser, updateUser } = useContext(userContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const UpdateData = async (data) => {
    setGuardado(true);
    await updateUser(data);
    reset();
    getAllUser();
    setTimeout(() => setGuardado(), 2000);
  };

  return (
    <>
      <h4>Edit Client</h4>
      <form onClick={handleSubmit(UpdateData)}>
        <input
          className="form-control mb-2"
          placeholder="FirstName"
          type="text"
          name="firstName"
          {...register("firstName", {
            required: {
              value: true,
              message: "Ingresar un nombre",
              maxLenght: 20,
            },
          })}
        />
        <input
          className="form-control mb-2"
          placeholder="LastName"
          type="text"
          name="lastName"
          {...register("lastName", {
            required: {
              value: true,
              message: "Ingresar un apellido",
              maxLenght: 20,
            },
          })}
        />
        <input
          className="form-control mb-2"
          placeholder="Country"
          type="text"
          name="country"
          {...register("country", {
            required: {
              value: true,
              message: "Ingresar un pais",
              maxLenght: 20,
            },
          })}
        />

        <input
          className="form-control mb-2"
          placeholder="Phone"
          type="number"
          name="phone"
          {...register("phone", {
            required: {
              value: true,
              message: "telefono requerido",
            },
            minLength: {
              value: 10,
              message: "Debe tener como minimo 10 caracteres",
            },
          })}
        />

        <input
          placeholder="Email"
          className="form-control"
          type="text"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "debes ingresar un numero",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "el formato del email es incorrecto",
            },
          })}
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
