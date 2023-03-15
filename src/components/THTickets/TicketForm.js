import React, { useState, useEffect } from "react";
import { useHistory} from "react"
import {fetchIt} from "react"
export const TicketForm = () => {
  const [ticket, updateTicket] = useState({
    section: "",
    numberOfTickets: "",
    date: "",
    opponent: "",
  });

  const [opponents, setOpponents] = useState([]);
  
  const history = useHistory();

  useEffect(() => {
    //Fetches the list of opponents from the API and sets it in the state.
    fetchIt("http://localhost:8000/opponents")
      .then(data => setOpponents(data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const copy = {...ticket};
    copy[name] = value;
    updateTicket(copy);
  };

  const submitTicket = (evt) => {
    evt.preventDefault();

    fetchIt("http://localhost:8000/tickets", {
      method: "POST",
      body: JSON.stringify(ticket),
    }).then(() => history.push("/tickets"));
  };

  return (
    <form className="ticketForm">
      <h2 className="ticketForm__title"> Ticket Donation Form </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            onChange={handleInputChange}
            required
            autoFocus
            type="text"
            id="section"
            name="section"
            className="form-control"
            placeholder="Enter section"
            value={ticket.section}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="numberOfTickets">Number Of Tickets:</label>
          <input
            onChange={handleInputChange}
            required
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            className="form-control"
            placeholder="Enter number of tickets"
            min="1"
            max="10"
            value={ticket.numberOfTickets}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            onChange={handleInputChange}
            required
            type="date"
            id="date"
            name="date"
            className="form-control"
            placeholder="Enter date"
            value={ticket.date}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="opponent">Opponent:</label>
          <select
            onChange={handleInputChange}
            required
            id="opponent"
            name="opponent"
            className="form-control"
            value={ticket.opponent}
          >
            <option value="" disabled>Select an opponent</option>
            {opponents.map(opponent => (
              <option key={opponent.id} value={opponent.opponent}>
                {opponent.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button onClick={submitTicket} className="btn btn-primary">
        Donate Tickets
      </button>
    </form>
  );
};
