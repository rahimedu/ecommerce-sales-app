export function addToCart(index,info,quantity){
    return{
        type : "ADD_CART",
        index,
        info,
        quantity
    }
}

export function removeFromCart(index){
    return{
        type : "REMOVE_FROM_CART",
      index
    }
}

export function PayOrder(){
    return{
        type : "PAY_ORDER",
    }
}

export function UpdateCart(id,quantity){
    return{
        type : "UPDATE_ORDER",
        id,
        quantity
    }
}
export function AddComment(id,name,email,comment){
    return{
        type : "ADD_COMMENT",
        id,
        name,
        email,
        comment
    }
}

