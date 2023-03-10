export function Greeting() {
  const user = {
    firstName: "Said",
    lastName: "Eslander",
  };
  const casado = true;
  function suma(x, y) {
    return x + y;
  }
  return (
    <>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
      <h3>{casado.toString()}</h3>
      <h3>{suma(10, 30)}</h3>
    </>
  );
}

export function NavBar() {
  return <h1>Soy una barra de navegacion</h1>;
}

export function ComponenteUno() {
  return <h1>Soy el componente 1</h1>;
}

export function ComponenteDos() {
  return <h1>Soy el componente 2</h1>;
}

export function ComponenteTres() {
  return <h1>Soy el componente 3</h1>;
}
export function UserCard({ name, amount, married, address, points,greet }) {
  console.log(name,amount,married,address, greet)
  return (
    <>
      <h1>Hola {name}</h1>
      <h2>
        Tu vives en {address.city}, con direccion en {address.street}
      </h2>
      <p>Estado civil: {married ? "Casado" : "Soltero"}</p>
      <p>Usted gana: {amount} soles al mes</p>
      <p>Sus mejores puntajes en sus promedios es de: </p>
      <p>Puntaje #1: {points[0]}</p>
      <p>Puntaje #2: {points[1]}</p>
      <p>Puntaje #3: {points[2]}</p>
    </>
  );
}
