import React, { useState } from 'react';
import StarRating from './starrating.jsx';
import emailjs from 'emailjs-com';
import './feedbackstyles.css';
import Header from '../order/navbar';
import Footer from '../navigation/footer';


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

         var service_id = "default_service";
         var template_id = "feedback";
         var user_id = "user_Rl2pGhDXLZmjSItbRINai";
       
        emailjs.send(service_id,template_id,template_params,user_id)
        .then((resp)=> {
            alert('YES!',resp.status,resp.text);
        },(err)=> {
            alert(':(...',err);
        });

        // resetForm();
    }

    // const values = {rating};

            return (
            <div>
            <Header/>
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
            <br/> <br/>
            <Footer/>
        </div>
    )
}

export default CSupport;