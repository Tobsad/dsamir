import "./TaskCard.css";
export function TaskCard({ready}) {
  return (
    <div className={ready?'card-green':'card-red'}>
      <h1>Mi primera tarea</h1>
      <span
      >{ready ? "Tara realizada" : "Tarea pendiente"}</span>
    </div>
  );
}
