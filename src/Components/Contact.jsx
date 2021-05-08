import React, { useState } from 'react'
import { db } from "../Database/firebase"

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleInput = async(e)=>{
        e.preventDefault();
        try {
            await db.collection("Contact").add({name,email,phone,message});
            alert("Data Send Sucessfully !!!")
        } catch (error) {
            alert(error.message)
        }

    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>For Demo and other Queries Contact Us !!!</h1>
            <div className="container">
                <form onSubmit={handleInput}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name </label>
                        <input type="text" class="form-control" id="Name" placeholder="Enter Your Name " autoComplete="none" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email </label>
                        <input type="text" class="form-control" id="EmailAddress" placeholder="Enter Your Email" autoComplete="none" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone </label>
                        <input type="text" class="form-control" id="Phone" placeholder="Enter Your Phone Number" autoComplete="none" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="Message" rows="3" placeholder="Enter Your Message" autoComplete="none" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
