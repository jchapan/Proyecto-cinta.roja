import React, { useState, useEffect } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Cartera from "../Cartera/Cartera";
import validation from "./Validation";
import { useHistory } from "react-router-dom";
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import axios from "axios";

function Login() {
  const history = useHistory();

  function handleClick() {
    history.push("/validation");
  }

  // function mandaSms(mensaje){

  //     axios.get(URLSMS)
  //     .then((response)=>{
  //         console.log(response.data)
  //         patch2FA(mensaje)
  //     }).catch((err)=>{
  //         console.log(err)
  //     })

  // }

  function patch2FA(mensaje) {
    const URL = `https://apiinfowallet.firebaseio.com/0.json`;
    axios
      .patch(URL, {
        "2FA": mensaje,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const URL = `https://apiinfowallet.firebaseio.com/.json`;
  const [valida, setValida] = useState([]);
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);

  const clear = () => {
    setName("");
    setPass("");
  };

  const validaUser = (event) => {
    event.preventDefault();
    axios
      .get(URL)
      .then((response) => {
        let allUsers = response.data;
        setValida(allUsers);
        console.log(allUsers);
      })
      .catch((err) => {
        console.log(err);
      });
    valida.map((user) => {
      if (user.Nombre != name && user.Pass != pass) {
        alert("Usuario no registrado");
      } else {
        alert(`Bienvenido ${name}`);
        // mandaSms(Math.floor(Math.random() * 999999) + 1)
        handleClick();
      }
    });
  };

  return (
    <>
      <Header />
      <form onSubmit={validaUser}>
        <div className="container col-5">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={pass}
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Login;

// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   const history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }
