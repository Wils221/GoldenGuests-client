import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../components/Tickets/TicketForm"
import { TicketList } from "../components/Tickets/TicketList"

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
                <Route path="tickets" element={ <TicketList /> } />
                <Route path="ticket/create" element={ <TicketForm /> } />
            </Route>
        </Routes>
    )
}