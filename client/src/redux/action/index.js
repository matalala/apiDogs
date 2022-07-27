export const GET_DOGS='GET_DOGS'
export const GET_LADING='GET_LADING'
export const GET_TEMP='GET_TEMP'
export const POST_DOGS='POST_DOGS'


export  const getDogs=()=>{
return async function(dispatch){
    return fetch('http://localhost:3001/dogs')
    .then(response=>response.json())
    .then((data)=>{
        dispatch({type:GET_DOGS,payload:data})
        })
    .catch(err=>{
        dispatch({type:GET_DOGS,payload:err})
    })
}
}
export const getLading=()=>{
    return async function(dispatch){
        return fetch('http://localhost:3001/')
        .then(res=>res.json())
        .then((data)=>{
            dispatch({
                type:GET_LADING,
                payload:data
            })
        })
        .catch(err=>{
            dispatch({type:GET_LADING,payload:err})
        })
    }
}
export const postFogs=(datos)=>{
    return async function(dispatch){
        return fetch('http://localhost:3001/',{
            method:'POST',
            body:{
                nombre:datos.nombre,
                altura:{
                    alturaMetric:datos.altura.alturaMetric,
                    alturaImperial:datos.altura.alturaImperial
                },
                peso:{
                    pesoImperial:datos.peso.pesoImperial,
                    pesoMetric:datos.peso.pesoMetric
                    },
                avida:datos.avida,
                img:"url",
                temperamentos:datos.temperamentos
            }
        })
        .then(res=>res.json())
        .then((data)=>{
            dispatch({
                type:GET_TEMP,
                payload:data
            })
        })
        .catch(err=>{
            dispatch({type:GET_LADING,payload:err})
        })
    }
}
export const getTemp=()=>{
    return async function(dispatch){
        return fetch('http://localhost:3001/temperamentos')
        .then(res=>res.json())
        .then((data)=>{
            dispatch({
                type:GET_TEMP,
                payload:data
            })
        })
        .catch(err=>{
            dispatch({type:GET_LADING,payload:err})
        })
    }
}