import { Prisma, PrismaClient } from "@prisma/client";

const prisma = PrismaClient({
    log:['query','info','warn','error']
})
export default async function dbConnection(){
    try{
        await prisma.$connect();
        console.log("Data base Connected Successfully");
    }
    catch(error){
        console.error("Error Connection to the Database:",error)
    }
}