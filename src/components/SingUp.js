import React, { useState } from "react";
import app from "../firebase";
import { getDatabase, ref, set, push, query, orderByChild, equalTo, get } from "firebase/database";
import Swal from "sweetalert2";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

function SignUp() {
  const [inputNombre, setInputNombre] = useState("");
  const [inputApellido, setInputApellido] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerUserOnDB = async () => {
    const DB = getDatabase(app);

    // Validar que ningún campo esté vacío
    if (!inputNombre || !inputApellido || !inputCorreo || !inputPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos."
      });
      return;
    }

    // Validar el formato del correo electrónico
    if (!validateEmail(inputCorreo)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingrese un correo electrónico válido.",
        customClass: {
          container: 'facebook-swal-container',
          popup: 'facebook-swal-popup',
          title: 'facebook-swal-title',
          htmlContainer: 'facebook-swal-html-container',
          confirmButton: 'facebook-swal-confirm-button',
        }
      });
      
      return;
    }

    const correoExistente = await checkExistingEmail(DB);

    if (correoExistente) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El correo electrónico ya se encuentra registrado.",
        customClass: {
          container: 'facebook-swal-container',
          popup: 'facebook-swal-popup',
          title: 'facebook-swal-title',
          htmlContainer: 'facebook-swal-html-container',
          confirmButton: 'facebook-swal-confirm-button',
        }
      });
      
    } else {
      const jasonData = push(ref(DB, "Usuarios"));

      set(jasonData, {
        nombre: inputNombre,
        apellido: inputApellido,
        correo: inputCorreo,
        password: inputPassword,
      })
        .then(() => {
             clearInputs();
          Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Se han guardado los datos correctamente.",
            customClass: {
              container: 'facebook-swal-container',
              popup: 'facebook-swal-popup',
              title: 'facebook-swal-title',
              htmlContainer: 'facebook-swal-html-container',
              confirmButton: 'facebook-swal-confirm-button',
            }
          });
          
       
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `Ha ocurrido un error: ${error.message}`,
            customClass: {
              container: 'facebook-swal-container',
              popup: 'facebook-swal-popup',
              title: 'facebook-swal-title',
              htmlContainer: 'facebook-swal-html-container',
              confirmButton: 'facebook-swal-confirm-button',
            }
          });
          
        });
    }
  };

  const checkExistingEmail = async (DB) => {
    const usuariosRef = ref(DB, "Usuarios");
    const correoQuery = query(usuariosRef, orderByChild("correo"), equalTo(inputCorreo));
    const snapshot = await get(correoQuery);
    return snapshot.exists();
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearInputs = () => {
    setInputNombre("");
    setInputApellido("");
    setInputCorreo("");
    setInputPassword("");
  };
  return (
    <div className="titulo">
       <h2>Registrarse</h2>
      <div className="etiqueta">
        <label className="facebook-label">Nombre</label>
        <input
          className="facebook-input"
          type="text"
          value={inputNombre}
          onChange={(e) => setInputNombre(e.target.value)}
        />
      </div>

      <div className="etiqueta">
        <label className="facebook-label">Apellido</label>
        <input
          className="facebook-input"
          type="text"
          value={inputApellido}
          onChange={(e) => setInputApellido(e.target.value)}
        />
      </div>

      <div className="etiqueta">
        <label className="facebook-label">Correo electrónico</label>
        <input
          className="facebook-input"
          type="text"
          value={inputCorreo}
          onChange={(e) => setInputCorreo(e.target.value)}
        />
      </div>

      <div className="etiqueta">
        <label className="facebook-label">Contraseña</label>
        <input
          className="facebook-input"
          type={showPassword ? "text" : "password"}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <div className="toggle-password" onClick={togglePasswordVisibility}>
          {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
        </div>

      </div>

      <div className="botones">
        <button className="facebook-button" onClick={registerUserOnDB}>
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default SignUp;
