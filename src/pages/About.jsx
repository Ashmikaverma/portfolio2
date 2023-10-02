import React from 'react'
import './About.css'

const About=()=>{
    return(
        <div>
        <h1 className="heading"><b>ABOUT ME</b></h1>
        <div className="skills">
       <h1><b>SKILLS</b></h1>
       <div id="code">
       <div id="boxone">
        <br></br>
      
       
       
        <div className="codeimage">
            
            <br></br>
         <img className="left" src="https://imgs.search.brave.com/nPiz09H5f7bMgAfbAcDSBzHW-DZfHAk-XXRjVPMV-h0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2FicmFo/YW1jYWxmL3Byb2dy/YW1taW5nLWxhbmd1/YWdlcy1sb2dvcy9y/YXcvbWFzdGVyL3Ny/Yy9wcm9ncmFtbWlu/Zy1sYW5ndWFnZXMu/cG5n" height="100px" width="300px"/>
         
         </div>
         <br></br>
         <br></br>
         </div>
         <p className="codepara"><h2><span>Programming</span></h2><br></br>Passionate and dedicated learner of C++, Python, and JavaScript. Eager to apply programming skills to solve real-world problems and create innovative software solutions.</p>
         </div >
   <br></br>
    <div className="webd">
    
    <div className="boxtwo">
          <img className="right" src="https://imgs.search.brave.com/hzcQOahPXDx7Zou6jHp9msQg8ZBtMpvhW5wbri1rAbg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zOTEt/MzkxNzgxM19odG1s/LWNzcy1pY29uLWh0/bWwtY3NzLWxvZ28t/cG5nLXRyYW5zcGFy/ZW50LnBuZw" height="200px" width="200px" />
          
        </div>
        
            <br></br><br></br>
            <p className="codepara"><h2><span>Web Development</span></h2><br></br>I'm an aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about crafting user-friendly, visually appealing websites. I've already completed several projects, where I put my skills to the test. I'm continually learning and excited to take on new challenges in the ever-evolving world of web development</p>
          
        </div>
        <br></br>
   <div className="bc">
    <div className="boxthree">
    <img src="https://imgs.search.brave.com/dzKYLlaRrhg0B_LviRZlo7Zcv4NemZymz7QRLUVAN1c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzI4LzkyLzEw/LzM2MF9GXzQyODky/MTAzMV8wMDY1dW5u/Mnh0WFpqdmZZY1oz/UTk5ZVdvTmlZWnRP/UC5qcGc" height="200px" width="200px"/>
    </div>
    <p className="codepara"><h2><span>Blockchain</span></h2><br></br>Crypto enthusiast and budding blockchain developer. Exploring the world of decentralized technology and smart contracts. Eager to contribute to the blockchain ecosystem and harness its potential for transformative applications. </p>
   </div>
        </div>
        </div>
    )
}
export default About;