import React, { useEffect, useState } from "react";
import { getAllTickets, deleteTicket } from "../../managers/THManager";

export const TicketHolderTicketList = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
      getAllTickets().then(data => setTickets(data))
  }, [])


  const deleteButton = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
        fetch(`http://localhost:8000/tickets/${id}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }    
        })
        .then(() => {
            getAllTickets()
        })
    }
}

  return (
    <div className="ticket-list">
      <h2>My Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Section: {ticket.section} | No. of tickets: {ticket.number_of_tickets} | Date: {ticket.date}{" "}
            | Opponent: {ticket.opponent.opponent}
            <button onClick={() => deleteButton(ticket.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
