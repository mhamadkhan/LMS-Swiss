import { legacy_createStore as createStore, combineReducers } from "redux";

let initialData = {
    currentUser: [],
    state: "loading",
    // toggle: '' ,
    // Outlet:'loading'
}

// console.log(initialData)

function userReducer(olData = initialData, newData) {

    if (newData.type === "USER_LOGGED_IN") {
        olData.currentUser = newData.payload;
        olData.state = "loaded";
    }

    else if (newData.type === "USER_LOGGED_OUT") {
        localStorage.removeItem("token");
        olData.state = "loading";
        olData.currentUser = [];
    }
    else if (newData.type === "session_failed") {
        localStorage.removeItem("token");
        olData.state = "session_failed";
    }
    // else if(newData.type == "Toggle"){      
    //     olData.toggle = newData.payload;
    // }
    // else if(newData.type == "Outlet_load"){      
    //     olData.Outlet = 'Loaded';
    // }

    return { ...olData };
}

let bigReducer = combineReducers({ userReducer });

let merastore = createStore(bigReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

export default merastore;




// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { loginReducer } from "./reducers/reducer";


// const allReducer = combineReducers({
//     myStore: loginReducer
// })

// const store = configureStore({
//     reducer: allReducer,
// });

// export default store


