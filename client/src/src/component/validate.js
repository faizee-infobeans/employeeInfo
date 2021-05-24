const postData = (event)=>{
    event.preventDefault();
    console.log(!user.fname);
   // let errors ={}
    if(user.fname){
        errors.fname = "First name is Required"
    }
    if(user.lname){
      errors.lname = "Last Name is Required"
    }
    if(user.email){
      errors.email = "Email is Required"
    }
    if(user.mobile){
      errors.mobile = "Mobile is Required"
    }

    //return  errors

    seterrors(errors)

  }

  export default Validation