import React, { useState } from 'react';
import { useAlert } from "react-alert";
import StarRating from './starrating.jsx';
import Header from '../navigation/Header';
import Footer from '../navigation/footer';
import './feedbackstyles.css';
import firebase_integration from '../fire'

function CSupport() {
    const alert = useAlert();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(null);
    const [check, setCheck] = useState(false);

    function checkInputField() {
        /* This function applies validation checks on the fields by checking whether the inputs are empty or not.
        If one of the required fields is missed by the user, an alert is generated. */
        if (
            subject === "" ||
            message === "" ||
            rating === ""
        ) {
            alert.show("Please fill in all the fields.");
            return false;
        } else {
            return true;
        }
    };


    function resetForm() {
        /* This function sets the three inputs to their initial values, i.e. empty strings. */
        setSubject("");
        setMessage("");
        setRating("");
    }

    /* Sets the rating provided by the customer upon clicks. */
    const handleChange = (input) => (e) => {
        setRating(e.target.value)
    }


    async function sendEmail(e) {
        if (check == false) {
            setCheck(true)

            var template_params = {
                /* setting variables for database storage. */
                "subject": subject,
                "message": message,
                "rating": rating
            }

            var todaysdate = new Date()
            /* Storing the feedback information into the database. */
            await firebase_integration.addFeedback(firebase_integration.auth.currentUser.uid, todaysdate, parseInt(template_params.rating), template_params.subject, template_params.message)
            alert.show("Submitted!")
        }
    }

    return (
        <div>
            <Header />
            <div className="feedback-title">
                FEEDBACK
            </div>
            <div className="feedback-form">
                <div className="subject-title">
                    <h3><strong>SUBJECT</strong></h3>
                </div>
                <form action="/action_page.php">
                    <input class="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} type="text" name="subject" placeholder="   Write your text here" />
                </form>
                <div className="title">
                    <h3><strong>MESSAGE</strong></h3>
                </div>
                <textarea maxlength="400" value={message} onChange={(t) => { setMessage(t.target.value) }} className="message-area" placeholder="   Write your text here"></textarea>
                <div>
                    <StarRating value={rating} handleChange={handleChange} />
                </div>
                <div className="confirm">
                    <button onClick={() => {
                        if (checkInputField()) { sendEmail() }
                    }} type="submit" className="btn btn-success btn-lg">SUBMIT</button>
                </div>
                <br />
            </div>
            <br /> <br />
            <Footer />
        </div>
    )
}

export default CSupport;