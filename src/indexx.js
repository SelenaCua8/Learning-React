import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
//import { Greeting, UserCard } from "./Greeting";
//import Product from "./Product";
//import {Button} from "./Button";
//import { TaskCard } from "./Task";
//import { Post } from "./Posts";

//siempre importo React, como en la primera linea

const root = ReactDom.createRoot(document.getElementById("root")); //devuelve una aplicación inicial de React

//Arreglo de objetos de js común
/* const users = [
  {
    id: 1,
    name: "Selena Cuadra",
    image: "https://robohash.org/user2", // Fixed the image URL
  },
  {
    id: 2,
    name: "Nadina Montani",
    image: "https://robohash.org/user3", // Fixed the image URL
  },
]; */
//viene de un backend generalemnte y hay que recorrerlo
//names.map(funciont (){return 'Hola}) ->forma de recorrer un arreglo con map, tenes acceso a ca uno de los items
//const holaNames = names.map((name) => 'hola' + name)
// return 'Hola ryan' , hola joe, hola marcos
//return names ryan, joe, marcos
/* root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name} </h1>
          <img src={user.image} alt="" /> {/* Added alt prop */
/*     </div>
      );
    
  </>
);
  */

//Counter App
/* function Counter(){
 
  const [counter, setCounter] = useState(0)
  //lo de arriba es lo mismo que counter = 0 pero en React
  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={() => { setCounter( counter + 1)  }}>Sumar</button>
      <button onClick={() => { setCounter( counter - 1)  }}>Restar</button>
      <button onClick={() => {setCounter(1000)}}>Reiniciar</button>
    </div>
  )
 }

root.render(
  <>
  <Counter/>
  </>
)
 */

//(e.target.value) muestra por consola lo que va poniendo
function Counter() {
  const [mensaje, setMensaje] = useState("");

  useEffect(function () {
    console.log("render");
  }, []);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es: ${mensaje}`);
        }}
      >
        {" "}
        {/* Using the mensaje state */}
        Save
      </button>
      
    </div>
  );
}
root.render(
  <>
    <Counter />
  </>
);

//componentes en react === funciones
//en las funciones de react podemos retornar html != de js
/* function Greetings() {
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
 */
//root.render(Greeting())  //render recibe elementos de html
//root.render(Component())
//siempre tiene que haber un elemento que contenga al resto, por eso siempre el DIV primero, es decir, un elemento padre.
/* root.render(
  <> */
/* <Greeting title="Hola Mundo" name="Joe" />
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
      greet={function () {
        alert('Hello');
      }}
    />
    <UserCard
    name="Selena Cuadra"
    amount={50000}
    married={false}
    points={[99, 33.3, 22.2]}
    address={{
        street: "roca 2155",
        city: "Zarate"
    }}
    
    
        /> */
/* <Button text="Hola mundo"/>
        <Button text="pay"/>
        <Button text=" run" name="Selena"/> */
/* <input id="hola" onChange={(e) => {
        console.log(e.target.value);
      /* <input id="hola" onDoubleClick={() => console.log('double click')}/> */
/*    <form onSubmit={(e) => {e.preventDefault() 
        console.log('enviado')}}>
        <h1>Registo de usuario</h1>
        <button>Send</button>
      </form>
      <Post/>

  </>
      
  
);
 */
//React no usamos js sino usamos JSX que es una porcion de html y js

/* function Content() {
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

/*  return <h1> {married ? "estoy casado" : "no estoy casado"} </h1>;

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
  //JSON.stringify() convierte un objeto en string
} */
