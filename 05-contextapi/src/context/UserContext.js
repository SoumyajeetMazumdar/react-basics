import { createContext } from "react";

const UserContext = createContext();
/* creation of a userContext and subsquent provider as a wrapper, which can then be used to wrap around our app to give access to all the info */

export default UserContext;
