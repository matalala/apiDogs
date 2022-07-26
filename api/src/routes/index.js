const { Router } = require('express');
const { join } = require('path');
const modules = require('./module')

const router = Router();

    modules.getdogs()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',(req,res)=>{
    const img=modules.landing()
    res.json(img)
})
router.get('/dogs',(req,res)=>{
    const name=req.query.name
    let dogs;
   try {
     name?dogs=modules.dogQuiery(name):dogs=modules.dogs()
     res.json(dogs)
   } catch (err) {
        res.status(400).json({error: err.message});
   }
})
router.get('/dogs/:id',(req,res)=>{
    const {id}=req.params
    let result;
   try {
    result=modules.dogsXid(id)
    res.json(result)
   } catch (err) {
    res.status(400).json({error: err.message});
   } 
})
router.post('/dogs',(req,res)=>{
    //console.log(req.body)
    try {
        let result=modules.postRasa(req.body)
        result.then(data=>{
           try {
               res.json({msj:data})
            
           } catch (err) {
            res.status(400).json({error: err.message})
           }
        })
    } catch (err) {
        res.status(400).json({error: err.message})
    }
  
    
 
})
router.get('/temperamentos',(req,res)=>{
    let result=modules.getTemp()
   try {
       result.then((data)=>{
           res.json(data)
    
        })
   } catch (err) {
     res.status(400).json({error: err.message})   
    } 
       
})
router.get('/prueba',(req,res)=>{
  let result=modules.getpruena('rious') 
 try {
    //result.then(data=>console.log(data[0].dataValues.temperamentos))
    console.log(result)
 } catch (error) {
    res.json(error)    
 }
})
module.exports = router;
