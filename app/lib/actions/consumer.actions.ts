// import { users } from "@lib/appwrite.config"

// export const createConsumer = async (user: CreateUserParms)=>{
//     try{
//         const newUser= await users.create(ID.unique(),user.email, user.phone, undefined, user.name)
//     }catch (error){
//         if(error && error?.code===409) {
//             const existingUser = await users.list)[
//                 Query.equal('email',[user.email])
//             ])
//             return documents?.users[0];
//         }
//     }
// }