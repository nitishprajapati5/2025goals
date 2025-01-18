import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:['query','info','warn','error']
})
export default async function dbConnection(){
    try{
        await prisma.$connect().then(() => {
            console.log("Database Connected")
            return true
        }).catch((error) => {
            console.log(error)
            return false
        });
        console.log("Data base Connected Successfully");
    }
    catch(error){
        console.error("Error Connection to the Database:",error)
    }
}