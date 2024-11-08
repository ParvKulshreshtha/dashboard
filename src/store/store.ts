import { createStore } from 'redux';

const initialState = {
    darkTheme: false,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_DARK_THEME':
            return { ...state, darkTheme: !state.darkTheme };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
