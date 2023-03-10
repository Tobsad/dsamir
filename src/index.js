import React from "react";
import ReactDOM from "react-dom/client";
import {
  ComponenteDos,
  ComponenteTres,
  ComponenteUno,
  Greeting,
  NavBar,
  UserCard,
} from "./Greeting";
import Product, { PseudoProduct } from "./Product";
import { Component } from "./Component";
import { Button } from "./Button";
import {TaskCard} from "./TaskCard"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
{/*     <UserCard
      name="Said Eslander"
      amount={1050}
      married={false}
      points={[90, 35.5, 22.2]}
      address={{
        street: "Avenida Alfredo Mendiola 867",
        city: "Lima York",
      }}
      greet={function(){ alert("Hola putos")}}
    />
    <UserCard
      name='Samir Alexander'
      amount={2100}
      married={true}
      points={[40,39.11,20]}
      address={{
        street: "Calle La Igualdad Mz.HH4 Lte.14",
        city: "Los Olivos City",
      }}
    />
    <Button text='Click me'/>
    <Button text='Pay'/>
    <Button text='' name='Said'/> */}
    <TaskCard
      ready={true}
    />

  </>
);
