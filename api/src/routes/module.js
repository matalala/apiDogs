const axios= require('axios')
const path =require('path')
let dogs=[];
let res=[];
module.exports={
    landing:function(){
        const img = path.join(__dirname+'/img/lading.jpg')
    
        return {img}
    },
    getdogs:function(){
        function a(data){
            dogs=[...data]
            }
            axios.get('https://api.thedogapi.com/v1/breeds')
            .then((data)=>{a(data.data)
            console.log(dogs)
            })      
   
    },
    fDogs:function(){
         res=dogs.map((p)=>{
            return{
                id:p.id,
                nombre:p.name,
                altura:p.height,
                peso:p.weight,
                Avida:p.life_span,
                img:p.reference_image_id,
                key:p.id
            }
            
           })
           return res
    },
    dogsXid:function(id){
        console.log(id)
        let result=res.filter((f)=>f.id==id)
        return result
    }
    
}