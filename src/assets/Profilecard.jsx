import react from "react";
import viteLogo from '/vite.svg'


  const Profilecard=({profile})=>{
    return(
        <div style={{
            border:"2px solid black",
            
            margin:"300px auto",
            width:"500px",
            height:"300px",
            fontSize:"20px",
            
            textAlign:"center",
            backgroundColor:"aqua",
            fontStyle:"italic"
        }}><div style={{
            paddingLeft:"450px"
        }}>
            <img 
            style={{
                
               
                
            }} src={viteLogo}/> </div>
          
            <div>
            <span>Name :</span>
            <span>{profile.name}</span> </div><br/>
            <div>
            <span>Role :</span>
            <span>{profile.role}</span> </div><br/>
            <div>
            <span>Mobile :</span>
            <span>{profile.mobile}</span> </div><br/>
            <div>
            <span>Address :</span>
            <span>{profile.address}</span> </div><br/>
            <div>
            <span><a href= "https://www.linkedin.com/feed/" target="_blank">LINKEDIN PROFILE</a></span>
           
            </div>
            
            


        </div>
    );
  };
  export default Profilecard;