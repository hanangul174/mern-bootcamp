
import React from "react";

export default function Header() {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          height: "100px",
          width: "99.6%",
          background:'#E8ECEF'
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "2px solid yellow",
            height: "100%",
          }}
        >
          <div
            style={{
               height: "80px",
                width: "200px",
                 border: "2px solid red" }}
          >
            <img src={require("./image.png")} height="100%" width="100%"></img>
          </div>
          <div
            style={{
              height: "80px",
              width: "70px",
              border: "2px solid",
              marginRight: "70px",
              display:'flex'
            }}
          >
            <img src={require("./image2.png")} height="100%" width="100%"></img>
            <div style={{marginLeft:'10%',marginTop:'33%',alignItems:'center', border:'2px solid'}}> Hanan Gul
              </div>            
          </div>
          
        </header>
      </div>
    </>
  );
}
