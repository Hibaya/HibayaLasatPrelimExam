const pool = require("./db");
const sql = 'INSERT INTO "PrelimExam"."HL_supplier"(supp_name,supp_branch) VALUES($1,$2) RETURNING *';
const data = ['tianey','mati'];


pool.query (sql,data,(err,res)=>{
if (err){

    console.log (err.stack);

}else{
    console.log (res.rows[0]);
}

});

pool.end();