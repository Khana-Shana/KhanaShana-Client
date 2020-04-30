import React, { useState } from 'react';
import StarRating from './starrating.jsx';
import emailjs from 'emailjs-com';
import './feedbackstyles.css';
import firebase_integration from '../fire.js'


//  emailjs.send(service_id, template_id, template_params,user_id);

function CSupport() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(null);
    

    function resetForm(){
        setSubject("");
        setMessage("");
        setRating("");
    }

    const handleChange = (input) => (e) => {
        setRating(e.target.value)
    }


    function sendEmail(e){
        e.preventDefault();

        var template_params = {
            "subject": subject,
            "message": message,
            "rating": rating
         }

        var todaysdate = new Date()
        firebase_integration.addFeedback(firebase_integration.auth.currentUser.uid, todaysdate, parseInt(template_params.rating), template_params.subject, template_params.message)
    }

    // const values = {rating};

            return (
        <div>
            <div className = "feedback-title">
                FEEDBACK
            </div>
            <div className = "feedback-form">
                <div className = "subject-title">
                    <h3><strong>SUBJECT</strong></h3>
                </div>
                <form action="/action_page.php">
                    <input value = {subject} onChange = {(e) => {setSubject(e.target.value)}} type="text" name ="subject" placeholder="   Write your text here"/>
                </form>
                <div className = "message-title">
                    <h3><strong>MESSAGE</strong></h3>
                </div>
                <textarea value = {message} onChange = {(t) => {setMessage(t.target.value)}} className = "message-area" placeholder="   Write your text here"></textarea>
                <br/> <br/>
                <StarRating value={rating} handleChange = {handleChange}/>
                <div className = "confirm">
                        <button onClick = {sendEmail} type="submit" className="btn btn-success btn-lg">SUBMIT</button>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default CSupport;