import React, { useEffect, useState } from "react";
import { getAllTickets, deleteTicket, updateTicket } from "../../managers/THManager";

export const TicketHolderTicketList = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);
  const [editId, setEditId] = useState(null);
  const [updatedTicket, setUpdatedTicket] = useState(null);
  useEffect(() => {
      getAllTickets().then(data => setTickets(data))
  }, [])

  useEffect(() => {
    if (updatedTicket) {
      updateTicket(updatedTicket).then(() => {
        getAllTickets().then((data) => setTickets(data));
        setUpdatedTicket(null);
      });
    }
  }, [updatedTicket]);
      

  const deleteButton = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteTicket(id).then(() => {
        getAllTickets().then(data => setTickets(data));
      });
    }
}
const editButton = (id) => {
  setEditId(id);
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
            <button onClick={() => editButton(ticket.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
