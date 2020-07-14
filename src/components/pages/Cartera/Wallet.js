import React from "react";
import Header from "../../layout/header/Header";
import Cartera from "./Cartera";
import Footer from "../../layout/footer/Footer";

function Wallet() {
  return (
    <>
      <div>{alert("The code is correct, Welcome Dany!")}</div>
      <Header />
      <Cartera />
      <Footer />
    </>
  );
}

export default Wallet;
