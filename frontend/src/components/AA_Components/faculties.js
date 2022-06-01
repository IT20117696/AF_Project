import React, { Component } from "react";
import StudentNavBar from '../Home_Component/StudentNavBar';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';



const ExpandMore = styled((props) => {
    
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function Faculties() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleClick() {
    console.log('in cardClick');
    window.location = "/creategroup"
} 
  

        return (
            <div className="bod">
            <StudentNavBar/><br/><br/>
            <div className="container">
            <Card sx={{ maxWidth: 345 }}
                    onClick={() => handleClick()}
                    style={{cursor : 'pointer'}}>
                <CardHeader     
                    title="Faculty Of Computing"
                    
                    align="center"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgY3nXnk0fr_OViC3ufYOOiAOGjEvFy2Gbw&usqp=CAU"
                    alt="Paella dish"
                />
            
            </Card>

            <Card sx={{ maxWidth: 345 }}
                    onClick={() => handleClick()}
                    style={{cursor : 'pointer'}}>
                <CardHeader     
                    title="Faculty Of Engineering"
                    
                    align="center"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgY3nXnk0fr_OViC3ufYOOiAOGjEvFy2Gbw&usqp=CAU"
                    alt="Paella dish"
                />
            
            </Card>

            <Card sx={{ maxWidth: 345 }}
                    onClick={() => handleClick()}
                    style={{cursor : 'pointer'}}>
                <CardHeader     
                    title="Faculty Of Humanities and Sciences"
                    
                    align="center"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgY3nXnk0fr_OViC3ufYOOiAOGjEvFy2Gbw&usqp=CAU"
                    alt="Paella dish"
                />
            
            </Card>

            <Card sx={{ maxWidth: 345 }}
                    onClick={() => handleClick()}
                    style={{cursor : 'pointer'}}>
                <CardHeader     
                    title="Faculty Of Business"
                    
                    align="center"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgY3nXnk0fr_OViC3ufYOOiAOGjEvFy2Gbw&usqp=CAU"
                    alt="Paella dish"
                />
            
            </Card>

            <Card sx={{ maxWidth: 345 }}
                    onClick={() => handleClick()}
                    style={{cursor : 'pointer'}}>
                <CardHeader     
                    title="School of Architecture"
                    
                    align="center"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgY3nXnk0fr_OViC3ufYOOiAOGjEvFy2Gbw&usqp=CAU"
                    alt="Paella dish"
                />
            
            </Card>


            </div>
            </div>
        );
    }
