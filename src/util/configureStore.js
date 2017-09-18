import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import sharingDataReducer from '../Transport/sharingDataReducer'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        sharingDataReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
