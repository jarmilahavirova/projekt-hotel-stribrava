import { Room } from "../Room";
import "./style.css";

export const Rooms = ({ rooms }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {rooms !== null &&
            rooms.map((room) => {
              return (
                <Room
                  key={room.id}
                  name={room.name}
                  price={room.price}
                  image={room.image}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
