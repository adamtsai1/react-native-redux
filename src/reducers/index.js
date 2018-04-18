import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import LibrarySelectionReducer from './LibrarySelectionReducer';


export default combineReducers({
    libraries: LibraryReducer,
    librarySelectionId: LibrarySelectionReducer,
});
