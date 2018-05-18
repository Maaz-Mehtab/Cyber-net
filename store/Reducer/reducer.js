const INITIAL_STATE = {
    Depart:[],
    CustomerTyp:[],
    Prioty:[],
    Initia:[],
    Produc:[],
    Reques:[]
    

}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DEPARTMENTS":
        return ({
            ...state,
            Depart: action.payload
        })
        case "CUSTOMERTYPE":
        return ({
            ...state,
            CustomerTyp:action.payload
        })
        case "PRIORITY":
        return ({
            ...state,
            Prioty:action.payload
        })
        case "INITIATOR":
        return ({
            ...state,
            Initia:action.payload
        })
        case "PRODUCT":
        return ({
            ...state,
            Produc:action.payload
        })
        case "REQUESTTYPE":
        return ({
            ...state,
            Reques:action.payload
        })
  
        default:
            return state;
    }

}