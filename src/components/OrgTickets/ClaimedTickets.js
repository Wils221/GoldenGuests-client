import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteOrgTicket, getAllClaimedTickets } from "../../managers/OrgManager";

export const ClaimedTicketBoard = ({ ticketHolderId }) => {
  const [orgtickets, setOrgTickets] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAllClaimedTickets()
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
            Section: {orgTicket.section} | No. of Tickets: {orgTicket.number_of_tickets} | Date: {orgTicket.date}
            | Opponent: {orgTicket.opponent.opponent} | Donor Name: {orgTicket.goldenguest.first_name} | Contact Email: {orgTicket.goldenguest.email}
            <button className="btn-delete"
                        onClick={() => {
                            deleteOrgTicket(orgTicket.id)
                            .then(() => {navigate("/claimedtickets")
                            })
                        }}
                        >Delete Appointment</button>
            </li>
        ))}
      </ul>
    </div>
  );
};
