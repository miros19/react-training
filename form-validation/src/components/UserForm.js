import React, {Component} from 'react';
import './UserForm.css';

class UserForm extends Component {

    state = {

        username: "",
        email: "",
        pass: "",
        accept: false,

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        }
    }

    messeges = {
      username_incorrect: "",
      email_incorrect: "",
      password_incorrect: "",
      accept_incorrect: ""
    }


    handleChange = (e) => {
        const name = e.target.name
        const type = e.target.type

        if(type === "checkbox"){
          const checked = e.target.checked
          this.setState({
            [name]:checked
          })
        }
        else{
          const value = e.target.value
          this.setState({
            [name]:value
        })
        }

        
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log("działa")
    }


render(){
  return (
      <form className="user-form" onSubmit={this.handleSubmit} noValidate>
        <label htmlFor = "username"> Username: 
        <input type="text" id="username" name = "username" value={this.state.username} onChange={this.handleChange} /> 
        </label>

        <label htmlFor = "email"> E-mail: 
        <input type="text" id="email" name = "email" value={this.state.email} onChange={this.handleChange} />
        </label>

        <label htmlFor = "pass"> Passowrd: 
        <input type="password" id="pass" name = "pass" value={this.state.pass} onChange={this.handleChange} />
        </label>

        <label htmlFor='accept'>
          <input type="checkbox" id='accept' name='accept' value={this.state.accept} onChange={this.handleChange}/> I accept everything :D
        </label>

        <button>Save</button>

      </form>
  );
}
  
}

export default UserForm;