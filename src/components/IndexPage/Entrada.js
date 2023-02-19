import React, { useEffect, useState } from "react";
import { letras, numeros } from "../../lib/letrasYNumeros";
import "../../styles/Entrada.css";
import logo from "../../public/images/Logo portafolio CV.jpg";

export default function Entrada() {
  const [x, setX] = useState("A");
  const [t, setT] = useState("A");
  const [e, setE] = useState("A");
  const [v, setV] = useState("A");
  const [e2, setE2] = useState("A");
  const [n, setN] = useState("A");
  const [s, setS] = useState("A");
  const [dos, setDos] = useState("0");
  const [uno, setUno] = useState("0");
  const [cero, setCero] = useState(0);

  useEffect(() => {
    const cambioLetrasRitmo1 = setInterval(() => {
      if (x !== "X") {
        setX(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (t !== "T") {
        setT(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (e !== "E") {
        setE(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (v !== "V") {
        setV(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (e2 !== "E") {
        setE2(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (n !== "N") {
        setN(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (s !== "S") {
        setS(letras[Math.floor(Math.random() * 25 + 1)]);
      }
      if (dos !== "2") {
        setDos(numeros[Math.floor(Math.random() * 9 + 1)]);
      }
      if (uno !== "1") {
        setUno(numeros[Math.floor(Math.random() * 9 + 1)]);
      }
      if (cero !== "0") {
        setCero(numeros[Math.floor(Math.random() * 9 + 1)]);
      }
    }, 200);
    return () => {
      clearInterval(cambioLetrasRitmo1);
    };
  });

  setTimeout(() => {
    setX("X");
    setT("T");
    setE("E");
    setV("V");
    setE2("E");
    setN("N");
    setS("S");
    setDos("2");
    setUno("1");
    setCero("0");
  }, 2500);

  return (
    <div className="entrada__div--container">
      <div className="entrada__div--caja-logo-marca">
        <h2 className="entrada__h2--xtevens210">
          {x}
          {t}
          {e}
          {v}
          {e2}
          {n}
          {s}
          {dos}
          {uno}
          {cero}
        </h2>
        <img className="entrada__img--imagen" src={logo} alt="logo.jpg" />
      </div>
    </div>
  );
}
