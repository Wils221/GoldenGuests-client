import { Route, Routes, Outlet } from "react-router-dom"
import { AvailableTicketBoard } from "../components/OrgTickets/AvailableTickets"
import { ClaimedTicketBoard } from "../components/OrgTickets/ClaimedTickets"

export const OrgViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Golden Guests</h1>
                    <div>Your one-stop-shop to Donate your NSC Tickets to local organizations</div>

                    <Outlet />
                </>
            }>
                <Route path="/claimedtickets" element={ <ClaimedTicketBoard /> } />
                <Route path="/availabletickets" element={ <AvailableTicketBoard /> } />
                
            </Route>
        </Routes>
    )
}