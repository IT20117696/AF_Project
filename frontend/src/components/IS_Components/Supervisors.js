import React, { Component } from 'react';
import axios from 'axios';


export default class Supervisors extends Component {
    constructor(props){
        super(props);
        this.state = {
            supervisors:[]
        };
    }  

 
async componentDidMount(){
  const feild = this.props.match.params.feild;
  
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

render() {
    return ( 
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
                 )
                }
              }