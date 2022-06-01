import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PDFDisplay = () => {
    const [pdfupload, setpdfupload] = useState([{
           pdfupload:""
    }]);

    useEffect(() => {
        function getpdf(){
          axios.get("http://localhost:8070/assignment/pdfdisplay")   
            .then((res) => {
            setpdfupload(res.data)
            }).catch((error) => {
              console.log(error.message)
         })              
    }
        getpdf()
    },[])
    
  return (
    <div>
        {pdfupload.map(( pdf) => (
          <a href={pdf.pdfupload} download>
            <button>
               Download
                  </button>
                     </a>
        ) )}
    </div>
  )
}
export default PDFDisplay;