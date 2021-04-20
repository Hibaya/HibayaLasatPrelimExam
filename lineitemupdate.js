const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."HL_lineitem" SET po_id = $1, prod_id = $2, li_info = $3, li_status = $4 WHERE li_id=1 RETURNING *';
const data = [1,1,'Package Delivery','Confirm'];

pool.query (sql,data,(err,res)=>{
    if (err){

        console.log (err.stack);

    }else{
        console.log (res.rows[0]);
    }

    });

    pool.end();