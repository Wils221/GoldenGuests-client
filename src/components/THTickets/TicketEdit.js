import React, { useState, useEffect } from "react";
import "../THTickets/Tickets.css"
import { useNavigate, useParams } from "react-router-dom";
import { getOpponents, getSingleTicket, updateTicket } from "../../managers/THManager";



export const TicketEdit = () => {
  const {ticketId} = useParams()
  const auth = localStorage.getItem("gg_user")
  const userId = JSON.parse(auth).user
  const [ticket, setUpdateTicket] = useState({
    section: "",
    number_of_tickets: "",
    date: "",
    opponent: "",
    isOrgTicket: false,
    goldenguest: userId
  });

  const [opponents, setOpponents] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    getOpponents().then(data => setOpponents(data))
}, [])

  useEffect(() => {
    getSingleTicket(ticketId)
    .then((data) => {
      const singleTicket = data
      setUpdateTicket(singleTicket)
    })
    }, 
    [ticketId]
)


  // const submitTicket = (evt) => {
  //   evt.preventDefault();

  //   const newticket = {
  //     section: parseInt(ticket.section),
  //     number_of_tickets: parseInt(ticket.number_of_tickets),
  //     date: ticket.date,
  //     opponent: parseInt(ticket.opponent.id)
  // }
  // setUpdateTicket(newticket, ticketId)
  // .then(() => navigate("/ticketholdertickets"))
  // }

  return (
    <form className="ticketForm">
      <h2 className="ticketForm__title"> Ticket Donation Form </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            required
            autoFocus
            type="text"
            id="section"
            name="section"
            className="form-control"
            placeholder="Enter section"
            value={ticket.section}
            onChange={(evt) => {
              const copy= {...ticket}
                  copy.section = evt.target.value
                  setUpdateTicket(copy)}}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="number_of_tickets">Number Of Tickets:</label>
          <input
            required
            type="number"
            id="number_of_tickets"
            name="number_of_tickets"
            className="form-control"
            placeholder="Enter number of tickets"
            min="1"
            max="10"
            value={ticket.number_of_tickets}
            onChange={(evt) => {
              const copy= {...ticket}
                  copy.number_of_tickets = evt.target.value
                  setUpdateTicket(copy)}}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            required
            type="date"
            id="date"
            name="date"
            className="form-control"
            placeholder="Enter date"
            value={ticket.date}
            onChange={(evt) => {
              const copy= {...ticket}
                  copy.date = evt.target.value
                  setUpdateTicket(copy)}}

          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="opponent">Opponent:</label>
          <select
            required
            id="opponent"
            name="opponent"
            className="form-control"
            value={ticket.opponent.id}
            onChange={(evt) => {
              const copy= {...ticket}
                  copy.opponent.id = parseInt(evt.target.value)
                  setUpdateTicket(copy)}}
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
      <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const newticket = {
                      section: parseInt(ticket.section),
                      number_of_tickets: parseInt(ticket.number_of_tickets),
                      date: ticket.date,
                      opponent: parseInt(ticket.opponent.id),
                      goldenguest: userId,
                      isOrgTicket: ticket.isOrgTicket
                      
                    }

                    // Send POST request to your API
                    updateTicket(newticket, ticketId)
                        .then(() => navigate("/ticketholdertickets"))
                }}
                className="btn btn-primary">Update Listing</button>
    </form>
  );
};
