const axios= require('axios');
const path =require('path');
const {Raza,Temperamentos,RazaTemp} =require('../db.js')
let _dogs=[];
let _res=[];
let _temperamento=[];
let temperamento=[];
 async function temp(){
    temperamento=temperamento.map((p)=>{
        return{
            nombre:p
        }
    })
    let consulta= await Temperamentos.findAll();
    if(consulta.length>0){
        console.log('los tatos ya estan en la tabla')
    }else{
        await Temperamentos.bulkCreate(temperamento)
        console.log('datos cargados en la tabla')
    }
  
}
 function  fDogs(){
    _res=_dogs.map((p)=>{
        let temperamento=[];
       typeof p.temperament==='undefined'?
        temperamento="":
        temperamento= p.temperament.split(', ')
        _temperamento=[..._temperamento,...temperamento]
       return{
           id:p.id,
           nombre:p.name,
           alturaMetric:p.height.metric,
           alturaImperial:p.height.imperial,
           pesoImperial:p.weight.imperial,
           pesoMetric:p.weight.metric,
           Avida:p.life_span,
           temperamento,
           img:p.image.url,
           key:p.id
       }
       
      })
      _temperamento.forEach((f)=>{
        if(!temperamento.includes(f)) {
            temperamento.push(f)}
      })
      temperamento.sort()
      //console.log(temperamento)
     
      return _res
}
function asignar(data){
   //console.log(data)
    _dogs=[..._dogs,...data]
   // console.log(_dogs)    
}
module.exports={
    getpruena:(temp)=>{
        
        let a=temperamento.filter(f=>f.nombre===temp)
        
        return a
    },
    landing:function(){
        const img = path.join(__dirname+'/img/lading.jpg')
    
        return {img}
    },
    getdogs:async function(){
      
            
            
            await axios.get('https://api.thedogapi.com/v1/breeds')
             .then((data)=>{asignar(data.data)
             console.log('Todos los datos obtenidos de la Api')
             fDogs()
             console.log('Datos de la api organisados y listos para usar')})
             temp()
             let rasa= await Raza.findAll({
                include:Temperamentos
             })
             rasa.forEach((p)=>{
                p.then(data=>_res.push(
                    data.dataValues
                ))
             })
    },

    dogsXid:function(id){
        console.log(id)
        let result=_res.filter((f)=>f.id==id)
        
        if(result.length>0)return result
        else throw new Error('no se encontro el perro')
    },
    dogQuiery:function(name){
        let result=_res.filter((f)=>f.nombre===name)
        if(result.length>0)return result
        else throw new Error('no se encontro el perro')
    },
    dogs:function(){
        if(_res){ return _res}
        else throw new Error('error al obtener los datos')
    },
    getTemp:async function(){
      try {
          let temp= await Temperamentos.findAll();
          temp=temp.map((p)=>{
              return p.dataValues
          })
          return temp    
        
      } catch (error) {
        throw new Error('no se pudo obtener los temperamentos')
      }
    },
    postRasa:async function(obj){
        let {nombre,altura,peso,avida,temperamentos,img}=obj
        let id=_res.length+900
       var tem;
   if(nombre.length||
    altura.length||
    peso.length||
    avida.length||
    temperamentos.length||
    img.length){
        temperamentos.forEach(p=>{
            if(!temperamento.includes({nombre:p})===true)return
                `el temperamento: ${p} no existe`
        })
             let dog={
                id:id,
                nombre,
                alturaMetric:altura.alturaMetric,
                alturaImperial:altura.alturaImperial,
                pesoImperial:peso.pesoImperial,
                pesoMetric:peso.pesoMetric,
                avida,
                img
             }
                let createraza= await Raza.create({
                  ...dog
                 })
                 dog['temperamentos']=temperamentos
                 createraza
                 tem=temperamentos.map(async(p)=>{
                     return await Temperamentos.findAll({
                         where:{
                             nombre:p
                            }
                        })
                    })
                    tem.forEach((f)=>{
                        f.then(data=>{
                            createraza.addTemperamentos(data)
                        })  
                    })
        dog['key']=id
        _res.push(dog)
        return "usuario creado con exito"
    }else{ throw new Error('algo salio mal')}
    }
}
