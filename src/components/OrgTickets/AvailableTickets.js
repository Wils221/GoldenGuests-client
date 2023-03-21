import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrgTicket, getAllUnclaimedTickets } from "../../managers/OrgManager";
import { updateTicket } from "../../managers/THManager";

export const AvailableTicketBoard = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const auth = localStorage.getItem("gg_user")
  const userId = JSON.parse(auth).user
  
  
  useEffect(() => {
    getAllUnclaimedTickets().then((data) => setTickets(data));
  }, []);
  
  
  const handleClaimTicket = (ticket) => {
    const orgTicket = {
      GoldenGuest: userId,
      Ticket: ticket.id
    };
    const ticket1 = {
      section: ticket.section,
      number_of_tickets: ticket.number_of_tickets,
      date: ticket.date,
      goldenguest: userId,
      opponent: ticket.opponent.id ,
      isOrgTicket: true      
    }
    
    updateTicket(ticket1, ticket.id)
    
    
    createOrgTicket(orgTicket)
    .then(() => {
      
      navigate("/claimedtickets");
    })
    .catch((error) => {
      console.error(error);
    });    
  };

  // const handleOrgTicket = (ticket) => {
  //   const ticket1 = {
  //     section: ticket.section,
  //     number_of_tickets: ticket.number_of_tickets,
  //     date: ticket.date,
  //     goldenguest: userId,
  //     opponent: ticket.opponent ,
  //     isOrgTicket: true      
  //   }
    
  //   updateTicket(ticket1, ticket.id)
  // }

  return (
    <div className="ticket-list">
      <h2>Available Tickets</h2>
      {
        <ul>
          {
          tickets.map(ticket => {
              
                return (
                  <li key={ticket.id}>
                    Section: {ticket.section} | No. of tickets: {ticket.number_of_tickets} | Date: {ticket.date}{" "}
                    | Opponent: {ticket.opponent.opponent}
                    <button onClick={() => handleClaimTicket(ticket)}
                    >Claim Ticket</button>
                  </li>
                )          
  })}
      </ul>
}
    </div>
  );
};
