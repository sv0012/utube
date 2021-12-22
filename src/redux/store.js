import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
import { homeVideosReducer, selectedVideoReducer } from "./reducers/video.reducers";



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos : homeVideosReducer,
    selectedVideo : selectedVideoReducer,
    channelDetails : channelDetailsReducer,
    commentList: commentListReducer 
 })

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))


export default store;