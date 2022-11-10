 export  const reducer=(state,action)=>{
    switch(action.type){
        case 'loading':{
            return {
                isauth:false,
                loading:false,
                token:'',
                error:false
            }
        }
        case 'login_success':{
            return {
                isauth:true,
                loading:false,
                token:action.paylaod,
                error:false
            }
        }
        case 'login_fail':{
            return {
                isauth:false,
                loading:false,
                token:null,
                error:true
            }
        }
        default:{
            return state
        }
    }
}