export const getAllClaimedTickets = () => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/tickets?isOrgTicket=True`, {
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  }).then((response) => response.json());
};
export const getAllUnclaimedTickets = () => {
  const localGGUser = localStorage.getItem("gg_user")
  const GoldenGuestUserObject = JSON.parse(localGGUser)
    return fetch(`http://localhost:8000/tickets?isOrgTicket=False`, {
      headers: {
        Authorization: `Token ${GoldenGuestUserObject.token}`,
      },
    }).then((response) => response.json());
  };
  
export const getSingleTicket = (ticketId) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/tickets/${ticketId}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  }).then((response) => response.json());
};

export const createOrgTicket = (orgtickets) => {
  const localGGUser = localStorage.getItem("gg_user")
  const GoldenGuestUserObject = JSON.parse(localGGUser)
    return fetch(`http://localhost:8000/orgtickets`, {
      method: "POST",
      headers: {
        Authorization: `Token ${GoldenGuestUserObject.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orgtickets),
    });
  };

export const getAllOrgTickets = (id) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/orgtickets?orguser=${id}`, {
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  }).then((response) => response.json());
};
export const getSingleOrgTicket = (orgId) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/orgtickets/${orgId}`, {
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  }).then((response) => response.json());
};

export const getOpponents = () => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/opponents`, {
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  }).then((response) => response.json());
};

export const updateOrgTicket = (orgtickets, orgticketId) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/orgtickets/${orgticketId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orgtickets),
  });
};
export const updateTickets = (tickets, ticketId) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/tickets/${ticketId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tickets),
  });
};

export const deleteTicket = (id) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/tickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  });
};
export const deleteOrgTicket = (id) => {
const localGGUser = localStorage.getItem("gg_user")
const GoldenGuestUserObject = JSON.parse(localGGUser)
  return fetch(`http://localhost:8000/orgtickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${GoldenGuestUserObject.token}`,
    },
  });
};
