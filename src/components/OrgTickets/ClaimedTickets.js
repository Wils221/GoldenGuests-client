import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteOrgTicket, getAllOrgTickets } from "../../managers/OrgManager";

export const ClaimedTicketBoard = ({ ticketHolderId }) => {
  const [orgtickets, setOrgTickets] = useState([]);
  const navigate = useNavigate()
  const auth = localStorage.getItem("gg_user")
  const userId = JSON.parse(auth).user


  useEffect(() => {
    getAllOrgTickets(userId)
    .then((data) => {
        const ClaimedTickets = data
        setOrgTickets(ClaimedTickets)
    })
},
[]
)
  return (
    <div className="ticket-list">
      <h2>My Tickets</h2>
      <ul>
        {orgtickets.map((orgTicket) => (
          <li key={orgTicket.id}>
            Section: {orgTicket.ticket.section} | No. of Tickets: {orgTicket.ticket.number_of_tickets} | Date: {orgTicket.ticket.date}
            | Opponent: {orgTicket.ticket.opponent.opponent} | Donor Name: {orgTicket.goldenguest.first_name} | Contact Email: {orgTicket.goldenguest.email}
            <button className="btn-delete"
                        onClick={() => {
                            deleteOrgTicket(orgTicket.id)
                            .then(() => { 
                              getAllOrgTickets(userId).then(data => setOrgTickets(data))
                            })
                        }}
                        >Completed</button>
            </li>
        ))}
      </ul>
    </div>
  );
};
