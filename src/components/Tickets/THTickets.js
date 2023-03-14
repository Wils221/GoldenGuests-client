import React, { useEffect, useState } from "react";
import { fetchIt } from "../../utils/fetchIt";

export const TicketHolderTicketList = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    await fetchIt(`http://localhost:8000/orgticket/ticketholder/${ticketHolderId}`).then(
      (data) => {
        setTickets(data);
      }
    );
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const deleteTicketListing = (id) => {
    fetchIt(`http://localhost:8000/orgticket/${id}`, { method: "DELETE" }).then(() =>
      fetchTickets()
    );
  };

  return (
    <div className="ticket-list">
      <h2>My Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Section: {ticket.section} | No. of tickets: {ticket.numberOfTickets} | Date: {ticket.date}{" "}
            | Opponent: {ticket.opponent}
            <button onClick={() => deleteTicketListing(ticket.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
