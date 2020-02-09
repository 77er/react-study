import actionTypes from '.././actions/actionTypes'
const cartState=[
    {id:1,name:'APPLE',price:9999,num:10},
    {id:2,name:'HUAWEI',price:8999,num:10},
];
export const Cart=(state=cartState,action)=>{
    switch (action.type) {
        case actionTypes.INCREACEMENT_NUM:
            return state.map(item=>{
                if (item.id===action.payload.id){
                    item.num+=1;
                }
              return item
            });
        case actionTypes.DECREACEMENT_NUM:
            return state.map(item=>{
                if (item.id===action.payload.id){
                    item.num-=1;
                }
                return item
            });
        default:
            return state
    }
}