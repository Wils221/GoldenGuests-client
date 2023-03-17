export const getAllTickets = () => {
  return fetch(`http://localhost:8000/tickets`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  }).then((response) => response.json());
};
export const getSingleTicket = (ticketId) => {
  return fetch(`http://localhost:8000/tickets/${ticketId}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  }).then((response) => response.json());
};
export const getAllOrgTickets = () => {
  return fetch(`http://localhost:8000/orgtickets`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  }).then((response) => response.json());
};
export const getSingleOrgTicket = (orgId) => {
  return fetch(`http://localhost:8000/orgtickets/${orgId}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  }).then((response) => response.json());
};

export const getOpponents = () => {
  return fetch(`http://localhost:8000/opponents`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  }).then((response) => response.json());
};

export const updateOrgTicket = (orgtickets, orgticketId) => {
  return fetch(`http://localhost:8000/orgtickets/${orgticketId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orgtickets),
  });
};
export const updateTickets = (tickets, ticketId) => {
  return fetch(`http://localhost:8000/tickets/${ticketId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tickets),
  });
};

export const deleteTicket = (id) => {
  return fetch(`http://localhost:8000/ticket/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  });
};
export const deleteOrgTicket = (id) => {
  return fetch(`http://localhost:8000/orgtickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("gg_user")}`,
    },
  });
};
