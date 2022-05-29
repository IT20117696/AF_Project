import React,{Component} from 'react' ;
import axios from "axios";
import AdminNavBar from '../Layout/AdminNavBar';
 
export default class Add_research_topic extends Component{
   constructor(props){  
       super(props);
       this.state={
           group_name:"",
           researchTopic:"",
           researchField:"",
       }
    }
 
  async componentDidMount(){
       const id = this.props.match.params.id;
       await axios.get(`http://localhost:8070/student/display/${id}`).then((res)=>{
 
       if(res.data.success){
               this.setState({
                   groupName:res.data.studentgroups.group_name
              })
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
       const{group_name,researchTopic,researchField} = this.state;
       const data = {
           group_name:group_name,
           researchTopic:researchTopic,
           researchField:researchField,
       }
 
       axios.post(`http://localhost:8070/regtopic/research/${id}`,data).then((res)=>{ 
       if(res.data.success){
           this.setState({
               group_name:"",
               researchTopic:"" ,
               researchField:"" ,
          })
          alert("Research Topic and Field added");
          window.location.href="/regtopic/displayresearchtopic"
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
           <h1 className='h3 mb-3 font-weight-normal'>ADD RESEARCH TOPIC AND FIELD TO STUDENT GROUP</h1>
             <form className='needs-validation' noValidate>
                 <div className='form-group' style={{marginBottom:'10px'}}>
                    <label style={{marginBottom:'5px'}}>Research Topic</label>
                      <input
                         type="text"
                           className='form-control'
                              name='researchTopic'
                                placeholder='Enter Research Topic'
                                    value={this.state.researchTopic}
                              onChange={this.handleInputChange}>
                          </input>
                    <label style={{marginBottom:'5px'}}>Research Field</label>
                      <input
                         type="text"
                           className='form-control'
                              name='researchField'
                                placeholder='Enter Research Field'
                                    value={this.state.researchField}
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
                          </div>
       )
   }
}