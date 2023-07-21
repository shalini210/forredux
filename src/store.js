import { createStore } from "redux";
// import colorReducer from "./reducers/colorReducer";
import abc from "./reducers/colorReducer";
 function configureStore(state={colorname:'red'})
{
    return createStore(abc,state);
}
export default configureStore