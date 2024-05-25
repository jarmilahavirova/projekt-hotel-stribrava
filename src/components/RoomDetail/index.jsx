import { Form } from "../Form";
import "./style.css";

export const RoomDetail = ({ room }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {room.name}, {room.price} Kč na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000/assets/rooms/${room.image}`} />
            <p>{room.description}</p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
