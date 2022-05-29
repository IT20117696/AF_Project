import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';



import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default class Homemarkingschemes extends Component {
    constructor(props){
    super(props);

    this.state={
      createmarking:[]
    };
 }

componentDidMount(){
    this.retrievecreatemarking();
}

//data retrive
 retrievecreatemarking(){
        axios.get("http://localhost:8070/createmarking/displaycreatemarking").then(res=>{
            if(res.data.success){
               this.setState({
                createmarking:res.data.existingCreatemarking
               });

               console.log(this.state.createmarking)
            }
        
    });
}

//delete data
onDelete = (createmarkingID) => {


  if (window.confirm('Are you sure you wish to delete this details?')) {
    axios.delete(`http://localhost:8070/createmarking/delete/${createmarkingID}`).then((res) => {
      toast.warning('Details Deleted Successfully', { position: toast.POSITION.TOP_CENTER });

      //alert("Delete Successfully")
      this.retrievecreatemarking();

    })
  }
}
filterData(createmarking,searchKey) {

  const result = createmarking.filter((createmarkin) =>
    createmarkin.deliverables.toLowerCase().includes(searchKey) ||
    createmarkin.duedate.toLowerCase().includes(searchKey) ||
    createmarkin.contribution.toLowerCase().includes(searchKey) ||
    createmarkin.methodofsubmission.toLowerCase().includes(searchKey) ||
    createmarkin.marksallocation.toLowerCase().includes(searchKey)
  )
  this.setState({createmarking: result })
}

handleSearchArea = (e) => {

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8070/createmarking/displaycreatemarking").then(res => {
    if (res.data.success) {

      this.filterData(res.data.existingCreatemarking, searchKey)

    }

  });
}


render() {
    return (
      
      <div className="pt-3" align="center" background color="red" >
        <div className=" shadow mb-8 w-100" id="cardcol">
          <div className="card-header py-3" >
            <h1 align="center"><b>&nbsp;&nbsp;&nbsp;Creat Marking Schemes</b></h1><br />

            <div className="card-body" >
              <div className="col-md-8 mt-4 mx-auto"></div>

              <div className="col-lg-3 mt-2 mb-2">
                <input className="form-control" type="search"
                  placeholder="Serach" name="searchQuery" startIcon={< SearchSharpIcon />} onChange={this.handleSearchArea}>
                </input>


              </div>
              <div align="right">

                <form onSubmit={this.handleSearchArea}>
                
                <Button className="form-group" style={{ background: "#737CA1", width: 15 + "%", align: "left" }} startIcon={<KeyboardArrowDownRoundedIcon />} >
                Destination</Button>&nbsp;&nbsp;&nbsp;
</form>
        <table className="table table-hover" style={{ marginTop: '40px', background: "#FFFFFF" }} > 
        <thead>
            <tr>
               <th scope ="col"> Criteria </th>
               <th scope ="col"> Good (10-8) </th>
               <th scope ="col"> Avarage (4-7) </th>
               <th scope ="col"> Poor (0-3) </th>
               <th scope ="col"> Comment </th>
            </tr>
        </thead>
        <tbody>
          {this.state.createmarking.map((createmarking,index) => (
             <tr>
          <th scope="row">{index+1}</th>
          <td>
            
            <a href={`/createmarking/${createmarking._id}`} style={{textDecoration:'none'}}>
            {createmarking.deliverables}
            </a>
            </td>
           
          <td>{createmarking.duedate}</td>
          <td>{createmarking.contribution}</td>
          <td>{createmarking.methodofsubmission}</td>
          <td>{createmarking.marksallocation}</td>
          <td> 
            <a className="btn btn-warning" href={`/createmarkingedit/${createmarking._id}`}>
              <i classname="fas fa-edit"></i>&nbsp;Edit
            </a>
            &nbsp;
            <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(createmarking._id)}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
              </td>
                 </tr>

          ))}
        </tbody>
        </table>
        <button className="btn btn-success"><a href="/createmarkingadd" style={{textDecoration:'none',color:'white'}}> Create New Point</a></button>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
    
  }
}
