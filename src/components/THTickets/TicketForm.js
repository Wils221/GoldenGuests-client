import React, { useState, useEffect,  } from "react";
import "../THTickets/Tickets.css"
import { useNavigate } from "react-router-dom";
import { getOpponents, createTickets } from "../../managers/THManager";
import "./Tickets.css" 


export const TicketForm = () => {
  const [ticket, updateTicket] = useState({
    section: "",
    number_of_tickets: "",
    date: "",
    opponent: ""
  });

  const [opponents, setOpponents] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    getOpponents().then(data => setOpponents(data))
}, [])

const changeTicketState = (event) => {
  const copy = { ...ticket }
  copy[event.target.name] = event.target.value
  updateTicket(copy)
}

  const submitTicket = (evt) => {
    evt.preventDefault();

    const newticket = {
      section: parseInt(ticket.section),
      number_of_tickets: parseInt(ticket.number_of_tickets),
      date: ticket.date,
      opponent: parseInt(ticket.opponent)
  }
  createTickets(newticket)
  .then(() => navigate("/ticketholdertickets"))
  }

  return (
    <div className="ticketbox">
    <form className="ticketForm">
      <h2 className="ticketForm__title"> Ticket Donation Form </h2>
      <fieldset>
        <div className="Ticketform-group">
          <label htmlFor="section">Section:</label>
          <input
            onChange={changeTicketState}
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
        <div className="Ticketform-group">
          <label htmlFor="number_of_tickets">Number Of Tickets:</label>
          <input
            onChange={changeTicketState}
            required
            type="number"
            id="number_of_tickets"
            name="number_of_tickets"
            className="form-control"
            placeholder="Enter number of tickets"
            min="1"
            max="10"
            value={ticket.number_of_tickets}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="Ticketform-group">
          <label htmlFor="date">Date:</label>
          <input
            onChange={changeTicketState}
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
        <div className="Ticketform-group">
          <label htmlFor="opponent">Opponent:</label>
          <select
            onChange={changeTicketState}
            required
            id="opponent"
            name="opponent"
            className="form-control"
            value={ticket.opponent}
          >
            <option value="" disabled>Select an opponent</option>
            {opponents.map(opponent => (
              <option key={opponent.id} value={opponent.id}>
                {opponent.opponent}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button onClick={submitTicket} className="btn btn-primary">
        Donate Tickets
      </button>
    </form>
    </div>
  );
};
