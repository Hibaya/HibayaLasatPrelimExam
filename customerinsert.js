const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."HL_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
const data = ['nerd','brazil'];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();