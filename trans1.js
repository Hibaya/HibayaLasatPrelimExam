const pool = require("./db");

(async ()=>{

    const client = await pool.connect();
    try{
    //Supplier
      await client.query('BEGIN');
      const q1 = 'INSERT INTO "PrelimExam"."HL_supplier"(supp_name,supp_branch) VALUES($1,$2) RETURNING *';
       const data1 = ['Ric','Cabantian'];
      const res = await client.query(q1,data1);
      console.log(res.rows[0].user_id);

      const q2 = 'INSERT INTO "PrelimExam"."HL_supplier"(supp_name,supp_branch) VALUES($1,$2) RETURNING *';
       const data2 = ['Rigel','Maa'];
      await client.query(q2,data2);

      const q3 = 'INSERT INTO "PrelimExam"."HL_supplier"(supp_name,supp_branch) VALUES($1,$2) RETURNING *';
       const data3 = ['Bernel','Digos'];
      await client.query(q3,data3);

      const q4 = 'INSERT INTO "PrelimExam"."HL_supplier"(supp_name,supp_branch) VALUES($1,$2) RETURNING *';
      const data4 = ['Fran','Bangkerohan'];
      await client.query(q4,data4);

      const q5 = 'INSERT INTO "PrelimExam"."HL_supplier"(supp_name,supp_branch) VALUES($1,$2) RETURNING *';
      const data5 = ['Christian','Tagum'];
      await client.query(q5,data5);

     //Product 

     await client.query('BEGIN');
     const q6 = 'INSERT INTO "PrelimExam"."HL_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
     const data6 = ['Nitro','Acer',1];
   
    

     const q7 = 'INSERT INTO "PrelimExam"."HL_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
     const data7 = ['Mac Book','Apple',1];
     await client.query(q7,data7);

     const q8 = 'INSERT INTO "PrelimExam"."HL_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
     const data8 = ['Military Grade','Hp',1];
     await client.query(q8,data8);

     const q9 = 'INSERT INTO "PrelimExam"."HL_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
     const data9 = ['XPS 13','Dell',1];
     await client.query(q9,data9);

     const q10 = 'INSERT INTO "PrelimExam"."HL_product"(prod_name,prod_type,supp_id) VALUES($1,$2,$3) RETURNING *';
     const data10 = ['E machines','Acer',1];
     await client.query(q10,data10);

     //Customer
await client.query('BEGIN');
      const q11 = 'INSERT INTO "PrelimExam"."HL_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
       const data11 = ['Maria','kidapawan'];
      
   

      const q12 = 'INSERT INTO "PrelimExam"."HL_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
       const data12 = ['Juan','Israel'];
      await client.query(q12,data12);

      const q13 = 'INSERT INTO "PrelimExam"."HL_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
       const data13 = ['Sofia','Pantukan'];
      await client.query(q13,data13);

      const q14 = 'INSERT INTO "PrelimExam"."HL_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
      const data14 = ['Shaira','Malita'];
      await client.query(q14,data14);

      const q15 = 'INSERT INTO "PrelimExam"."HL_customer"(cust_name,cust_address) VALUES($1,$2) RETURNING *';
      const data15 = ['Marie','Gov Gen'];
      await client.query(q15,data15);

     


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
