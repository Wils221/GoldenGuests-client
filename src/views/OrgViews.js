import { Route, Routes, Outlet } from "react-router-dom"
import { AvailableTicketBoard } from "../components/OrgTickets/AvailableTickets"
import { ClaimedTicketBoard } from "../components/OrgTickets/ClaimedTickets"

export const OrgViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Golden Guests</h1>
                    <div>Claim Donated Tickets from Nashville Soccer Club Ticket Holders. Simply click the "Claim" button, then contact to Donor listed on the ticket to arragne for transfer of the tickets. </div>

                    <Outlet />
                </>
            }>
                <Route path="/claimedtickets" element={ <ClaimedTicketBoard /> } />
                <Route path="/availabletickets" element={ <AvailableTicketBoard /> } />
                
            </Route>
        </Routes>
    )
}