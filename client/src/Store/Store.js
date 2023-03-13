import { createStore, combineReducers } from "redux";

let initialData = {
    currentUser: [],
    state : "loading"
   
}

  console.log(initialData)

function userReducer(olData = initialData, newData){
   
    if(newData.type == "USER_LOGGED_IN"){
        olData.currentUser = newData.payload;
        localStorage.setItem("state", "loaded")
        localStorage.setItem("role",  newData.payload.role)
        olData.state = "loaded";
    }

    else if(newData.type == "USER_LOGGED_OUT"){
        localStorage.removeItem("someToken");
        localStorage.removeItem("role");
        localStorage.setItem("state", "loading")
        olData.state = "loading";
        olData.currentUser = [];        
    }
    else if(newData.type =="session_failed"){
        localStorage.removeItem("someToken");
        localStorage.removeItem("role");
        localStorage.setItem("state", "session_failed")
        olData.state = "session_failed";
    }
   
    return {...olData};
}

let bigReducer = combineReducers({userReducer});

let meraStore = createStore(bigReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default meraStore;