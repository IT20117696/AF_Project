import React,{Component} from 'react' ;
import axios from "axios";
import AdminNavBar from '../Layout/AdminNavBar';
//import Supervisors from '../IS_Components/Supervisors';

export default class Add_supervisor extends Component{
   constructor(props){  
       super(props);
       this.state={
           group_name:"",
           researchTopic:"",
           researchField:"",
           grpSupervisor:"",
           supervisors:[]
       }
    }
 
  async componentDidMount(){
    const feild = this.props.match.params.feild
   // console.log(feild)
    const id = this.props.match.params.id
    //console.log(id)
      
       await axios.get(`http://localhost:8070/regtopic/getsupervisor/${feild}`).then((res)=>{
      
       if(res.data.success){
               this.setState({
                supervisors:res.data.staff
              })
              console.log (this.state.supervisors)
         }
       })
    }
   handleInputChange = (e)=>{
       const{name,value} = e.target;
       this.setState({
          ...this.state,
          [name]:value
       })
    }
 
   onSubmit = (e)=>{
       e.preventDefault();
       const id = this.props.match.params.id;
       const{group_name,researchTopic,researchField,grpSupervisor} = this.state;
       const data = {
           group_name:group_name,
           researchTopic:researchTopic,
           researchField:researchField,
           grpSupervisor:grpSupervisor,
       }
 
       axios.post(`http://localhost:8070/regtopic/addSupervisor/${id}`,data).then((res)=>{ 
       if(res.data.success){
           this.setState({
               group_name:"",
               researchTopic:"" ,
               researchField:"" ,
               grpSupervisor:"",
          })
          alert("Supervisor added");
          window.location.href="/regtopic/displaysupervisors"
     }   
   })
   .catch((e)=>{
   });
}
 render(){
return(
<div>
<AdminNavBar/>
  <br/><br/>   
       <div className='col-md-8 mt-4 mx-auto'>
           <h1 className='h3 mb-3 font-weight-normal'>ADD SUPERVISOR TO STUDENT GROUP</h1>
             <form className='needs-validation' noValidate>
                 <div className='form-group' style={{marginBottom:'10px'}}>
                    <label style={{marginBottom:'5px'}}>Supervisor</label>
                      <input
                         type="text"
                           className='form-control'
                              name='grpSupervisor'
                                placeholder='Enter Supervisor Name'
                                    value={this.state.grpSupervisor}
                              onChange={this.handleInputChange}>
                          </input>
                      </div>
                 <button
             className='btn btn-warning'
         type='add'
      tyle={{marginTop:'15px'}}
          onClick={this.onSubmit}>
             <i className='fa fa-plus-circle'></i> &nbsp; ADD
                </button>
                   </form>   
                       </div>
                       <div>
              <br/><br/>
               <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
            <b><u> Supervisors </u></b></h3><br/>
           <div className='container'>  
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff ID</th>
                       <th scope='col'>Role</th>
                         <th scope='col'>Name</th>
                           <th scope='col'>Research Feild</th>
                         </tr>
                    </thead>
                    <tbody>
                        {this.state.supervisors.map((supervisors,index)=>(
                            <tr key={index}>    
                                <th scope='row'>{index + 1}</th>
                                <td>{supervisors.staff_id}</td>
                                    <td>{supervisors.role}</td>
                                        <td>{supervisors.name}</td>
                                    <td>{supervisors.feild}</td>
                                    </tr>
                                    )
                                  )}
                           </tbody>     
                       </table>
                    </div>
                 </div>
                            </div>
       )
   }
}