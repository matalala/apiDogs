import React from "react"
function Dog(state){
    return(
        <div>
            <img src={state?state.img:''} alt="" />
            <h3>'nombre: '{state?state.nombre:''}</h3>
            <br/>
            <samp>temperamentos: </samp>
            {state.temp?.map((p)=>{
                return(
                    <>
                    <br/>
                    <samp>{p}</samp>
                    </>
                )
            })}
             <br/>
            <span>peso imperial: {state?state.peso.imperial:''}</span>
        </div>
    )
}
export default Dog;