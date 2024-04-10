import React, { useState } from "react";
import app from "../firebase";
import { getDatabase, ref, get, query, orderByChild, equalTo } from "firebase/database";
import Swal from 'sweetalert2';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri"; // Importa los íconos de ojo
import '../App.css';


function Login() {
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña

  const loginUser = async () => {
    const DB = getDatabase(app);
    const usuariosRef = ref(DB, "Usuarios");
    const correoQuery = query(usuariosRef, orderByChild("correo"), equalTo(inputCorreo));

    get(correoQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const userKey = Object.keys(userData)[0];
          if (userData[userKey].password === inputPassword) {
            Swal.fire({
              icon: 'success',
              title: 'Inicio de sesión exitoso',
              customClass: {
                container: 'facebook-swal-container',
                popup: 'facebook-swal-popup',
                title: 'facebook-swal-title',
                htmlContainer: 'facebook-swal-html-container',
                confirmButton: 'facebook-swal-confirm-button',
              }
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Contraseña incorrecta',
              customClass: {
                container: 'facebook-swal-container',
                popup: 'facebook-swal-popup',
                title: 'facebook-swal-title',
                htmlContainer: 'facebook-swal-html-container',
                confirmButton: 'facebook-swal-confirm-button',
              }
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'El correo ingresado no está registrado',
            customClass: {
              container: 'facebook-swal-container',
              popup: 'facebook-swal-popup',
              title: 'facebook-swal-title',
              htmlContainer: 'facebook-swal-html-container',
              confirmButton: 'facebook-swal-confirm-button',
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInputs = () => {
    if (!inputCorreo.trim() || !inputPassword.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        customClass: {
          container: 'facebook-swal-container',
          popup: 'facebook-swal-popup',
          title: 'facebook-swal-title',
          htmlContainer: 'facebook-swal-html-container',
          confirmButton: 'facebook-swal-confirm-button',
        }
      });
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      loginUser();
    }
  };

  return (
    
    <div className="titulo">
    <h2>Iniciar Sesión</h2>
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
      <div className="password-input-container">
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
    </div>
    <div className="botones">
      <button className="facebook-button" onClick={handleLogin}>
        Sign In
      </button>
    </div>
  </div>
  
  );
}

export default Login;
