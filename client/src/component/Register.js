import axios from "axios";
import React, { useState , useEffect } from "react";
import "./style/Login.css";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Register = () => {

  const [user, setUser] = useState({ fname: "",lname: "",email: "", mobile: "",password: "",});
  const [file, setFile] = useState("");

  const [errors, seterrors] = useState({});

  const HandleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleFile = (e)=>{
    setFile(e.target.files[0])
  }

  const { fname, lname , email, mobile , password } = user;

  const postData = (event) => {
    event.preventDefault();

    let errors = {};
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mobile");
    var password = document.getElementById("password");


    if (!fname.value) {
      errors.fname = "First name is Required";
    }
    if (!lname.value) {
      errors.lname = "Last Name is Required";
    }
    if (!email.value) {
      errors.email = "Email is Required";
    } else if (!validateEmail(email.value)) {
      errors.email = "Invalid Email syntax";
    }
    if (!mobile.value) {
      errors.mobile = "Mobile is Required";
    }
    if (!password.value) {
      errors.password = "Password is Required";
    } else if (!password.value.length > 2) {
      errors.password = "Password can't be smaller than 3 characters";
    }

    seterrors(errors);

    if (
      errors.fname ||
      errors.lname ||
      errors.email ||
      errors.mobileno ||
      errors.password
    ) {
      alert("error in form ");
    } else {

      var fname = document.getElementById('fname').value
      var lname = document.getElementById('lname').value
      var email = document.getElementById('email').value
       var mobile = document.getElementById('mobile').value
    var password = document.getElementById('password').value
  // var image = document.getElementById('file').value

        const formdata = new FormData();

        formdata.append("fname", fname);
        formdata.append("lname", lname);
        formdata.append("email", email);
        formdata.append("mobile", mobile);
        formdata.append("password",password)
       formdata.append("attachment", file);

      console.log(formdata);
      axios.post("http://localhost:8000/newregister",formdata).then(
        (response) => {
          console.log("response from signup Api", response);
          alert("api call sucess");
       },
       (error) => {
         console.log("error from signup", error);
         alert(error);
       }
      );
    }
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="row card pt-3 p-2 rounded-0">
          <form onSubmit={postData} method="POST" enctype="multipart/form-data">
            <div class="mb-2">
              <label class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="fname"
                placeholder="Enter your First Name"
                name="fname"
                value={user.fname}
                onChange={HandleInputs}
              />
              {errors.fname && (
                <label style={{ color: "red" }} class="form-text">
                  {errors.fname}
                </label>
              )}
            </div>

            <div class="mb-2">
              <label class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lname"
                placeholder="Enter your Last Name"
                name="lname"
                value={user.lname}
                onChange={HandleInputs}
              />
              {errors.lname && (
                <label style={{ color: "red" }} class="form-text">
                  {errors.lname}
                </label>
              )}
            </div>

            <div class="mb-2">
              <label class="form-label">Email </label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter your Email address"
                name="email"
                value={user.email}
                onChange={HandleInputs}
              />
              {errors.email && (
                <label style={{ color: "red" }} class="form-text">
                  {errors.email}
                </label>
              )}
            </div>

            <div class="mb-2">
              <label for="email" class="form-label">
                Mobile
              </label>
              <input
                type="text"
                class="form-control"
                id="mobile"
                placeholder="Enter your Mobile No"
                name="mobile"
                value={user.mobile}
                onChange={HandleInputs}
              />
              {errors.mobile && (
                <label style={{ color: "red" }} class="form-text">
                  {errors.mobile}
                </label>
              )}
            </div>

            <div class="mb-2">
              <label class="form-label">Profile Picture</label>
              <input
                type="file"
                class="form-control"
                name="attachment"
                id="file"
    
                onChange={HandleFile}
              />
              <label style={{ color: "red" }} class="form-text"></label>
            </div>

            <div class="mb-2">
              <label for="password" class="form-label stretch">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Your password"
                name="password"
                value={user.password}
                onChange={HandleInputs}
              />
              {errors.password && (
                <label style={{ color: "red" }} class="form-text">
                  {errors.password}
                </label>
              )}
            </div>

            <div class="mt-4 mb-5">
              <button
                type="submit"
                class="btn btn-danger w-100 rounded-0"
              >
                Register to Intranet Portal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
