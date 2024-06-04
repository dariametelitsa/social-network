import { createContext } from "react";
import store, { StoreType } from "./redux/reduxStore";

const MyContext = createContext<StoreType>(store);

export default MyContext;
