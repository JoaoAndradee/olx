const initialState = {
    email: ''
};

export default (state = initialState, action) => {

    if(action.type === 'SET_EMAIL') {
        return {...state, email: action.payload.email};
    }

    // switch(action.type) {
    //     case 'SET_EMAIL':
    //         return {...state, email: action.payload.email};
    //         break;
    // }
    
    return state;
}

