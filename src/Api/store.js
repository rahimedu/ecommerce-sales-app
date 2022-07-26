import {createStore} from 'redux'


const intialState ={
        cart:[
        ],
        Comments :[
            {
                id : 1,
                email : "ahmedali0024@yahoo.com",
                name : "ahmed Ali",
                comment :"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella."
    
            },
            {
                id : 2,
                email : "ma02121@gmail.com",
                name : "mohamed Ahmed",
                comment :"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella."     
               }
        ]
    }


function reducers(state,action){
    if(action.type === "ADD_CART"){
      return{
          cart : [...state.cart,{product : action.info , quantity : action.quantity}],
          Comments : [...state.Comments]
     } 
    }else if(action.type === "ADD_COMMENT"){
        return{
            cart : [...state.cart],
            Comments : [...state.Comments,{id : action.id , name : action.name, email :action.email ,comment :action.comment}],
        }
    }else if(action.type === "REMOVE_FROM_CART"){
           const newState = {...state};
             newState.cart.splice(action.index,1);
        return newState;
    }else if(action.type === "PAY_ORDER"){
        const newState = {...state};
        newState.cart = [];
        return  newState;
    }else if(action.type === "UPDATE_ORDER")
    {
        const newState = {...state}; 
        const course = newState.cart[action.id];
          course['quantity']=action.quantity;
         return newState;
    }else{
        return state
    }
}

const store = createStore(reducers , intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;