import React,{useState} from 'react';

export default function About() {
    const [myStyle,setMystyle] = useState({
        color:'white',
        backgroundColor:'black'
    })
    const [btntext,setbtntext]=useState("enable dark Mode");
    const toggleStyle=()=>{
       if(myStyle.color==='white'){
        setMystyle({
            color:'black',
            backgroundColor:'white'
        })
        setbtntext("Enable dark Mode");
       }
       else{
        setMystyle({
            color:'white',
            backgroundColor:'black'

        })
        setbtntext("Enable light Mode");
       }
    }
  return (
    <>
    <div classNameName="container mx-2" style={myStyle}>
    <h2 classNameName="my-2">AboutUs</h2>
    
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Java
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Certainly! Java is a high-level, object-oriented, and platform-independent programming language that was developed by James Gosling and his team at Sun Microsystems (now owned by Oracle) in the mid-1990s. It was designed with the goal of being a simple, robust, and secure language suitable for a wide range of applications, particularly for use in distributed systems.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"   style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Python
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>Certainly! Python is a high-level, versatile, and easy-to-learn programming language. It was created by Guido van Rossum and first released in 1991. Python is known for its simplicity, readability, and clean syntax, which makes it a popular choice for beginners and experienced developers alike.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        C++
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}> 
        <strong>Certainly! C++ is a powerful, general-purpose programming language that is an extension of the C programming language. It was developed by Bjarne Stroustrup in the early 1980s at Bell Labs as an enhancement to C. C++ is known for its efficiency, performance, and the ability to combine procedural, object-oriented, and generic programming paradigms.</strong>
      </div>
    </div>
  </div>
</div>
<div classNameName="container my-3"></div>
<button  type="button" className="btn btn-primary"  onClick={toggleStyle}>{btntext}</button>
</div>
</>
  )
}
