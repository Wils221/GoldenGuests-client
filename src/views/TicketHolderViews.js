import { Outlet, Route, Routes } from "react-router-dom"
import { TicketHolderTicketList } from "../components/THTickets/THTickets"
import { TicketForm } from "../components/THTickets/TicketForm"


export const TicketHolderViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Golden Guests</h1>
                    <div>Your one-stop-shop to Donate your NSC Tickets to local organizations</div>

                    <Outlet />
                </>
            }>
                <Route path="tickets" element={ <TicketHolderTicketList /> } />
                <Route path="ticket/create" element={ <TicketForm /> } />
            </Route>
        </Routes>
    )
}