import React,{useState} from 'react'
import { useHistory  } from "react-router-dom";
function Housing(props) {
    
    let history = useHistory()

    const initialState = "";

    const [Year, setYear] = useState(initialState);
    const [Location, setLocation] = useState(initialState);
    const [Size, setSize] = useState(initialState)
    const [Type, setType] = useState(initialState)
    const [Mode, setMode] = useState(initialState)
    const [Furnished, setFurnished] = useState(initialState)
    const [Title, setTitle] = useState(initialState);
    const [Price, setPrice] = useState(initialState);
    const [Phone, setPhone] = useState(initialState);
    const [Email, setEmail] = useState(initialState);
    const [AdType, setAdType] = useState(initialState);
    const [Pincode, setPincode] = useState(initialState);
    const [Details, setDetails] = useState(initialState);
    const [Image, setImage] = useState();
  
    async function handleSubmit() {
      try {
         await fetch("https://quikr-backend.herokuapp.com/postadvt/housings", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            Type:Type,
            Year: Year,
            Size:Size,
            Mode:Mode,
            Furnished:Furnished,
            Location: Location,
            Title: Title,
            Name:props.User,
            Price: Price,
            Phone: Phone,
            Image:Image,
            Email: Email,
            AdType: AdType,
            Pincode:Pincode,
            Details:Details
          }),
        }).then(res => res.json()
        ).then(data => {
            if(data.Message === "Posted"){
                alert("Item Posted Sucessfully")
                history.push("/dashboard")
            }
        })

      } catch (err) {
        console.log("Error : ", err);
      }
    }

    function handleImage(){
      const { files } = document.querySelector('input[type="file"]')
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', 'adekknky');
      const options = {
        method: 'POST',
        body: formData,
      };
      
      return fetch('https://api.cloudinary.com/v1_1/gooose/image/upload', options)
        .then(res => res.json())
        .then(res => setImage(res.secure_url))
        .catch(err => console.log(err));
  }

    return (
    <div id="RegisterBox">
      <div id="Heading" className="text-info">
        Sell / Rent your Property
      </div>

      <div className="DisplayFlex">
      <div className="form-group FlexChild">
          <label htmlFor="SaleType">House Type</label>
          <select id="SaleType" className="form-control" onChange={(e) => setMode(e.target.value)}>
            <option value="null"> Select an Option</option>
            <option value="Sell">Sell</option>
            <option value="Rent">Rent</option>
            <option value="Lease">Lease</option>
          </select>
        </div>

      <div className="form-group FlexChild">
          <label htmlFor="HouseType">House Type</label>
          <select className="form-control" onChange={(e) => setType(e.target.value)}>
            <option value="null"> Select an Option</option>
            <option value="Villa">Individual Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Plot">Plot</option>
            <option value="StudioApartment">Studio Apartment</option>
          </select>
        </div>
      </div>

      <div className="DisplayFlex">
        <div className="form-group FlexChild">
          <label htmlFor="Furnishing">House Type</label>
          <select id="Furnishing" className="form-control" onChange={(e) => setFurnished(e.target.value)}>
            <option value="null"> Select an Option</option>
            <option value="Full">Fully Furnished</option>
            <option value="Semi">Semi-Furnished</option>
            <option value="none">Unfurnished</option>
          </select>
        </div>
        <div className="form-group FlexChild">
          <label htmlFor="Year">Year of Built</label>
          <input
          placeholder="Enter Year of Built"
            className="form-control"
            type="text"
            id="Year"
            onChange={(e) => setYear(e.target.value)}
          ></input>
        </div>
      </div>

      
      <div className="DisplayFlex">
      <div className="form-group FlexChild" >
        <label htmlFor="Size">Size / Dimensions</label>
        <input
        placeholder="Ex: 450Sqft, 3000Sqft"
          className="form-control"
          type="text"
          id="Size"
          onChange={(e) => setSize(e.target.value)}
        ></input>
      </div>
      <div className="form-group FlexChild">
        <label htmlFor="Location">Locality of the House</label>
        <input
        placeholder="Ex: Chennai, Ambattur, Taramani"
        className="form-control"
          type="text"
          id="Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
      </div>
      </div>

      <div className="DisplayFlex">
                <div className="form-group FlexChild">
                    <label htmlFor="Title">Title for Your Product</label>
                    <input type="text" placeholder="Add Catchy Title to attract Buyers" className="form-control" id="Title" onChange={e => setTitle(e.target.value.toLowerCase())}></input>
                </div>
                <div className="form-group FlexChild">
                    <label htmlFor="AdType">Advtertisment Type</label>
                    <select className="form-control" onChange={e => setAdType(e.target.value.toLowerCase())}>
                        <option value="null"> Select an Option</option>
                        <option value="Free">Free Advtertisment</option>
                        <option value="Paid">Premium Advertisement</option>
                    </select>
                </div>
            </div>

            <div className="DisplayFlex">
                <div className="form-group FlexChild">
                    <label htmlFor="Price">Price</label>
                    <input type="text" placeholder="Enter Price For Your Product" className="form-control" id="Price" onChange={e => setPrice(e.target.value.toLowerCase())}></input>
                </div>
                <div className="form-group FlexChild">
                    <label htmlFor="Pincode">Pincode</label>
                    <input type="text" placeholder="Enter Your Loacality/Area Pincode" className="form-control" id="Pincode" onChange={e => setPincode(e.target.value.toLowerCase())}></input>
                </div>
            </div>

            <div className= "DisplayFlex">
                <div className="form-group FlexChild">
                    <label htmlFor="Phone">Contact Number</label>
                    <input type="tel" placeholder="Enter Your 10 Digit Phone Number" className="form-control" id="Phone" onChange={e => setPhone(e.target.value.toLowerCase())}></input>
                </div> 
                <div className="form-group FlexChild">
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Enter Your Email" className="form-control" id="Email" onChange={e => setEmail(e.target.value.toLowerCase())} ></input>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="Details">Add Additional Details</label>
                <textarea className="form-control"
                type="text"
                id="Details"
                rows={5}
                cols={50}
                placeholder="Add Brief Details To Provide Information About Your Product To Buyers"
                onChange={(e) => setDetails(e.target.value.toLowerCase())}
                ></textarea>
            </div>

            <div>
                <img src={Image} className="ImagePrev" alt="Waiting for User Upload"></img>
            </div>

            <div className="custom-file">
                <label className="custom-file-label" htmlFor="Image">Upload Image</label>
                <br />
                <input className="custom-file-input" type="file" id="Image" onChange={handleImage}></input>                
            </div>
            <br />

            <div className="form-group">
                <button className="form-control btn-info" type="button" onClick={handleSubmit}>Post Your AD</button>
            </div>
            
    </div>
    )
}

export default Housing
