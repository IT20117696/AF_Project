import React, { Component } from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


export default class Editmarkingschemes extends Component {

  constructor(props){
    super(props);
    this.state={
      deliverables:"",
      duedate:"",
      contribution:"",
      methodofsubmission:"",
      marksallocation:""

    }
}

handleInputChange = (e) =>{
  const{name,value} = e.target;

  this.setState({
     ...this.state,
     [name]:value

  })
}

onSubmit = (e) =>{


  e.preventDefault();
  const createmarkingID = this.props.match.params.createmarkingID;

  const {deliverables,duedate,contribution,methodofsubmission,marksallocation} = this.state;
  const data ={
         deliverables:deliverables,
         duedate:duedate,
         contribution:contribution,
         methodofsubmission:methodofsubmission,
         marksallocation:marksallocation
 
  }

  console.log(data)

  axios.put(`http://localhost:8070/createmarking/update/${createmarkingID}`,data).then((res) =>{
  if(res.data.success){
    if (window.confirm('Are you sure you wish to update this details?')) {
    toast.success('Marking Scheme Updated Successfully',{position:toast.POSITION.TOP_CENTER});
    window.setTimeout(function() {
      window.location.href = '/homemarkingschemes';
    }, 2000);

    this.setState(
   
      {
        deliverables:"",
        duedate:"",
        contribution:"",
        methodofsubmission:"",
        marksallocation:""
          }
         )
       }
     }
   }
  )
}

componentDidMount(){
  const createmarkingID = this.props.match.params.createmarkingID;

  axios.get(`http://localhost:8070/createmarking/${createmarkingID }`).then((res)=>{
  if (res.data.success){
  this.setState({
    deliverables:res.data.createmarking.deliverables,
    duedate:res.data.createmarking.duedate,
    contribution: res.data.createmarking.contribution,
    methodofsubmission:res.data.createmarking.methodofsubmission,
    marksallocation:res.data.createmarking.marksallocation
  });
  console.log(this.state.createmarking);
}
});

}

  render() {
    return (
      <div>
      <div className="pt-3" align="center" >
       <div className="card shadow mb-8 w-50">
         <div className="card-header py-3">
        <h1 className="m-0 font-weight-bold text-dark" id="randy">Update Marking Schemes</h1><br/>
        </div>
         <div className="card-body">
         <div className = "col-md-8 mt-4 mx-auto">
        <form className="needs-validation" noValidate>

        <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Deliverables</label>
              <input type="text" className="form-control" name="deliverables" placeholder="Enter Details" value={this.state.deliverables}
              onChange={this.handleInputChange}/>
           </div>

           <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Due Date</label>
              <input type="number" className="form-control" name="duedate" placeholder="Enter Details" value={this.state.duedate}
              onChange={this.handleInputChange} />
           </div>



           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contribution</label>
              <input type="date" className="form-control" name="contribution" placeholder="Enter Details" value={this.state.contribution}
             onChange={this.handleInputChange}/>
           </div>

           
           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Method Of Submission</label>
              <input type="text" className="form-control" name="methodofsubmission" placeholder="Enter Details" value={this.state.methodofsubmission}
             onChange={this.handleInputChange}/>
           </div>

          
           <div className ="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Marks Allocation</label>
              <input type="text" className="form-control" name="marksallocation" placeholder="Enter Details" value={this.state.marksallocation}
             onChange={this.handleInputChange}/>
           </div>
<div>
      <Button className="form-group" type="submit"style={{background: "#F75D59", width: 100+"%"}} startIcon={< CheckCircleSharpIcon/>}  onClick={this.onSubmit}> 
      Update Delivery</Button>   
  </div>

         
        </form>          
        </div>
     </div>
     </div>
     </div>
     </div>
     

    )

}

}