import React,{useState} from "react";
import axios from "axios";

export default function GroupRegistration(){

    const [group_name, setgroupname] = useState("");
    // const [student_id, setstudent_id] = useState("");
    // const [name, setname] = useState("");
    // const [email, setemail] = useState("");
    // const [phone, setphone] = useState("");



    const sendData = async (e) => {
        e.preventDefault();
        
        let new_group = {
            group_name: group_name,
            // student_id: student_id,
            // name: name,
            // email: email,
            // phone: phone
        }


        axios.post("http://localhost:8070/student/groupReg",new_group)
        .then(()=>{

            alert("Registration Success")
            window.location = "/groups"

        }).catch((err)=>{
            alert(err)
        })


        setgroupname("");
      
    }


    return(
      <div class="body">
        <div class="container">

        <form action="" method="post" name="form" onSubmit={sendData}> 

                        <div class="col-xl-6">
                          <div class="card-body p-md-5 text-black">
                            <h2 class="mb-5 text-uppercase">Student group registration form</h2>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example8">Group Name</label>
                            <input type="text"  id="form3Example8" class="form-control form-control-lg" style={{fontSize:"1rem"}} onChange={(e) => setgroupname(e.target.value)} required/>
                            </div>
                            <div class="d-flex justify-content-end pt-3">
                              <button type="submit" class="btn btn-warning btn-lg ms-2">Submit</button>
                            </div>
                              
                            
      </div>
      </div>
      </form>  
      </div>
      </div>  

    )

}
