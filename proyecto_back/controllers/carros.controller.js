const Carro = require("../models/carros.model")
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let carro = new Carro({
        carro_id: req.body.carro_id,
        color_puertas: req.body.color_puertas,
        edad: req.body.edad,
        tipo: req.body.tipo,
        ciudad_o: req.body.ciudad_o
    })
    carro.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el carro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El carro se guardo correctamente"
        res.json(response)
    })


}

exports.find = function(req,res){

    Carro.find(function(err, carros){
        res.json(carros)
    })
    
}

exports.findOne = function(req,res){

    Carro.findOne({_id: req.params.id},function(err, carro){
        res.json(carro)
        })

}

exports.update = function(req,res){
    let carro = ({
        carro_id: req.body.carro_id,
        color_puertas: req.body.color_puertas,
        edad: req.body.edad,
        tipo: req.body.tipo,
        ciudad_o: req.body.ciudad_o
    })
    Carro.findByIdAndUpdate(req.params.id,{$set: carro},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el carro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El carro se guardo correctamente"
        res.json(response)
    })


}

exports.find = function(req,res){

    Carro.find(function(err, carros){
        res.json(carros)
    })
    
}

exports.findOne = function(req,res){

    Carro.findOne({_id: req.params.id},function(err, carro){
        res.json(carro)
        })

}

exports.remove = function(req,res){
    
    Carro.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el carro"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El carro se eliminado correctamente"
        res.json(response)
    })


}

exports.find = function(req,res){

    Carro.find(function(err, carros){
        res.json(carros)
    })
    
}

exports.findOne = function(req,res){

    Carro.findOne({_id: req.params.id},function(err, carro){
        res.json(carro)
        })

}