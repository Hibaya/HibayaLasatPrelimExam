const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
    //Order1
      await client.query('BEGIN');
      const q1 = 'INSERT INTO "PrelimExam"."HL_purchaseorder"(cust_id,supp_id,po_status,po_date) VALUES($1,$2,$3,$4) RETURNING *';
       const data1 = [2,1,'Ordered','5/20/2021'];
      const res = await client.query(q1,data1);
      console.log(res.rows[0].user_id);

      const q2 = 'INSERT INTO "PrelimExam"."HL_lineitem"(po_id,prod_id,li_info,li_status) VALUES($1,$2,$3,$4) RETURNING *';
       const data2 = [2,1,'Wraping the Package','Pending'];
      await client.query(q2,data2);

     //Order2

     await client.query('BEGIN');
     const q3 = 'INSERT INTO "PrelimExam"."HL_purchaseorder"(cust_id,supp_id,po_status,po_date) VALUES($1,$2,$3,$4) RETURNING *';
     const data3 = [2,1,'Ordered','5/20/2021'];
     await client.query(q3,data3);

     const q4 = 'INSERT INTO "PrelimExam"."HL_lineitem"(po_id,prod_id,li_info,li_status) VALUES($1,$2,$3,$4) RETURNING *';
     const data4 = [3,1,'Wraping the Package','Pending'];
     await client.query(q4,data4);


     //Order3

await client.query('BEGIN');
      const q5 = 'INSERT INTO "PrelimExam"."HL_purchaseorder"(cust_id,supp_id,po_status,po_date) VALUES($1,$2,$3,$4) RETURNING *';
       const data5 = [2,1,'Ordered','5/20/2021'];
      
      const q12 = 'INSERT INTO "PrelimExam"."HL_lineitem"(po_id,prod_id,li_info,li_status) VALUES($1,$2,$3,$4) RETURNING *';
       const data12 = [4,1,'Wraping the Package','Pending'];
      await client.query(q5,data5);


      await client.query('COMMIT');
    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state

      client.release();
      console.log("Added");
    }
  })().catch(e=>console.error(e.stack))
;
