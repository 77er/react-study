import actionTypes from '../actionTypes'
import getData from '../../servers'
const startFetch=()=>{
    return {
        type:actionTypes.START_FETCH,
    }
}

const fetchSuccess=payload=>{
    return{
        type: actionTypes.FETCH_SUCCESS,
        payload
    }
}
const fetchFail=()=>{
    return{
        type:actionTypes.FETCH_FAIL,
    }
}

export const fetch=()=>{
    return dispatch=>{
        dispatch(startFetch());
        getData().then(res=>{
            if(res.status===200){
                dispatch(fetchSuccess(res.data))
            }else {
                dispatch(fetchFail());
            }
        }).catch(err=>{
            console.log(err);
            dispatch(fetchFail());
        })
    }
}