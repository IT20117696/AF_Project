import React, { Component } from 'react'
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

const studentgroups = () => {

    window.location = `/groups`
    
    }
const regresearchtopic = () => {

    window.location = `/regtopic/displayresearchtopic`
    
    }

 const reqsupervisor = () => {

        window.location = `/regtopic/displaysupervisors`
        
        }
 const reqcosupervisor = () => {

        window.location = `/regtopic/displaycosupervisors`
            
        }
 const submitdoc = () => {

         window.location = `/document/submitdoc`
                
        }      

export default class StudentDashboard extends Component {
  render() {
    return (
      <div>
      <StudentNavBar/>    
       <div className="container" ><br/><br/><br/>
       <div class="row row-cols-1 row-cols-md-3 g-4" >
           <div class="col" style={{width: "25rem"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#F3E5AB"}} >
               <h5 class="card-title" id="dashh5" align="center" ><b> Register Student Groups</b></h5>
               </div>
               <img
                   src="https://www.sliit.lk/wp-content/uploads/2017/12/Business-Analytics.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={studentgroups}/>
               </div>
           </div>
        
           <div class="col" style={{width: "27rem"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#F3E5AB"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Register Research Topic</b></h5>
               </div>
               <img
                   src="https://static.sliit.lk/wp-content/uploads/2017/12/Marketing-Management.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={regresearchtopic}/>
               </div>
           </div>     
           
           <div class="col" style={{width: "30rem"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#F3E5AB"}}>
               <h5 class="card-title" id="dashh5"  align="center"><b> Request Supervisor</b></h5>
               </div>
               <img
                   src="http://www.sundaytimes.lk/201011/uploads/State-of-the-Art-Laboratories.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={reqsupervisor}/>
               </div>
           </div>

           <div class="col" style={{width: "25rem"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#F3E5AB"}}>
               <h5 class="card-title" id="dashh5"  align="center"><b>Request Co-Supervisor</b></h5>
               </div>
               <img
                   src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.edu.dailymirror.lk/uploads/articles_14_2fe4654f38.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..."onClick={reqcosupervisor}/>
               </div>
           </div>


           <div class="col" style={{width: "27rem"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body"  style={{background: "#F3E5AB"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Submit Documents</b></h5>
               </div>
               <img
                   src="https://ancedu.com/wp-content/uploads/2021/05/Foundation.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..."onClick={submitdoc}/>
               </div>
           </div>


           <div class="col" style={{width: "30rem"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body"  style={{background: "#F3E5AB"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>SLIIT International</b></h5>
               </div>
               <img
                   src="https://media.istockphoto.com/photos/in-the-library-pretty-female-student-with-books-picture-id528954725?k=20&m=528954725&s=612x612&w=0&h=Z9zdmw5E_KBrw5r-Wxy4r3PossWEyQp9x26f6R5w0Us="
                   class="card-img-top"
                   height="280px"
                   alt="..."/>
               </div>
              </div>
            </div>
         </div><br/><br/>
       <Footer/>
    </div>
    )
  }
}
