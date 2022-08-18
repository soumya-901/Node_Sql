const dbConn = require('../../config/db.config');


const Customer = (customer)=>{
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
    this.phone = customer.phone;
    this.created_at = new Date();
    // this.updated_at = new Date();
}

// get all customers
Customer.getAllCustomers = (result)=>{
    dbConn.query('SELECT * FROM customers',(err,res)=>{
        if(err)
        {
            console.log('error while fetching customers');
        }
        else{
            console.log('fetching successfullly');
            result(null,res);
        }
    })
}
Customer.getOneUser = (id,result)=>{
    dbConn.query(`SELECT * FROM customers WHERE ID = ${id}`,(err,res)=>{
        if(err)
        {
            console.log(err);
            var message = {message:"provide id doesn't exits"};
            result(null,message);
        }
        else{
            result(null,res)
        }
    })
}

Customer.createOneUser = (obj,result)=>{
    dbConn.query(
        "INSERT INTO customers SET ?",obj,(err,res)=>{
            if(err)
            {
                result(null,err.sqlMessage);
            }
            result({message:"user register succesfully"})
        }
    )
}
Customer.deleteOneuser = (id,result)=>{
    dbConn.query(`DELETE FROM customers WHERE ID =${id}`,(err,res)=>{
        if(err){
            result(null,err);
        }
        result({message:"user deleted succesfully"})
        
    })
}

module.exports = Customer;
