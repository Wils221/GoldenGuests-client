import React, { useEffect, useState } from "react";


export const ClaimedTicketBoard = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);

  const getAllTickets = () => {
    fetch(`http://localhost:8088/tickets`)
        .then(response => response.json())
        .then((ticketArray) => {
            setTickets(ticketArray)
        })
}

  useEffect(() => {
    getAllTickets();
  }, []);

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
            Section: {ticket.section} | No. of tickets: {ticket.numberOfTickets} | Date: {ticket.date}{" "}
            | Opponent: {ticket.opponent}
            <button className="delete-button" onClick={()=> {deleteButton(tickets.id)}}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
