import React, { useState, useEffect } from "react";
import { useHistory  } from "react-router-dom";

import "./Dashboard.css";

function Dashboard(props) {
  let history = useHistory();

  const [state, setstate] = useState([]);
  const [search, setSearch] = useState("")
  const [searchOption, setSearchOption] = useState("Mobiles")
  const [view, setView]= useState(false)
  const [resultView, setResultView] = useState("")

  async function handleSearch(){
    console.log(search,searchOption)
    await fetch("https://quikr-backend.herokuapp.com/getSearch",{
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({search,searchOption})
    }).then(res => res.json()).then(data => { 
      if (data.length === 0) setResultView(`No Result Found for "${search}"`)
      setstate(data); 
    })
  }

  async function loadAll() {
    try {
      await fetch("https://quikr-backend.herokuapp.com/getAll")
        .then((res) => res.json())
        .then((data) => {
          setstate(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function loadMobiles() {
    try {
      await fetch("https://quikr-backend.herokuapp.com/getMobiles")
        .then((res) => res.json())
        .then((data) => {
          setstate(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function loadElectronics() {
    try {
      await fetch("https://quikr-backend.herokuapp.com/getElectronics")
        .then((res) => res.json())
        .then((data) => {
          setstate(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function loadVehicles() {
    try {
      await fetch("https://quikr-backend.herokuapp.com/getVehicles")
        .then((res) => res.json())
        .then((data) => {
          setstate(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function loadFurnitures() {
    try {
      await fetch("https://quikr-backend.herokuapp.com/getFurnitures")
        .then((res) => res.json())
        .then((data) => {
          setstate(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function loadHousings() {
    try {
      await fetch("https://quikr-backend.herokuapp.com/getHousings")
        .then((res) => res.json())
        .then((data) => {
          setstate(data);
        });
    } catch (error) {
      console.log(error);
    }
  }


  function PostAdvt(){
    if (props.IsLoggedIn === true) history.push("/postadvt")
    else alert("You Must Be logged In to Post Advt")
  }

  function LoginChange(){
    if(view === true) {
      props.setIsLoggedIn(false)
    }
    else{
      history.push("/login")
    }
  }

  useEffect(() => {
    if(props.IsLoggedIn === true) setView(true)
  }, [])

  return (
    <div>
      <div className="containerDash">
        <div className="nav">
          <select className="selectSearchBar" onChange={e => setSearchOption(e.target.value)}>
            <option value="Mobiles">Mobile</option>
            <option value="Electronics">Electronics</option>
            <option value="Furnitures">Furnitures</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Housing">Housing</option>
          </select>
            <input className="selectSearchBar" type="text" placeholder="Search Products for sale " value={search} onChange={e => setSearch(e.target.value)} ></input>
            < button type="button" className="listButton" onClick={handleSearch}>Search</button>
            < button type="button" className="listButton" onClick={loadAll}>All Items</button>
            < button type="button" className="listButton" onClick={loadMobiles}>Mobile</button>
            < button type="button" className="listButton" onClick={loadElectronics}>Electronics</button>
            < button type="button" className="listButton" onClick={loadVehicles}>Vehicles</button>
            < button type="button" className="listButton" onClick={loadFurnitures}>Furnitures</button>
            < button type="button" className="listButton" onClick={loadHousings}>Housing</button>
            < button type="button" className="listButton" onClick={PostAdvt} >Post Ad</button>
            < button type="button" className="listButton" onClick={LoginChange} >{view === true?"Logout":"Login"}</button>
        </div>
        <div className="content">
          <div className="left">Left Side Advertisement</div>
          <div className="mid">
            {props.IsLoggedIn === false?<div></div>:<div className="Welcome">Welcome {props.User}</div>}
            {state.length !== 0 ? state.map((item) => {
              return (
                <div className="card" key={item._id}>
                  <div className="cardLeft">
                    <div>{item.AdType} Advertisement</div>
                    <div className="image"> <img src={item.Image} alt="display" /> </div>
                  </div>
                  <div className="cardRight">                  
                    <div className="title">{item.Title}</div>
                    <div className="cardLine2">
                      {item.Brand ? <div className="brand"><b>Brand : </b>{item.Brand}</div> : null }                      
                      {item.Model ?<div className="model"><b>Model : </b> {item.Model}</div> : null }
                      {item.Type ? <div className="model"><b>Type : </b> {item.Type}</div> : null }
                      <div className="price"><b>Price : </b>{item.Price}</div>
                    </div>
                    <div className="cardLine3">
                      <div className="flexcard">
                        {item.Size ? <div className="year"><b>Size : </b>{item.Size}</div> : null}
                        {item.Condition ?<div className="condition"><b>Condition : </b>{item.Condition}</div>:null}
                        {item.Year ? <div className="year"><b>Year : </b>{item.Year}</div> : null}
                        
                      </div>
                      <div className="details"><b>Details : </b><br/> {item.Details} </div>
                      <div className="cardLine2">
                        {item.Fuel?<div><b>Fuel : </b>{item.Fuel} </div>:null}
                        {item.Wheeler?<div><b>Wheeler : </b>{item.Wheeler} </div>:null}
                        {item.Kilometers?<div><b>Kilometers : </b>{item.Kilometers} </div>:null}
                      </div>
                    </div>
                      {props.IsLoggedIn === true ?<div>
                        <div className="seller">Seller Details</div>                        
                        <div className="email" >Email : {item.Email} </div>
                        <div className="phone">Phone : {item.Phone}</div>      
                        <div className="name">Name : {item.Name}</div>                
                    </div>:<button onClick={()=>history.push("/login")}> Login To View Seller Details</button>}
                  </div>
                </div>
              );
              }):<h3>{resultView}</h3>}
          </div>
          <div className="right"> right side advertisement</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
