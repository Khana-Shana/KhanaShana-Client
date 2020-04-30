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

    async function updatename(CustomerID, value){
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
    async function updateemail(CustomerID, value){
        firebase_integration.auth.currentUser.updateEmail(value).then(function() {
            firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
                Email : value
            })
        }).catch(function(error) {
            alert(error.message);
        });
        
    }
    async function updatenumber(CustomerID, value){
        firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
            ContactNo : value
        })
    }
    async function updatepassword(CustomerID, value){
        firebase_integration.auth.currentUser.updatePassword(value).then(function() {
            alert("Your password has been updated");
          }).catch(function(error) {
            alert(error.message);
          });
    }
    async function updategender(CustomerID, value){
        firebase_integration.database.collection("CustomerDatabase").doc(firebase_integration.auth.currentUser.uid.toString()).update({
            Gender : value
        })
    }          
    return (
        <div id="wholepage" className="container-fluid">
            <div className="row">
                <div className ="col-2 d-flex justify-content-center">
                    <img id="profilepic" className = "img-fluid" alt="ProfilePicture" />
                    {firebase_integration.getImageURL('profilepic', 'CustomerProfile', '','profilepic.svg')}
                </div>
                <div id="r1c2" className ="col-3" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <div id="namebox">
                                {name}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="btn-group d-flex" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary w-100 buttonbar" style = {{borderLeft: "0px"}}>Profile</button>
                                <a href = './orderhistory' type="button" class="btn btn-secondary w-100 buttonbar">Order History</a>
                                <a  href = './feedback' type="button" class="btn btn-secondary w-100 buttonbar">Feedback</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="r1c3" className="col-5"/>
                <div id="r1c4" className="col-2 d-flex justify-content-center">
                    <img id ="loyaltypoints" className = "img-fluid" alt="LoyaltyPoints" />
                    {firebase_integration.getImageURL('loyaltypoints', 'CustomerProfile', '', 'pointslogo.svg')}
                </div>
            </div>
            <div className="row">
                <div id ="r2c1" className ="col-2"/>
                <div id ="r2c2" className = "col-2 d-flex justify-content-center">
                    <form>
                        <div class ="infotitle">
                            Name
                            <img id ="editname" className = "img-fluid pencil" alt="pencil" onClick={() => seteditname(true)}/>
                            {firebase_integration.getImageURL('editname', 'CustomerProfile', '', 'pencil.svg')}
                            {editname === false?
                                <div class="info">{name}</div>:
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter name"aria-label="Recipient's username" aria-describedby="button-addon2" value = {name} onChange={(e) => setname(e.target.value)}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditname(false) 
                                            updatename(ID,name)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div class="infotitle">
                            Email
                            <img id ="editemail" className = "img-fluid pencil" alt="pencil" onClick={() => seteditemail(true)}/>
                            {firebase_integration.getImageURL('editemail', 'CustomerProfile', '', 'pencil.svg')}

                            {editemail === false?
                                <div class="info">{email}</div>:
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" value = {email}  onChange={(e) => setemail(e.target.value)}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditemail(false) 
                                            updateemail(ID,email)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div class="infotitle">
                            Phone Number
                            <img id ="editnumber" className = "img-fluid pencil" alt="pencil" onClick={() => seteditnumber(true)}/>
                            {firebase_integration.getImageURL('editnumber', 'CustomerProfile', '', 'pencil.svg')}
                            {editnumber === false?
                                <div class="info">{number}</div>:
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter password" aria-label="Recipient's username" aria-describedby="button-addon2" value = {number}  onChange={(e) => setnumber(e.target.value)}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditnumber(false) 
                                            updatenumber(ID, number)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div class ="infotitle">
                            Date of Birth
                            <div class="info">{dob}</div>
                        </div>
                        <div class="infotitle">
                            Password
                            <img id ="editpassword" className = "img-fluid pencil" alt="pencil" onClick={() => seteditpassword(true)}/>
                            {firebase_integration.getImageURL('editpassword', 'CustomerProfile', '', 'pencil.svg')}
                            {editpassword === false?
                                <div class="info">**********</div>:
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Enter New Password" aria-label="Recipient's username" aria-describedby="button-addon2" value = {password}  onChange={(e) => setpassword(e.target.value)}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditpassword(false) 
                                            updatepassword(ID,password)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div class="infotitle">
                            Gender
                            <img id ="editgender" className = "img-fluid pencil" alt="pencil" onClick={() => seteditgender(true)}/>
                            {firebase_integration.getImageURL('editgender', 'CustomerProfile', '', 'pencil.svg')}
                            {editgender === false?
                                <div class="info">{gender}</div>:
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder={gender} aria-label="Recipient's username" aria-describedby="button-addon2" value = {gender}  onChange={(e) => setgender(e.target.value)}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {seteditgender(false) 
                                            updategender(ID,gender)}}>Save</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                </div>
                <div id = "r2c3" className ="col d-flex justify-content-center">
                    <img id="profileaunty" className = "img-fluid" alt="ProfileAunty" />
                    {firebase_integration.getImageURL('profileaunty', 'CustomerProfile', '', 'aunty.svg')}
                </div>
            </div>
        </div>
    );
}
export default CustomerProfile;