import React, { useEffect, useState } from "react";
import { getAllOrgTickets, deleteOrgTicket } from "../../managers/OrgManager";

export const ClaimedTicketBoard = ({ ticketHolderId }) => {
  const [orgtickets, setOrgTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const ticketArray = await getAllOrgTickets(ticketHolderId);
      setTickets(ticketArray);
    };
    fetchTickets();
  }, [ticketHolderId]);

  const deleteButton = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteOrgTicket(id);
      const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
      setTickets(updatedTickets);
    }
  };

  return (
    <div className="ticket-list">
      <h2>My Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Section: {ticket.section} | No. of tickets: {ticket.numberOfTickets} | Date: {ticket.date}{" "}
            | Opponent: {ticket.opponent}
            <button className="delete-button" onClick={() => deleteButton(ticket.id)}>
              Delete
            </button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
