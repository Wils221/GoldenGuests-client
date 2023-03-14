import { Outlet, Route, Routes } from "react-router-dom"

export const OrgTicketViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Golden Guests</h1>
                    <div>Your one-stop-shop to Donate your NSC Tickets to local organizations</div>

                    <Outlet />
                </>
            }>
            
        </Routes>
    )
}