import {GET_DOGS,GET_LADING,GET_TEMP,POST_DOGS} from "../action/";

const stadoInicial={
    dogs:[],
    temperamentos:[],
    imgLading:{},
    resPost:{}
}

const rootReduce=(state=stadoInicial,action)=>{
    switch (
        action.type
      )
{
    case GET_DOGS:
        return{
            ...state,
            dogs:state.dogs.concat(action.payload)
        }
    case GET_LADING:
        return{
            ...state,
            imgLading:action.payload
        }
    case GET_TEMP:
        return{
            ...state,
            temperamentos:state.dogs.concat(action.payload)
        }
    case POST_DOGS:
        return{
            ...state,
            resPost:action.payload
        }
default:
    return{
        ...state
    }
}

}
export default rootReduce;