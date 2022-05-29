import React,{Component} from 'react' ;
import axios from "axios";
import {toast} from 'react-toastify';

export default class Add_Group_Members extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            groupMembers: []
          }
        }
      

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8070/student/display/${id}`)
        .then((res) => {
          this.setState({groupMembers: res.data.groupMembers})
        })
        .catch((err) => {
          alert(err.message)
        })
      
        console.log(this.state.groupMembers)
      }

      
    onSubmit = (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id; 
        const{student_id,name,email,phone} = this.state;
        const data = {
            student_id:student_id,
            name:name,
            email:email,
            phone:phone,
        }

        const config = {
            headers: {
              Authorization: localStorage.getItem("Authorization"),
            },
          };

        axios.post(`http://localhost:8070/student/groupReg/${id}`,data, config).then((res)=>{  
        if(res.data.success){
            this.setState({
                student_id:"",
                name:"",
                email:"" ,
                phone:"",
           }).then(()=>{
           toast.success('Added You To This Group Successfully',{position:toast.POSITION.TOP_CENTER})
           }
        )}    
    })
    .catch((e)=>{
    });
}
  
      render(){

        return(
            <table class="table">
                       <thead>
                     <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
             <th scope='col'>Student ID</th>
         <th scope='col'>name</th>
     <th scope='col'>Phone Number</th>
     <th scope='col'>Email</th>
         </tr>
            </thead>
            <tbody>
                {this.state.groupMembers.map((groupMembers,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{groupMembers.student_id}</td>
                        <td>{groupMembers.name}</td>
                        <td>{groupMembers.phone}</td>
                        <td>{groupMembers.email}</td>

                    </tr>
                ))}
                </tbody>
                <button
                 className='btn btn-warning'
                 type='add' 
                 style={{marginTop:'15px'}}
                 onClick={this.onSubmit}>
                <i className='fa fa-plus-circle'></i> &nbsp; ADD ME TO THIS GROUP
                 </button>
                </table>
                
        )
    }
}
