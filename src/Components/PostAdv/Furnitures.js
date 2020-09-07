import React,{useState} from 'react'
import { useHistory  } from "react-router-dom";

function Furnitures(props) {
    
    let history = useHistory()

    const initialState = "";
    const [Type, setType] = useState(initialState)
    const [Year, setYear] = useState(initialState);
    const [Condition, setCondition] = useState(initialState)
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
        await fetch("http://localhost:4040/postadvt/furnitures", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            Type: Type,
            Year: Year,
            Condition: Condition,
            Title: Title,
            Price: Price,
            Phone: Phone,
            Name:props.User,
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
      <div  id="Heading" className="text-info">Sell a Furniture</div>

      <div className="DisplayFlex">
          <div className="form-group FlexChild">
            <label htmlFor="Brand">Type of Furniture</label>
            <input
            className="form-control"
            placeholder="Enter Type of Furniture. Eg: Sofa, Bed, Cupboard"
              type="text"
              id="Brand"
              onChange={(e) => setType(e.target.value)}
            ></input>
          </div>
      </div>
      <div className="DisplayFlex">
                <div className="form-group FlexChild">
                    <label htmlFor="Year">Year of Purchase</label>
                    <input type="text" placeholder="Enter the Year of Product Bought" className="form-control" id="Year" onChange={e => setYear(e.target.value.toLowerCase())} ></input>
                </div>
                <div className="form-group FlexChild">
                    <label htmlFor="Condition">Condition</label>
                    <select  className="form-control" onChange={e => setCondition(e.target.value.toLowerCase())}>
                        <option value="null"> Select a Condition</option>
                        <option value="Excellent">Excellent : No Dents, No Scratches on Screen and Body</option>
                        <option value="Good">Good : Minor Dents, Minor Scratches on Screen and Body</option>
                        <option value="Fair">Fair : Major Dents, Minor Scratches on Screen and Prominent Scrateches on Body</option>
                    </select>
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

export default Furnitures
