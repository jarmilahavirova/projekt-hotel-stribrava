import "./style.css";

export const Contact = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <ul className="address">
            <li>Hotel Stříbrava</li>
            <li>Ke Kamenné lávce 12</li>
            <li>317 24 Libnice nad Stříbravou</li>
            <br />
            <li>
              <a href="mailto:recepce@hotelstribrava.cz">
                recepce@hotelstribrava.cz
              </a>
            </li>
          </ul>
        </div>
        <img src="mapa.png" />
      </div>
    </section>
  );
};
