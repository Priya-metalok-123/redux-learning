const {createStore, combineReducers,applyMiddleware} = require("redux")
const logger =require('redux-logger').default;
const BUY_MOBILE="BUY_MOBILE";

const initialState={
    numOfLaptops:100
}
const initialMobile={
    numOfMobiles:1000
}
// state we cant change directly so we need to call action like below
// {
//     type:"BUY_LAPTOP"
//  WE Need to write in function so below are the syntax for actions}
const buyLaptop=()=>{
    return{
        type:"BUY_LAPTOP"
    }
}
const buyMobile=()=>{
    return{
        type:BUY_MOBILE
    }
}
// 3rd principile for reducer below are the syntax
// if suppose we taking an function and we are passing 2 parameters and need to assign initial state here
// const reducer =(state=initialState,action)=>{
//     if(action.type==="BUY_LAPTOP"){
//         return{numOfLaptops: state.numOfLaptops-1}
        
//     }else{
//         return state;
//     }

// }
// we can write the above condtion in switch also like below are the syntax
const laptopReducer =(state=initialState,action)=>{
    switch(action.type){
        case "BUY_LAPTOP":
             return{numOfLaptops: state.numOfLaptops-1}
             default:
                return state;
    }
}

// we can create multiple reducers example is mobile 
const mobileReducer =(state=initialMobile,action)=>{
    switch(action.type){
        case "BUY_MOBILE":
             return{numOfMobiles: state.numOfMobiles-1}
             default:
                return state;
    }
}
// --------javascript application----->action-------->reducer------>store
// 1.subscribing to javascript applycation before that we need to create a store
// here is the store
// now we are combining reducers 
const rootReducer = combineReducers({laptops:laptopReducer,mobiles:mobileReducer})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log(store);
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());