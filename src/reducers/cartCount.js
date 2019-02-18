

export default function (state=[],action) {
    let newState = Object.assign([],state)
    let goods = action.data
    
    switch (action.type) {
        case 'CART_ADD':
            newState.push(goods)
            return newState
        case 'CART_REDUC':
            newState.push(goods)
            return newState
        default:
            return newState
    }
}