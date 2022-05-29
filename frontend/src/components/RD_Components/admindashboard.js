import React, { Component } from 'react'
import Faculties from '../AA_Components/faculties';
import AdminNavBar from '../Layout/AdminNavBar';
import Footer from '../Layout/footer';


const supervisorList = () => {
  window.location = `/supervisorList`
}

const cosupervisorList = () => {
  window.location = `/cosupervisorList`
}
const panelMemberList = () => {
  window.location = `/panelMemberList`
}
const studentList = () => {
  window.location = `/studentList`
}
const createmarkingschemes = () => {
  window.location = `/createmarkingschemes`
}
const studentgroups = () => {
  window.location = `/group/displaystudentgroups`
}
const uploadFile = () => {
  window.location = `/pdfupload`
}
const faculties = () => {
  window.location = `/faculties`
}


export default class admindashboard extends Component {
  render() {
    return (
      <div>
        <AdminNavBar/>
        <div className="container" ><br/><br/><br/><br/>
                <div class="row row-cols-1 row-cols-md-3 g-4" >
                    <div class="col" style={{width: "20rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#151B54"}} >
                        <h5 class="card-title" id="dashh5" align="center"><b style={{color: "#ffff"}} > Supervisor List</b></h5>
                        </div>
                        <img
                            src="https://www.logolynx.com/images/logolynx/6d/6dd2590f601662482dc53a312ab54e64.png"
                            class="card-img-top"
                            height="280px"
                            alt="..." onClick={supervisorList}/>
                        </div>
                    </div>
                 
                
                    <div class="col" style={{width: "19rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#151B54"}} >
                        <h5 class="card-title" id="dashh5" align="center"><b style={{color: "#ffff"}} > Co-Supervisor List</b></h5>
                        </div>
                        <img
                            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
                            class="card-img-top"
                            height="280px"
                            alt="..." onClick={cosupervisorList}/>
                        </div>
                    </div> 
                    
                    <div class="col" style={{width: "20rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#151B54"}}>
                        <h5 class="card-title" id="dashh5"  align="center"><b style={{color: "#ffff"}} > Panel Member List</b></h5>
                        </div>
                        <img
                            src="https://www.enterprisedaddy.com/wp-content/uploads/2014/12/user_accounts.png"
                            class="card-img-top"
                            height="280px"
                            alt="..." onClick={panelMemberList}/>
                        </div>
                    </div>

                    <div class="col" style={{width: "20rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#151B54"}}>
                        <h5 class="card-title" id="dashh5"  align="center"><b style={{color: "#ffff"}} > Student List</b></h5>
                        </div>
                        <img
                            src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/user_edit.png"
                            class="card-img-top"
                            height="280px"
                            alt="..." onClick={studentList} />
                        </div>
                    </div>
                   
                    <div class="col" style={{width: "20rem"}}> 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#151B54"}} >
                        <h5 class="card-title" id="dashh5" align="center"><b b style={{color: "#ffff"}}>Marking Schemes</b></h5>
                        </div>
                        <img
                            src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-pdf-file-document-icon-png-image_927685.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..." onClick={createmarkingschemes} />
                        </div>
                    </div>


                    <div class="col" style={{width: "19rem"}}> 
                        <div class="shadow h-60" id="cardcol1" >
                        <div class="card-body" style={{background: "#151B54"}} >
                        <h5 class="card-title" id="dashh5" align="center"><b b style={{color: "#ffff"}}>Student Grops</b></h5>
                        </div>
                        <img
                            src="https://ldtschool.in/images/contacts.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..."  onClick={studentgroups}/>
                        </div>
                    </div>


                    <div class="col" style={{width: "20rem"}} > 
                        <div class="shadow h-60" id="cardcol1">
                        <div class="card-body" style={{background: "#151B54"}}>
                        <h5 class="card-title" id="dashh5"  align="center"><b style={{color: "#ffff"}} > Upload File</b></h5>
                        </div>
                        <img
                            src="https://thumbs.dreamstime.com/b/file-upload-icon-219805756.jpg"
                            class="card-img-top"
                            height="280px"
                            alt="..." onClick={uploadFile}/>
                        </div>
                       </div>

                       <div class="col" style={{width: "20rem"}} > 
                           <div class="shadow h-60" id="cardcol1">
                           <div class="card-body" style={{background: "#151B54"}}>
                           <h5 class="card-title" id="dashh5"  align="center"><b style={{color: "#ffff"}} >Faculties</b></h5>
                           </div>
                           <img
                              src="https://mycourse.lk/UploadedFiles/SLIIT.png"
                              class="card-img-top"
                              height="280px"
                              alt="..." onClick={faculties}/>
                        </div>
                       </div>

                     </div>
                  </div><br/><br/><br/>
                  <Footer/>
      </div>
    )
  }
}
