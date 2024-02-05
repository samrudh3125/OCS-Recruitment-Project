const pg=require("pg");

/*const values=[
    ["admin_test","5f4dcc3b5aa765d61d8327deb882cf99","admin"],
    ["basic_test_user","482c811da5d5b4bc6d497ffa98491e38","basic"],
    ["lakshya","5f4dcc3b5aa765d61d8327deb882cf99","basic"],
    ["user1","8223fe8dc0533c6ebbb717e7fda2833c","basic"],
    ["user2","5f4dcc3b5aa765d61d8327deb882cf99","basic"]
]*/

const client=new pg.Client({
    connectionString:process.env.DATABASE_URI
});

const createTable=async function(){
    await client.connect();

 /*   try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS members (
                id SERIAL PRIMARY KEY,
                userId VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                role varchar(10) NOT NULL
            );
        `);
        
        for(let i=0;i<values.length;i++){
            await client.query("INSERT INTO members (userId, password, role) VALUES ($1, $2, $3)", values[i]);
        }
    } catch (error) {
        console.log(error);
    }*/
}
createTable();

module.exports=client;