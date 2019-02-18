import {createStore} from "redux";
import rootReducer from "../reducers";

// export const configureStore = createStore(reducers)

export default function configureStore(init) {
    const store = createStore(
        rootReducer,
        init,
        // 触发redux-devtools
        window.devToolsExtension ? window.devToolsExtension():undefined
    )

    return store
}