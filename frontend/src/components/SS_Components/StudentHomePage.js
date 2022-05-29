import React, { Component } from 'react';
import StudentNavBar from '../Layout/StudentNavBar';
import Footer from '../Layout/footer';

export default class StudentHomePage extends Component {
  render() {
    return (
   <div>
   <StudentNavBar/><br/><br/><br/>
   <div style={{ backgroundColor:"black" ,height:"500px"}} >

   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06050102/SLIIT-BSc-Engineering-Hons-in-Electrical-Electronic-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/13103724/BBA-Hons-Specialising-in-Marketing-Management.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://www.sliit.lk/wp-content/uploads/2018/03/sliit-convercation-1.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item active">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06040527/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Software-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2022/03/31081852/SLIIT-Nursing-intake-20221.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2022/03/31054515/SLIIT-law-intake-2022.jpg" class="d-block w-100" alt="..."></img>
  </div>


  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06050827/SLIIT-BSc-Engineering-Hons-in-Materials-Engineering.jpg" class="d-block w-100" alt="..."></img>
  </div>

  <div class="carousel-item">
    <img src="https://static.sliit.lk/wp-content/uploads/2020/01/06040550/SLIIT-BSc-Hons-in-Information-Technology-Specializing-in-Cyber-Security.jpg" class="d-block w-100" alt="..."></img>
  </div>

</div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
   </button>
</div> 
       
        </div><br/><br/><br/>
                <Footer/>
      </div>
    )
  }
}
