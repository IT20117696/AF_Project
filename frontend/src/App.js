import React from 'react';



import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Profile from './components/AA_Components/student-profile';
import Faculties from './components/AA_Components/faculties';
import DisplayStudentgroups from './components/SS_Components/Display_studentgroups';
import Add_panel_member from './components/SS_Components/Add_panel_member'
import StaffLogin from './components/SS_Components/staff-login';
import StaffSignup from './components/SS_Components/staff-registration';
import Staff_Dashboard from './components/SS_Components/Staff_Dashboard';
import ResearchTopic from './components/SS_Components/ResearchTopic';
import Signup from './components/AA_Components/student-registration';
import StudentLogin from './components/AA_Components/student-login';
import BackendHomePage from './components/Layout/BackendHomePage'
import StaffProfile from './components/SS_Components/StaffProfile';
import Adminregistration from './components/RD_Components/adminregistration';
import AdminLogin from './components/RD_Components/adminlogin';
import Admindashboard from './components/RD_Components/admindashboard';
import AdminProfile from './components/RD_Components/adminProfile';
import AdminViewStaff from './components/SS_Components/AdminViewStaff';
import Createmarkingschemes from './components/RD_Components/createmarkingschemes';
import Homemarkingschemes from './components/RD_Components/homemarkingschemes';
import Editmarkingschemes from './components/RD_Components/editmarkingschemes';
import Markingschemesdetails from './components/RD_Components/markingschemesdetails';
import Usersremove from './components/RD_Components/usersremove';
import Supervisorremove from './components/RD_Components/supervisorremove';
import CoSupervisorremove from './components/RD_Components/cosupervisorremove';
import Studentsremove from './components/RD_Components/studentsremove';
import presantationpdfupload from './components/RD_Components/presantationpdfupload';
import Evaluate from './components/RD_Components/evaluate';
import Evaluateedit from './components/RD_Components/evaluateedit';
import GroupRegistration from './components/AA_Components/student-group-name-registration';
import Add_Group_Members from './components/AA_Components/group-members-reg';
import Groupss from './components/AA_Components/student.groups';
import HomePage from './components/AA_Components/homepage';
import PanelMembers from './components/SS_Components/PanelMembers';
import AddResearchTopic from './components/IS_Components/Add_research_topic';
import Display_researchtopics from './components/IS_Components/Display_researchtopics';
import AddSupervisors from './components/IS_Components/Add_supervisor';
import Display_supervisors from './components/IS_Components/Display_supervisors';
import AddCoSupervisors from './components/IS_Components/Add_co_supervisor';
import Display_co_supervisors from './components/IS_Components/Display_co_supervisors';
import DocUpload from './components/IS_Components/DocUpload';
import StudentDashboard from './components/SS_Components/StudentDashboard';
import StudentHomePage from './components/SS_Components/StudentHomePage';
import Groups from './components/SS_Components/Groups';
import PDFUpload from './components/SS_Components/PDFUpload';
import PDFDisplay from './components/SS_Components/PDFDisplay';
import SupervisorAcceptTopic from './components/SS_Components/SupervisorAcceptTopic';
import CoSupervisorAcceptTopic from './components/SS_Components/CoSupervisorAcceptTopic';
import AdminViewStaff from './components/SS_Components/AdminViewStaff';
import Chatdialog from './components/chat/Chatdialog';

export default class App extends Component {
 
  render() {
    return (
      
  <Router>
    <Switch>
{/* // function App() {
//   return (
//    <Router>
//    <Switch> */}
     <Route path = "/" component={StudentHomePage} exact/>
     <Route path = "/staff" component={BackendHomePage}/>
     <Route path = "/stafflogin" component={StaffLogin}/>
     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
     <Route path = "/staffprofile" component={StaffProfile}/>
     <Route path = "/panelmember" component={PanelMembers}/>
     <Route path = "/studentdashboard" component={StudentDashboard}/>
     <Route path = "/groups" component={Groups}/>
     <Route path = "/pdfupload" component={PDFUpload}/>
     <Route path = "/pdfdisplay" component={PDFDisplay}/> 
     <Route path = "/requestsupervisor" component={SupervisorAcceptTopic}/>
     <Route path = "/requestcosupervisor" component={CoSupervisorAcceptTopic}/>
     <Route path = "/displayStaffRole" component={AdminViewStaff}/>
  

    <Route path = "/signin" component={StudentLogin}/>
     <Route path = "/signup" component={Signup}/>
     <Route path = "/profile" component={Profile}/>
     <Route path = "/faculties" component={Faculties}/>
     <Route path= "/groupReg" component={GroupRegistration}/>
     <Route path= "/display/:id" component={Add_Group_Members}/>
     <Route path= "/groupss" component={Groupss}/>
     <Route path = "/homepage" component={HomePage}/>
     <Route path = "/adminsignup" component={Adminregistration}/> 
     <Route path = "/adminsignin" component={AdminLogin}/>  
     <Route path = "/admindashboard" component={Admindashboard}/>  
     <Route path = "/adminprofile" component={AdminProfile}/>  

     <Route path = "/homemarkingschemes" component={Homemarkingschemes}/> 
    <Route path = "/createmarkingadd" component={Createmarkingschemes}/>
    <Route path = "/createmarkingedit/:createmarkingID" component={Editmarkingschemes}/>
    <Route path = "/createmarking/:createmarkingID" component={Markingschemesdetails}/>
    <Route path = "/getpanelmember" component={Usersremove}/>
    <Route path = "/getsupervisor" component={Supervisorremove}/>
    <Route path = "/getcosupervisor" component={CoSupervisorremove}/>
    <Route path = "/getstudent" component={Studentsremove}/>
    <Route path = "/presantation" component={presantationpdfupload}/>
    <Route path = "/evaluate" component={Evaluate}/>
    <Route path = "/evaluateedit/:createmarkingID" component={Evaluateedit}/>
    <Route path = "/chatdialog" component={Chatdialog}/>





    {/* <Route path = "/createmarkingschemes" component={Createmarkingschemes}/>  */}

    <Route path = "/regtopic/research/:id" component={AddResearchTopic}/> 
    <Route path = "/regtopic/displayresearchtopic" component={Display_researchtopics}/> 
    <Route path = "/regtopic/addSupervisor/:id/:feild" component={AddSupervisors}/> 
    <Route path = "/regtopic/displaysupervisors" component={Display_supervisors}/>
    <Route path = "/regtopic/addcoSupervisor/:id/:feild" component={AddCoSupervisors}/> 
    <Route path = "/regtopic/displaycosupervisors" component={Display_co_supervisors}/> 
    <Route path = "/regtopic/getsupervisor/:feild" component={AddSupervisors}/> 
    <Route path = "/regtopic/getcosupervisor/:feild" component={AddCoSupervisors}/>
    <Route path = "/document/submitdoc" component={DocUpload}/> 
   

     
    
   
            </Switch>
        </Router>
    )
  }
}
