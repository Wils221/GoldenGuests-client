import React from 'react';
import { TicketBody } from './TicketBody';

export const TicketList = ({ tickets }) => {
  const handleClaimClick = (ticket) => {
    // Send a request to claim the ticket
    fetch(`http://localhost:8000/tickets/${ticket.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        org_id: "your_organization_id",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // TODO: Handle the response from the server
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Ticket List</h1>
      {tickets.map((ticket) => {
        return (
          <div className="ticket" key={ticket.id}>
            <TicketBody ticket={ticket} />
            {!ticket.org_id && (
              <>
                <button onClick={() => handleClaimClick(ticket)}>Claim</button>
                <button>Delete</button>
                <button>Edit</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
