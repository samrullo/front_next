import getUsersUrl from "../../src/components/utils"

export default async function Users(req,res){
    const response=await fetch(getUsersUrl())
    const users_json=await response.json()
    
    console.log("about to send "+users_json+" as response")
    res.status(200).json(users_json)
}