import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
// import { OrgNav } from "./components/nav/OrgNav"
// import { THNav } from "./components/nav/THNav"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
// import { TicketHolderViews } from "./views/TicketHolderViews"
// import { OrgViews } from "./views/OrgViews"
import { NavBar } from "./components/nav/NavBar"

export const GoldenGuest = () => {
    return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
	

		<Route path="*" element={
			<Authorized>
				<>
				<NavBar />
					<ApplicationViews />
				</>
			</Authorized>
		} />
</Routes>
}