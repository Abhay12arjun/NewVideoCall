
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const router=useNavigate();
  return (
    
    <div className="LandingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>INTERNHIVE VIDEO CALL</h2>

        </div>
        <div className="navList">
          <p onClick={()=>{
            router("/hejf")
          }} >Join as Guest</p>
          <p onClick={()=>{
            router("/auth")
          }} >Register</p>

          <div onClick={()=>{
            router("/auth")

          }} role='button'>
            <p>
          Login</p></div>
          
          
          

        </div>
      </nav>
      <div className="LandingMainContainer">
        <div className="words">
          <h1><span><span style={{color:"green"}}>United</span> By Love</span>

          </h1>
          <h1>Loved Ones</h1>
          <p>Cover the distance of Internhive</p>
          <div style={{background:"yellow", height:"40px", width:"90px", borderRadius:"20px", border:"none"}} role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
          {/* <button  onClick={"/home"} style={{background:"yellow", height:"40px", width:"90px", borderRadius:"20px", border:"none"}}>Get Started</button> */}
           

        </div>
        <div  className="imagess">
          <img  src="videocall.webp" alt="" />

        </div>
       
      </div>


    </div>
    
    
  )
}