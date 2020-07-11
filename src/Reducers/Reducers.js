export const setMenu = (state = 'Home', action) => {
    switch(action.type){
        case 'SET_MENU':
            return action.payload
        default:
            return state
    }
}