import { useState } from "react";
import "./style.css";

export const Form = () => {
  const [sendingData, setSendingData] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSendingData(true);
        console.log("Odesílám data");
      }}
    >
      <div className="form-fields">
        <label htmlFor="form-from" className="field-label">
          Od:
        </label>
        <input id="form-from" className="field-input" type="date" />

        <label htmlFor="form-to" className="field-label">
          Do:
        </label>
        <input id="form-to" className="field-input" type="date" />

        <label htmlFor="form-people" className="field-label">
          Počet osob:
        </label>
        <input id="form-people" className="field-input" type="text" />

        <label htmlFor="form-catering" className="field-label">
          Select:
        </label>
        <select id="form-catering" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="form-pet" className="field-label">
          Domácí mazlíček:
        </label>
        <input id="form-pet" className="field-input" type="checkbox" />

        <label htmlFor="form-childBed" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input id="form-ChildBed" className="field-input" type="checkbox" />

        <label htmlFor="form-barrierFree" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="form-barrierFree" className="field-input" type="checkbox" />

        <label htmlFor="form-email" className="field-label">
          E-mail:
        </label>
        <input id="form-email" className="field-input" type="email" />

        <label htmlFor="form-phone" className="field-label">
          E-mail:
        </label>
        <input id="form-phone" className="field-input" type="tel" />
      </div>
      <button className="wide">Submit</button>
      {sendingData && <p>Formulář odeslán</p>}
    </form>
  );
};
