import React,{Component} from 'react' ;
import axios from "axios";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AdminNavBar from '../Layout/AdminNavBar';

export default class Groupss extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentgroups:[]
        };
    }
    onReadirect(id){
        window.location.href = `/display/${id}`
    }
    GroupCreate(){
        window.location.href = `/groupReg`
    }
    componentDidMount(){
       this.retrieveStudentGroups();
   }
    retrieveStudentGroups(){
        axios.get("http://localhost:8070/student/displaygroups").then(res=>{
            if(res.data.success){
                this.setState({
                    studentgroups:res.data.existingGroups
                });
                console.log(this.state.studentgroups)
            }
        })
    }
    render(){
        return(    
            <div>
                  <div className='container'>  
                    <table class="table">
                       <thead>
                     <tr bgcolor="#79BAEC">
                 <th scope='col'>No</th>
             <th scope='col'>Group Name</th>
         </tr>
            </thead>

                <tbody>
                {this.state.studentgroups.map((studentgroups,index) =>(
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{studentgroups.group_name}</td>
                        <td>
                        
                             <IconButton aria-label='btn btn-success' size="small"
                             style={{background: "#FBB917"}}
                                onClick={()=>this.onReadirect(studentgroups._id)} >
                             <AddCircleOutlineIcon  fontSize="small" style={{color: "black"}}/>
                             </IconButton> 
                             &nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                ))}
                </tbody>
                <button
                 className='btn btn-warning'
                 type='add' 
                 style={{marginTop:'15px'}}
                 onClick={()=>this.GroupCreate()}>
                <i className='fa fa-plus-circle'></i> &nbsp; Add New Group
                 </button>
            </table>
        </div>     
        </div> 
        )}
}