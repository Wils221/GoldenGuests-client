import { OrgViews } from "./OrgViews"
import { TicketHolderViews } from "./TicketHolderViews"

// this function is checking to see if the person who logged in is a TicketHoler. IF they are it will return the view for TicketHolders. if they are not it will return the OrgViews view
export const ApplicationViews = () => {
    const localGGUser = localStorage.getItem("gg_user")
    const GoldenGuestUserObject = JSON.parse(localGGUser)
    
    
        if (GoldenGuestUserObject.isTicketHolder) {
            return <TicketHolderViews/>
        }
        else {
            return <OrgViews/>
        }
}