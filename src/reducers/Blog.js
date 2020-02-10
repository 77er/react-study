import actionTypes from '../actions/actionTypes'
const initState={
    lists:[{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }],
    isLoading:false,
    errMsg:''
}
export default (state=initState,action)=>{
    switch (action.type) {
        case actionTypes.START_FETCH:
            return{
            ...state,
            isLoading:true,
            errMsg: ''
        }
        case actionTypes.FETCH_SUCCESS:
            return{
                ...state,
                lists:action.payload,
                isLoading:false,
                errMsg:''
            }
        case actionTypes.FETCH_FAIL:
            return{
                ...state,
                isLoading:false,
                errMsg:'出错啦！！！'
            }
        default:
            return state
    }
}