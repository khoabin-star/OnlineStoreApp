
import Axios from "axios";
import axios from "axios";

export default class LoginAccessor {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  createNewAccount() {
    /*
            1. Add new username to the database
            2. Add new password to the database
            3. Maybe add a new email and phonenumber to the database
            
        */
    return 1;
  }

  validateLogin(username, password) {
    Axios.post("http://localhost:3000/signin", {
      username: username,
      password: password,
    }).then((response) => {
      axios.data = response.data;
    });
    let retrievedUser = axios.data.map(function (element) {
      let tempUser = element.userName;
      return tempUser;
    });
    let retrievedPass = axios.data.map(function (element) {
      let tempPass = element.userName;
      return tempPass;
    });
    if (retrievedUser === username){
      if(retrievedPass === password){
        alert("Login Successful!");
        //needs rerouting code//
      }
      else{
        alert("Invalid Password Attempt!");
      }
    }
    else{
      alert("Invalid Username or Password!");
    }
    return;
  }
}