const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."HL_purchaseorder"(cust_id,supp_id,po_status,po_date) VALUES($1,$2,$3,$4) RETURNING *';
const data = [2,1,'Received','5/09/2021'];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();