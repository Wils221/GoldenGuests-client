import React, { useEffect, useState } from "react";
import { getAllTickets, deleteTicket } from "../../managers/THManager";
import { useNavigate } from "react-router-dom";
import "./Tickets.css" 

export const TicketHolderTicketList = ({ ticketHolderId }) => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate()
  const auth = localStorage.getItem("gg_user")
  const userId = JSON.parse(auth).user

  useEffect(() => {
      getAllTickets(userId).then(data => setTickets(data))
  }, [])



  const deleteButton = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteTicket(id).then(() => {
        getAllTickets().then(data => setTickets(data));
      });
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
            <button onClick={() => deleteButton(ticket.id)}>Remove Listing</button>
            <button onClick={() => { navigate(`/ticketedit/${ticket.id}`) }}>Edit Listing</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

<div class="cardWrap">
  <div class="card cardLeft">
    <h1>Startup <span>Cinema</span></h1>
    <div class="title">
      <h2>How I met your Mother</h2>
      <span>movie</span>
    </div>
    <div class="name">
      <h2>Vladimir Kudinov</h2>
      <span>name</span>
    </div>
    <div class="seat">
      <h2>156</h2>
      <span>seat</span>
    </div>
    <div class="time">
      <h2>12:00</h2>
      <span>time</span>
    </div>
    
  </div>
  <div class="card cardRight">
    <div class="eye"></div>
    <div class="number">
      <h3>156</h3>
      <span>seat</span>
    </div>
    <div class="barcode"></div>
  </div>

</div>