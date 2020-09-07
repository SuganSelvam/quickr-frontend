import React,{useState} from 'react'

import "./Test.css"

function ImageUpload() {

    const [imageAlt, setIamgeAlt] = useState("")
    const [imageUrl, setimageUrl] = useState("")

    function handleImageUpload(){

    }

    return (
        <div>
            <main className="App">
                <section className="left-side">
                <form>
                    <div className="form-group">
                    <input type="file"/>
                    </div>

                    <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
                    <button type="button" className="btn widget-btn">Upload Via Widget</button>
                </form>
                </section>
                <section className="right-side">
                <p>The resulting image will be displayed here</p>
                {imageUrl && (
                    <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
                )}
                </section>
            </main>
        </div>
    )
}

export default ImageUpload
