import actionsType from './actionTypes'
export const increacement=(id)=>{
    return{
        type:actionsType.INCREACEMENT_NUM,
        payload:{
            id
        }
    }
}
export const decreacement=(id)=>{
    return{
        type:actionsType.DECREACEMENT_NUM,
        payload:{
            id
        }
    }
}
// export const increacementAsync=(id)=>{
//     return dispatch=>{
//         setTimeout(function (){dispatch(increacement(id))},3000)
//     }
// }
export const increacementAsync=id=> dispatch=>{
        setTimeout(()=>{dispatch(increacement(id))},3000)
}
