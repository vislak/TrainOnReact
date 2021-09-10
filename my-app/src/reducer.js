const initState = {
    loggedIn: false,
    loginForm: {
        error: '',
        loading: false,
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_COMPLETED':
            return { ...state, loggedIn: true };
        case 'LOGOUT_COMPLETED':
            return { ...state, loggedIn: false };
        case 'LOGIN_STARTED':
            return {
                ...state,
                loginForm: {
                    loading: true,
                    error: null
                }
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                loginForm: {
                    loading: false,
                    error: 'Username and Password mismatch'
                }
            }

        default:
            return state;
    }
}

export default reducer;