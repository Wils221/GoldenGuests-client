import { Route, Routes, Outlet } from "react-router-dom"
import { OrgTicketBoard } from "../components/OrgTickets/AvailableTicketsBoard"

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
                <Route path="claimedtickets" element={ <OrgTicketBoard /> } />
                <Route path="availabletickets" element={ <OrgTicketBoard /> } />
                
            </Route>
        </Routes>
    )
}