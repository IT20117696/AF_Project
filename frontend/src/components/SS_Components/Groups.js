import React, { Component } from 'react';
import axios from "axios";
import StudentNavBar from '../Home_Component/StudentNavBar';


export default class Groups extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }

//retrieve student group details  
componentDidMount(){
    this.retrieveStudentGroups();
}
 retrieveStudentGroups(){
     axios.get("http://localhost:8070/student/displaygroups").then(res=>{
         if(res.data.success){
             this.setState({
                 studentgroups:res.data.existingGroups
             });
         }
     })
 }

//search group using group name
filterData(studentgroups,searchKey){
    const result = studentgroups.filter((studentgroups)=>
    studentgroups.group_name.toLowerCase().includes(searchKey) 

    )
    this.setState({studentgroups:result})
  }
  handleSearchArea = (e)=>{
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/student/displaygroups").then(res=>{
        if(res.data.success){
        this.filterData(res.data.existingGroups,searchKey)
      }
    });
  }
  

  render() {
    return (
      <div>
          <StudentNavBar/><br/><br/> <br/>
              <h3 align="center" style={{fontSize:'35px',fontFamily:"Times New Roman"}}><b><u>Student Group Details</u></b></h3><br/><br/>
                 <div className='container'>  
                 <div className="col-md-3" >
                 <input type="text" className="form-control" style={{marginBottom:'2px'}} placeholder="Search Group Name" onChange={this.handleSearchArea}/>
                    <br/> </div>
                     <table class="table" >
                        <thead>
                        <tr bgcolor="#79BAEC">
                     <th scope='col'>No</th>
                  <th scope='col'>Group Name</th>
              <th scope='col'>Research Feild</th>
           <th scope='col'>Research Topic</th>
              <th scope='col'>Status</th>
                  </tr>
                    </thead>
                      <tbody>
                          {this.state.studentgroups.map((studentgroups,index) =>(
                              <tr>
                                <th scope='row'>{index + 1}</th>
                             <td>{studentgroups.group_name}</td>
                         <td>{studentgroups.researchField}</td>
                     <td>{studentgroups.researchTopic}</td>
                 <td>{studentgroups.topicstatus}</td>
                     </tr>
                        ))}
                          </tbody>
                             </table>
                                </div>     
        
      </div>
    )
  }
}
