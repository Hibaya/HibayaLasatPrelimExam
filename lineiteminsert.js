const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."HL_lineitem"(po_id,prod_id,li_info,li_status) VALUES($1,$2,$3,$4) RETURNING *';
const data = [1,1,'Package Delivery','Pending'];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();