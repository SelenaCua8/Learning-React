import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";

//siempre importo React, como en la primera linea

const root = ReactDom.createRoot(document.getElementById("root")); //devuelve una aplicación inicial de React

//componentes en react === funciones
//en las funciones de react podemos retornar html != de js
function Greetings() {
  return <h1>Hello worlds</h1>;
}
function Component() {
  return (
    <div>
      <h1>Este es un componente</h1>
      <p>lorem 123</p>
    </div>
  );
}

//root.render(Greeting())  //render recibe elementos de html
//root.render(Component())
//siempre tiene que haber un elemento que contenga al resto, por eso siempre el DIV primero, es decir, un elemento padre.
root.render(
  <div>
    <Greeting title="Hola Mundo" name="Joe" />
    <Greeting title="Hola Perro" name="Ryan" />
    <Greeting title="Que haces" />
    <Greeting title="Tutto posto" />
    <Greeting title="Va benne" />
    <Component />
    <Greetings />
    <Content />
    <Married />
    <Product />
    <Person />
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "u. fernandez 543", city: "New York" }}
    />
  </div>
);

//React no usamos js sino usamos JSX que es una porcion de html y js

function Content() {
  const name = "Selena";

  return <h1> {name} </h1>;
}

function Married() {
  const married = true; // si coloco false me aparece else
  /* if (married){
        return <h1>Estoy casado</h1>
    } else {
        return <h1>No estoy casado</h1>
    }*/ //asi no se hace en react pero esta bien hecho

  return <h1> {married ? "estoy casado" : "no estoy casado"} </h1>;
}
//para interpretar código va entre llaves

function Person() {
  const user = {
    firstName: "Selena",
    lastName: "Cuadra",
  };
  //return <h1> {JSON.stringify(user)} </h1>
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
    </div>
  );
}
//JSON.stringify() convierte un objeto en string
