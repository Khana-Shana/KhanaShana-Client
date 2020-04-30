import React from 'react';
import firebase_integration from '../fire.js';
import './profilestyles.css';
function CustomerProfile() {
    const [editname, seteditname] = React.useState(false)
    const [editemail, seteditemail] = React.useState(false)
    const [editnumber, seteditnumber] = React.useState(false)
    const [editpassword, seteditpassword] = React.useState(false)
    const [editgender, seteditgender] = React.useState(false)
    const [ID, setID] = React.useState()
    const [name, setname] = React.useState()
    const [email, setemail] = React.useState()
    const [number, setnumber] = React.useState()
    const [dob, setdob] = React.useState()
    const [password, setpassword] = React.useState()
    const [gender, setgender] = React.useState()

    React.useEffect(() => {
        firebase_integration.database.collection('CustomerDatabase').where("CustomerID", "==", firebase_integration.auth.currentUser.uid.toString()).onSnapshot((snapshot) => {
            console.log(firebase_integration.auth.currentUser)
            var customerdata = {};
            snapshot.docs.forEach(doc => {
                customerdata = doc.data()
            });
            setID(customerdata.CustomerID)
            setname(customerdata.Name)
            setemail(customerdata.Email)
            setnumber(customerdata.ContactNo)
            setdob(customerdata.DOB.toDate().getDate()+"-"+customerdata.DOB.toDate().getMonth()+1+"-"+customerdata.DOB.toDate().getFullYear())
            setpassword(customerdata.Password)
            setgender(customerdata.Gender)
        })
    },[ID]);

    async function updatename(value){
        firebase_integration.auth.currentUser.updateProfile({
            displayName: value,
          }).then(function() {
                firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
                    Name : value
                })
          }).catch(function(error) {
            alert(error.message);
          });
        
    }
    async function updateemail(value){
        firebase_integration.auth.currentUser.updateEmail(value).then(function() {
            firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
                Email : value
            })
        }).catch(function(error) {
            alert(error.message);
        });
        
    }
    async function updatenumber(value){
        firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
            ContactNo : value
        })
    }
    async function updatepassword(value){
        firebase_integration.auth.currentUser.updatePassword(value).then(function() {
            alert("Your password has been updated");
          }).catch(function(error) {
            alert(error.message);
          });
    }
    async function updategender(value){
        firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
            Gender : value
        })
    }
    // var vHeight = $(window).height(),
    // vWidth = $(window).width(),
    // wholepage = $('#wholepage');
    // wholepage.css({"height":vHeight,"width":vWidth});          
    return (
        <div id="wholepage" className="container-fluid">
            <div className="row">
                <div className ="col-2 d-flex justify-content-center">
                    <img id="profilepic" className = "img-fluid" alt="ProfilePicture" />
                    {firebase_integration.getImageURL('profilepic', 'CustomerProfile', '','profilepic.svg')}
                </div>
                <div id="r1c2" className ="col-4" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div id="namebox">
                                {name}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="btn-group d-flex" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary w-100 buttonbar" style = {{borderLeft: "0px"}}>Profile</button>
                                <a href = './orderhistory' type="button" className="btn btn-secondary w-100 buttonbar">Order History</a>
                                <a  href = './feedback' type="button" className="btn btn-secondary w-100 buttonbar">Feedback</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="r1c3" className="col-4"/>
                <div id="r1c4" className="col-2 d-flex justify-content-center">
                    <img id ="loyaltypoints" className = "img-fluid" alt="LoyaltyPoints" />
                    {firebase_integration.getImageURL('loyaltypoints', 'CustomerProfile', '', 'pointslogo.svg')}
                </div>
            </div>
            <div className="row">
                <div id ="r2c1" className ="col-2"/>
                <div id ="r2c2" className = "col d-flex">
                    <form>
                        <div className ="infotitle">
                            Name
                            <img id ="editname" className = "img-fluid pencil" alt="pencil" onClick={() => seteditname(true)}/>
                            {firebase_integration.getImageURL('editname', 'CustomerProfile', '', 'pencil.svg')}
                            {editname === false?
                                <div className="info">{name}</div>:
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Name"aria-label="Recipient's username" aria-describedby="button-addon2" value = {name} onChange={(e) => setname(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditname(false) 
                                            updatename(name)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="infotitle">
                            Email
                            <img id ="editemail" className = "img-fluid pencil" alt="pencil" onClick={() => seteditemail(true)}/>
                            {firebase_integration.getImageURL('editemail', 'CustomerProfile', '', 'pencil.svg')}

                            {editemail === false?
                                <div className="info">{email}</div>:
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="button-addon2" value = {email}  onChange={(e) => setemail(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditemail(false) 
                                            updateemail(email)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="infotitle">
                            Phone Number
                            <img id ="editnumber" className = "img-fluid pencil" alt="pencil" onClick={() => seteditnumber(true)}/>
                            {firebase_integration.getImageURL('editnumber', 'CustomerProfile', '', 'pencil.svg')}
                            {editnumber === false?
                                <div className="info">{number}</div>:
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Phone Number" aria-label="Recipient's username" aria-describedby="button-addon2" value = {number}  onChange={(e) => setnumber(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditnumber(false) 
                                            updatenumber( number)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className ="infotitle">
                            Date of Birth
                            <div className="info">{dob}</div>
                        </div>
                        <div className="infotitle">
                            Password
                            <img id ="editpassword" className = "img-fluid pencil" alt="pencil" onClick={() => seteditpassword(true)}/>
                            {firebase_integration.getImageURL('editpassword', 'CustomerProfile', '', 'pencil.svg')}
                            {editpassword === false?
                                <div className="info">**********</div>:
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Enter New Password" aria-label="Recipient's username" aria-describedby="button-addon2" value = {password}  onChange={(e) => setpassword(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditpassword(false) 
                                            updatepassword(password)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="infotitle">
                            Gender
                            <img id ="editgender" className = "img-fluid pencil" alt="pencil" onClick={() => seteditgender(true)}/>
                            {firebase_integration.getImageURL('editgender', 'CustomerProfile', '', 'pencil.svg')}
                            {editgender === false?
                                <div className="info">{gender}</div>:
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Gender" aria-label="Recipient's username" aria-describedby="button-addon2" value = {gender}  onChange={(e) => setgender(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditgender(false) 
                                            updategender(gender)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                </div>
                <div id = "r2c3" className ="col d-flex justify-content-center">
                    <img id="profileaunty" className = "img-fluid" alt="ProfileAunty" />
                    {firebase_integration.getImageURL('profileaunty', 'CustomerProfile', '', 'profileaunty.svg')}
                </div>
            </div>
        </div>
    );
}
export default CustomerProfile;