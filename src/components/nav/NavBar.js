import { THNav } from "./THNav"
import { OrgNav } from "./OrgNav"
import "./NavBar.css"

export const NavBar = () => {
    const localGGUser = localStorage.getItem("gg_user")
    const GoldenGuestUserObject = JSON.parse(localGGUser)
    
        if (GoldenGuestUserObject.isTicketHolder) {
            return <THNav/>
        }
        else {
            return <OrgNav/>
        }
}