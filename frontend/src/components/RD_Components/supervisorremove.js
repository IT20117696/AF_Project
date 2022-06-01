import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Layout/footer';
import BackendHomeNavBar from '../Layout/BackendHomeNavBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Supervisorremove extends Component {
    constructor(props){
        super(props);
        this.state = {
            supervisorremove:[]
        };
    }  

    //retrive supervisor members 
componentDidMount(){
    this.retrievesupervisorDetails();
} 

retrievesupervisorDetails(){
    axios.get("http://localhost:8070/usersremove/getsupervisor").then(res=>{
        if(res.data.status){
            this.setState({
                supervisorremove:res.data.supervisor
     });
    }
  })
 }

//delete supervisor
onDelete = (supervisorID) => {


    if (window.confirm('Are you sure you wish to delete this details?')) {
      axios.delete(`http://localhost:8070/usersremove/supervisordelete/${supervisorID}`).then((res) => {
        toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });
  
        //alert("Delete Successfully")
        this.retrievesupervisorDetails();
  
      })
    }
  }
  

 render() {
    return ( 
                        <div>
                          <BackendHomeNavBar/>
                     <br/><br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
              <b><u>All Supervisor Details </u></b></h3><br/>
           <div className='container'>  
       <table className = "table table-hover">
          <thead>
             <tr bgcolor="#79BAEC">
                <th scope='col'>No</th>
                   <th scope='col'>Staff Member Name</th>
                       <th scope='col'>Faculty</th>
                         <th scope='col'>Feild</th>
                           <th scope='col'>Staff ID</th>
                         <th scope='col'>Role</th>
                     <th scope='col'>Email</th>
                 </tr>
             </thead>
               <tbody>
                   {this.state.supervisorremove.map((supervisorremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{supervisorremove.name}</td>
                               <td>{supervisorremove.faculty}</td>
                                 <td>{supervisorremove.feild}</td>
                            <td>{supervisorremove.staff_id}</td>
                        <td>{supervisorremove.role}</td>
                   <td>{supervisorremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(supervisorremove._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>   
                     </td>              
                </tr>
                  )
                    )}
                      </tbody>     
                         </table>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <Footer/>
                              </div>
    )
  }
}
