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
    let dogs=modules.fDogs()
    res.json(dogs)
})
router.get('/dogs/:id',(req,res)=>{
    const {id}=req.params
    let result = modules.dogsXid(id)
    res.json(result)
})
router.post('/dogs',(req,res)=>{

})
router.get('/temperaments',(req,res)=>{

})
module.exports = router;
