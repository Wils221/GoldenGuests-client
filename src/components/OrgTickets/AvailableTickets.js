import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTickets, createOrgTicket } from "../../managers/OrgManager";

export const AvailableTicketBoard = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTickets().then((data) => setTickets(data));
  }, []);

  const handleClaimTicket = (ticket) => {
    const orgTicket = {
      section: ticket.section,
      number_of_tickets: ticket.number_of_tickets,
      date: ticket.date,
      opponent: ticket.opponent.opponent,
      goldenguest_id: `${ticket.goldenguest_id}_${ticket.id}` // combine goldenguest_id and ticket.id to form the new goldenguest_id
    };
    createOrgTicket(orgTicket)
      .then(() => {
        // Redirect to claimed tickets page
        navigate("/claimedtickets");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="ticket-list">
      <h2>Available Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Section: {ticket.section} | No. of tickets: {ticket.number_of_tickets} | Date: {ticket.date}{" "}
            | Opponent: {ticket.opponent.opponent}
            <button onClick={() => handleClaimTicket(ticket)}>Claim Ticket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
