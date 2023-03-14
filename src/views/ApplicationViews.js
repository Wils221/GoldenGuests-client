import { OrgViews } from "./OrgViews"
import { TicketHolderViews } from "./TicketHolderViews"

// this function is checking to see if the person who logged in is an employee. IF they are it will return the vioew for employees. if they are not it will return the customer view
export const ApplicationViews = () => {
    
    const localGGUser = localStorage.getItem("gg_user")
    const GoldenGuestUserObject = JSON.parse(localGGUser)
    
        if (GoldenGuestUserObject.isTicketHolder) {
            return <OrgViews />
        }
        else {
            return <TicketHolderViews/>
        }
}