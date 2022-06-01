import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Layout/footer';
import BackendHomeNavBar from '../Layout/BackendHomeNavBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Usersremove extends Component {
    constructor(props){
        super(props);
        this.state = {
          usersremove:[]
        };
    }  
//retrive all panel members 
componentDidMount(){
    this.retrievepanelmemberDetails();
} 

retrievepanelmemberDetails(){
    axios.get("http://localhost:8070/usersremove/getpanelmember").then(res=>{
        if(res.data.status){
            this.setState({
              usersremove:res.data.panelmember
     });
    }
  })
 }

//delete panelmember
onDelete = (panelmemberID) => {


  if (window.confirm('Are you sure you wish to delete this details?')) {
    axios.delete(`http://localhost:8070/usersremove/panelmemberdelete/${panelmemberID}`).then((res) => {
      toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });

      //alert("Delete Successfully")
      this.retrievepanelmemberDetails();

    })
  }
}


render() {
    return ( 
                        <div>
                          <BackendHomeNavBar/>
                     <br/><br/>
                  <h3 align="center" style={{fontSize:'30px',fontFamily:"Times New Roman"}}>
              <b><u>All Panel Member Details </u></b></h3><br/>
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
                   {this.state.usersremove.map((usersremove,index)=>(
                      <tr key={index}>    
                         <th scope='row'>{index + 1}</th>
                            <td>{usersremove.name}</td>
                               <td>{usersremove.faculty}</td>
                                 <td>{usersremove.feild}</td>
                            <td>{usersremove.staff_id}</td>
                        <td>{usersremove.role}</td>
                   <td>{usersremove.email}</td>
                   <td>
                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(usersremove._id)}>
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










































