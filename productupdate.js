const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."HL_product" SET prod_name = $1, prod_type = $2, supp_id = $3 WHERE prod_id=1 RETURNING *';
const data = ['Predator','Laptop', 1];

pool.query (sql,data,(err,res)=>{
    if (err){

        console.log (err.stack);

    }else{
        console.log (res.rows[0]);
    }

    });

    pool.end();
