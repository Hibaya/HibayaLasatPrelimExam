const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."HL_customer" SET cust_name = $1, cust_address = $2 WHERE cust_id = 3 RETURNING *';
const data = ['nerd','brazil'];

pool.query (sql,data,(err,res)=>{
    if (err){

        console.log (err.stack);

    }else{
        console.log (res.rows[0]);
    }

    });

    pool.end();
