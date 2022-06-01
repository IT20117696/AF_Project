import React, { Component } from 'react'
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';

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

const group = () => {
    window.location = `/groups`            
    }   
 
const groupreg = () => {
        window.location = `/groupReg`            
        }       

const downloadtemplate = () => {
        window.location = `/pdfdisplay`            
    }       
const chatgroups = () => {
        window.location = `/chatdialog`            
    }       
        
        
    
export default class StudentDashboard extends Component {
  render() {
    return (
      <div>
      <StudentNavBar/>    
       <div className="container" ><br/><br/><br/>
       <div class="row row-cols-1 row-cols-md-3 g-4" >
       <div class="col" style={{width: "19rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center" ><b>Research Groups</b></h5>
               </div>
               <img
                   src="https://media.istockphoto.com/vectors/target-audience-customer-client-targeting-consumer-centricity-aim-vector-id1017466322?k=20&m=1017466322&s=612x612&w=0&h=GgeoE45goA51nXLJghi7Ccd3KW-0KpRH99NZG_zx9e8="
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={group}/>
               </div>
           </div>
        
           <div class="col" style={{width: "18rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Register Research Topic</b></h5>
               </div>
               <img
                   src="https://st2.depositphotos.com/3665639/5195/v/950/depositphotos_51959425-stock-illustration-note-icon.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={regresearchtopic}/>
               </div>
           </div>     
           
           <div class="col" style={{width: "23rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b> Request Supervisor</b></h5>
               </div>
               <img
                   src="https://cdn3.f-cdn.com/contestentries/1440473/29529061/5bdcc38e60db7_thumb900.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={reqsupervisor}/>
               </div>
           </div>

           <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Request Co-Supervisor</b></h5>
               </div>
               <img
                   src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                   class="card-img-top"
                   height="280px"
                   alt="..."onClick={reqcosupervisor}/>
               </div>
           </div>


           <div class="col" style={{width: "19rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5"  align="center"><b>Submit Documents</b></h5>
               </div>
               <img
                   src="https://t3.ftcdn.net/jpg/04/27/12/82/360_F_427128203_pMzi4Wg7PQ5Bwl52lrhZb8vxXwCYX8eC.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..."onClick={submitdoc}/>
               </div>
           </div>


           <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>Register Student Groups</b></h5>
               </div>
               <img
                   src="https://www.seekpng.com/png/detail/128-1280557_png-file-svg-registered-icon.png"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={groupreg}/>
               </div>
              </div>

              <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>Chat App</b></h5>
               </div>
               <img
                   src="https://thumbs.dreamstime.com/b/print-148080743.jpg"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={chatgroups}/>
               </div>
              </div>

              <div class="col" style={{width: "20rem",color:"white"}} > 
               <div class="shadow h-60" id="cardcol1">
               <div class="card-body" style={{background: "#151B54"}} >
               <h5 class="card-title" id="dashh5" align="center"><b>Download Template</b></h5>
               </div>
               <img
                   src="https://icons-for-free.com/download-icon-download+file+page+paper+icon-1320165844661536600_512.png"
                   class="card-img-top"
                   height="280px"
                   alt="..." onClick={downloadtemplate}/>
               </div>
              </div>

            </div>
         </div><br/><br/>
       <Footer/>
    </div>
    )
  }
}
