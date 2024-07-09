import { ID } from "appwrite"
import { users } from "../appwrite.config"
import { Query } from "node-appwrite"

export const createConsumer = async (user: CreateUserParams)=>{
    try{
        const newUser= await users.create(
            ID.unique(),
            user.email, 
            user.phone, 
            undefined, 
            user.name
        )
    }catch (error:any){
        if(error && error?.code===409) {
            const existingUser = await users.list([
                Query.equal('email',[user.email])
            ])
            return existingUser?.users[0];
        }
    }
}