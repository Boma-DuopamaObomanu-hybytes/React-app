import React from 'react'


export default function header() {
  return (
    <div>
       <header className="App-header">
        <div className=" App-header-banner">
          <i
            aria-hidden="true"
            class="fa fa-phone"
            style={{ color: "#FF8A1E", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> Call : +01 123455678990</p>
        </div>
        <div className="App-header-banner" aria-hidden="true">
          <i
            class="fa fa-envelope"
            style={{ color: "#FF8A1E", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> Email : demo@gmail.com</p>
        </div>
      </header>
    </div>
  )
}
