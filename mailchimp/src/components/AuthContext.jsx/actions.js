export const loading=()=>{
    return {
        type:'loading',
        
    }
}
export const login_success=(data)=>{
    return{
        type:'login_success',
        payload:data
    }
}

export const login_fail=()=>{
    return {
        type:'login_fail'
    }
}