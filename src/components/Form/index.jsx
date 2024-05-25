import { useEffect, useState } from "react";
import "./style.css";
import dayjs from "dayjs";

export const Form = ({ price, room }) => {
  const [sendingData, setSendingData] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [people, setPeople] = useState(0);
  const [catering, setCatering] = useState(0);
  const [pet, setPet] = useState(0);
  const [childBed, setChildBet] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let daysAmount;
  if (dateFrom !== "" && dateTo !== "") {
    daysAmount = dayjs(dateTo).diff(dayjs(dateFrom), "day");
  }

  const final =
    daysAmount * price * people +
    catering * people * daysAmount +
    pet +
    childBed;

  const order = {
    room: room,
    dateFrom: dateFrom,
    dateTo: dateTo,
    people: people,
    nights: daysAmount,
    pet: pet === 0 ? false : true,
    childBed: childBed === 0 ? false : true,
    catering: catering,
    finalPrice: final,
    email: email,
    phone: phone,
    status: "new",
  };

  const postData = async () => {
    fetch("http://localhost:4000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSendingData(true);
    postData();
    console.log("Odesílám data");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="form-from" className="field-label">
          Od:
        </label>
        <input
          id="form-from"
          className="field-input"
          type="date"
          onChange={(event) => {
            setDateFrom(event.target.value);
          }}
        />

        <label htmlFor="form-to" className="field-label">
          Do:
        </label>
        <input
          id="form-to"
          className="field-input"
          type="date"
          onChange={(event) => {
            setDateTo(event.target.value);
          }}
        />

        <label htmlFor="form-people" className="field-label">
          Počet osob:
        </label>
        <input
          id="form-people"
          className="field-input"
          type="text"
          onChange={(event) => {
            setPeople(event.target.value);
          }}
        />

        <label htmlFor="form-catering" className="field-label">
          Select:
        </label>
        <select
          id="form-catering"
          className="field-input"
          onChange={(event) => {
            setCatering(event.target.value);
          }}
        >
          <option value={0}>Žádné</option>
          <option value={250}>Snídaně</option>
          <option value={700}>Polopenze</option>
          <option value={1000}>Plná penze</option>
        </select>

        <label htmlFor="form-pet" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="form-pet"
          className="field-input"
          type="checkbox"
          value={price / 4}
          onChange={(event) => {
            setPet(Number(event.target.value));
          }}
        />

        <label htmlFor="form-childBed" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="form-ChildBed"
          className="field-input"
          type="checkbox"
          value={price / 2}
          onChange={(event) => {
            setChildBet(Number(event.target.value));
          }}
        />

        <label htmlFor="form-barrierFree" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="form-barrierFree" className="field-input" type="checkbox" />

        <label htmlFor="form-email" className="field-label">
          E-mail:
        </label>
        <input
          id="form-email"
          className="field-input"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="form-phone" className="field-label">
          Telefon:
        </label>
        <input
          id="form-phone"
          className="field-input"
          type="tel"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        {final > 0 && <p>Celková cena za pobyt: {final} Kč</p>}
      </div>
      <button className="wide">Submit</button>
      {sendingData && <p>Formulář odeslán</p>}
    </form>
  );
};
