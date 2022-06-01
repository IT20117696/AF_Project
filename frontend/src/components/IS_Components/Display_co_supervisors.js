import axios from "axios";
import React,{Component} from 'react' ;
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';
 
export default class Display_co_supervisors extends Component{
   constructor(props){
       super(props);
       this.state = {
        studentgroups:[]
       };
   }
   onReadirect(id,feild){
       window.location.href = `/regtopic/addcoSupervisor/${id}/${feild}`
   }
   componentDidMount(){
      this.retrieveResearchTopics();
  }
   retrieveResearchTopics(){
       axios.get("http://localhost:8070/regtopic/displaycosupervisors").then(res=>{
           console.log (res.data)
           if(res.data.success){
               this.setState({
                studentgroups:res.data.existingstdgroups
               });
               console.log(this.state.studentgroups)
           }
       })
   }
 
   render(){
       return(   
           <div>
              <StudentNavBar/>  <br/><br/> <br/>
               <h3 align="center" style={{fontSize:'35px',fontFamily:"Times New Roman"}}><b><u>Add Co-Supervisor </u></b></h3><br/><br/>
                 <div className='container'> 
                   <table class="table">
                      <thead>
                         <tr bgcolor="#79BAEC">
                       <th scope='col'>No</th>
                    <th scope='col'>Group Name</th>
                 <th scope='col'>Research Topic</th>
              <th scope='col'>Research Field</th>
           <th scope='col'>Supervisor</th>
        <th scope='col'>Co-Supervisor</th>
     <th scope='col'>Status</th>
   <th scope='col'>Actions</th>
        </tr>
           </thead>
               <tbody>
                  {this.state.studentgroups.map((studentgroups,index) =>(
                      <tr>
                      
                      <th scope='row'>{index + 1}</th>
                            <td>{studentgroups.group_name}</td>
                          <td>{studentgroups.researchTopic}</td>
                          <td>{studentgroups.researchField}</td>
                          <td>{studentgroups.grpSupervisor}</td>
                          <td>{studentgroups.grpcoSupervisor}</td>
                          <td>{studentgroups.cosupervisortopicstatus}</td>
                       <td>                      
                            <IconButton aria-label='btn btn-success' size="small"
                               style={{background: "#FBB917"}}
                                  onClick={()=>this.onReadirect(studentgroups._id,studentgroups.researchField)} >
                                     <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                                        </IconButton>
                                   </td>
                                </tr>
                              ))}
                             </tbody>
                          </table>
                       </div> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                   <Footer/>  
               </div> 
                )}
               }