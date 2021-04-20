const pool = require("./db");
const sql = 'UPDATE "PrelimExam"."HL_supplier" SET supp_name = $1, supp_branch = $2 WHERE supp_id=1 RETURNING *';
const data = ['cedric','Kanagawa'];

pool.query (sql,data,(err,res)=>{
    if (err){

        console.log (err.stack);

    }else{
        console.log (res.rows[0]);
    }

    });

    pool.end();
