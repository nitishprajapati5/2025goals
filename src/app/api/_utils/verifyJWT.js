import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';



export async function verifyIsLoggedIn(request){
    const cookieStore = cookies()
    const authCookie = (await cookieStore).get('auth-cookie').value

    const data = jwt.decode(authCookie,process.env.JWT_SECRET_KEY)
    let isLoggedIn = true;

    console.log(authCookie)

    if(data.exp * 1000 < Date.now()){
        isLoggedIn = false
    }
    return isLoggedIn;    
    
}

