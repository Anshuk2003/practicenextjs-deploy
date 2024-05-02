import getAllUsers from "../../../../libr/getAllUsers";
import getUser from "../../../../libr/getUser";
export default async function User({params}) {
    const userdata= getUser(params.userid);
    const user= await userdata
    console.log(params);
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
}

export async function  generateStaticParams(){
    const userData= getAllUsers();

    const users= await userData;
    return users.map(user=>{
        {
            userId : user.id.toString()
        }
    })
}