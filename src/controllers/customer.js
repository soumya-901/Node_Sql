const Customermode = require('../models/customer.model')

const getcustomerList = (req,res)=>{
    // console.log("get all customer list");
    Customermode.getAllCustomers((err,emplurees)=>{
        console.log("her is i am")
        if(err){
            res.send(err);  
        }
        res.send(emplurees)
    })
}

const getonecustomer = (req,res)=>{
    Customermode.getOneUser(req.params.id,(err,customer)=>{
        if(err)
        {
            res.send(err);
        }
        res.send(customer);
    })
}

const createCustomer = (req,res)=>{
    Customermode.createOneUser(req.body,(err,customer)=>{
        if(err)
        {
            res.send(err);
        }
        res.send(customer);
    })
}
const deleteOneuser = (req,res)=>{
    Customermode.getOneUser(req.params.id,(err,customers)=>{
        if(err)
        {
            res.send(err);
        }
        if(customers.length!=0){
            Customermode.deleteOneuser(req.params.id,(err,custoemer)=>{
                if(err)
                {
                    res.send(err);
                }
                res.send(custoemer);
            })
        }
        else{
            res.send({message:"user in thsi id doesnot exist"});
        }
    })
}

// con

module.exports={
    getcustomerList,
    getonecustomer,
    createCustomer,
    deleteOneuser
}