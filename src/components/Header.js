import React from "react";
import DonutsBeer4 from "./../img/DonutsBeer4.jpg"

function Header(){
  const headerStyles = {
    textAlign: "left",
    padding: 30,
    margin: 5,
    backgroundImage:`url(${DonutsBeer4})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 30%",
    color: "black",
    boxShadow: "0 2px 10px rgba(0,0,0,0.6)"
  }


  return(

    <React.Fragment>
      <div style={headerStyles}>
      <h1>Pierre's Brewery</h1>
      {/* <h5>Keep track of the birds you spot!</h5> */}
      </div>
      <br />
    </React.Fragment>

  );
}

export default Header;