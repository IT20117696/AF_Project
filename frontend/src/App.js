import React from 'react';
import './App.css';

import Profile from './components/AA_Components/student-profile';
import MainHome from './components/AA_Components/mainhome';
import Faculties from './components/AA_Components/faculties';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
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
// import Createmarkingschemes from './components/RD_Components/createmarkingschemes';
import GroupRegistration from './components/AA_Components/student-group-name-registration';
import Add_Group_Members from './components/AA_Components/group-members-reg';
import Groupss from './components/AA_Components/student.groups';
// import Homemarkingschemes from './components/RD_Components/homemarkingschemes';
// import Editmarkingschemes from './components/RD_Components/editmarkingschemes';
// import Markingschemesdetails from './components/RD_Components/markingschemesdetails';
import HomePage from './components/AA_Components/homepage';
// import AdminViewStaff from './components/SS_Components/AdminViewStaff';
import PanelMembers from './components/SS_Components/PanelMembers';

import AddResearchTopic from './components/IS_Components/Add_research_topic';
import Display_researchtopics from './components/IS_Components/Display_researchtopics';
import AddSupervisors from './components/IS_Components/Add_supervisor';
import Display_supervisors from './components/IS_Components/Display_supervisors';
import AddCoSupervisors from './components/IS_Components/Add_co_supervisor';
import Display_co_supervisors from './components/IS_Components/Display_co_supervisors';
//import Supervisors from './components/IS_Components/Supervisors';
import DocUpload from './components/IS_Components/DocUpload';

import StudentDashboard from './components/SS_Components/StudentDashboard';
import StudentHomePage from './components/SS_Components/StudentHomePage';
import Groups from './components/SS_Components/Groups';
import PDFUpload from './components/SS_Components/PDFUpload';
import PDFDisplay from './components/SS_Components/PDFDisplay';
import SupervisorAcceptTopic from './components/SS_Components/SupervisorAcceptTopic';
import CoSupervisorAcceptTopic from './components/SS_Components/CoSupervisorAcceptTopic';

function App() {
  return (
   <BrowserRouter>
     <Switch>
    {/* <Route path = "/" component={BackendHomePage}exact/>
    
     <Switch> */}

     <Route path = "/" component={StudentHomePage} exact/>
   
     <div>  
     <Route path = "/staff" component={BackendHomePage}/>
     <Route path = "/stafflogin" component={StaffLogin}/>
     <Route path = "/staffsignup" component={StaffSignup}/>
     <Route path = "/staffdashboard" component={Staff_Dashboard}/>
     <Route path = "/group/displaystudentgroups" component ={DisplayStudentgroups} />  
     <Route path = "/studentgroups/:id" component={Add_panel_member}/>
     <Route path = "/topic/displayresearchtopic" component={ResearchTopic}/>
     <Route path = "/staff/staffprofile" component={StaffProfile}/>
 



   <Route path = "/signin" component={StudentLogin}/>
   <Route path = "/signup" component={Signup}/>
   <Route path = "/profile" component={Profile}/>
   <Route path = "/mainhome" component={MainHome}/>
   <Route path = "/faculties" component={Faculties}/>
   <Route path= "/groupReg" component={GroupRegistration}/>
   <Route path= "/display/:id" component={Add_Group_Members}/>
   <Route path= "/groups" component={Groupss}/>
   <Route path = "/homepage" component={HomePage}/>
     <Route path = "/staffprofile" component={StaffProfile}/>
     {/* <Route path = "/displayStaffRole" component={AdminViewStaff}/> */}
     <Route path = "/panelmember" component={PanelMembers}/>
     <Route path = "/studentdashboard" component={StudentDashboard}/>
     <Route path = "/groupss" component={Groups}/>
     <Route path = "/pdfupload" component={PDFUpload}/>
     <Route path = "/pdfdisplay" component={PDFDisplay}/>
     
     <Route path = "/requestsupervisor" component={SupervisorAcceptTopic}/>
     <Route path = "/requestcosupervisor" component={CoSupervisorAcceptTopic}/>

     <Route path = "/adminsignup" component={Adminregistration}/> 
     <Route path = "/adminsignin" component={AdminLogin}/>  
     <Route path = "/admindashboard" component={Admindashboard}/>  
     <Route path = "/adminprofile" component={AdminProfile}/>  





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
   
   </div>  
   </Switch> 
   </BrowserRouter>
  );
}

export default App;
