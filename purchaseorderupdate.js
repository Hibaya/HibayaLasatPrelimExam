const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."HL_purchaseorder" SET cust_id = $1, po_status = $2, po_date= $3 WHERE po_id = 4 RETURNING *';
const data = [4,'Order Delayed','5/20/2021'];

pool.query (sql,data,(err,res)=>{
    if (err){

        console.log (err.stack);

    }else{
        console.log (res.rows[0]);
    }

    });

    pool.end();
