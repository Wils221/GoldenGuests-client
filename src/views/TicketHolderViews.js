import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../components/THTickets/TicketForm"
import { TicketHolderTicketList } from "../components/THTickets/THTickets"
import { TicketEdit } from "../components/THTickets/TicketEdit"


export const TicketHolderViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Golden Guests</h1>
                    <h2>Your one-stop-shop to Donate your NSC Tickets to local organizations</h2>

                    <Outlet />
                </>
            }>
                <Route path="/ticketholdertickets" element={ <TicketHolderTicketList /> } />
                <Route path="ticket/create" element={ <TicketForm /> } />
                <Route path="/ticketedit/:ticketId" element={<TicketEdit />} />
            </Route>
        </Routes>
    )
}