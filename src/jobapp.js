import React, { Component } from "react";

class JobApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candName: "",
      candAge: "",
      roleApplied: "node",
      termsCond: false,
      errors: {
        candName: "",
        candAge: "",
        roleApplied: "",
        termsCond: "",
      },
      touched: {
        candName: false,
        candAge: false,
        roleApplied: false,
        termsCond: false,
      },
    };
  }

  // handleChange = (event) => {
  //   // console.log(event.target.name, event.target.value);
  //   const state = { ...this.state };
  //   state[event.target.name] = event.target.value;
  //   // console.log(state);
  //   this.setState({ ...state });
  // };

  // //***above function can be simplified using object destructuring
  // // Below we are destructuring target from event and name value from target.
  // handleChange = ({ target: { name, value } }) => {
  //   const state = { ...this.state };
  //   state[name] = value;
  //   this.setState({ ...state });
  // };

  // //More simplification
  handleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;

    const errors = { ...this.state.errors };

    switch (name) {
      case "candName": {
        // Validations for candidate name
        errors.candName = !value ? "Please enter the name" : "";
        break;
      }
      case "candAge": {
        // Validations for candidate age
        if (!value) errors.candAge = "Please enter the age";
        else if (value < 18) errors.candAge = "Age must be 18+";
        else errors.candAge = "";
        break;
      }
      case "roleApplied": {
        // Validations for role applied
        errors.roleApplied = !value ? "Please enter the role applying" : "";
        break;
      }
      case "termsCond": {
        // Validations for terms and conditions
        errors.termsCond = !value ? "Please accept the T&C" : "";
        break;
      }
    }
    // console.log(errors);

    this.setState({ ...this.state, [name]: value, errors });
  };

  handleBlur = ({ target: { name } }) => {
    const touched = { ...this.state.touched, [name]: true };
    this.setState({ touched });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // above prevents default action of forms i.e, posting data as query parameters to action URL
    const notTouched = Object.values(this.state.touched).filter((err) => !err);
    // console.log(notTouched);
    const errors = Object.values(this.state.errors).filter((err) => err !== "");
    if (!notTouched.length && !errors.length) {
      // valid
      console.log(this.state);
    } else {
      return false;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Job Application</h3>
        <div>
          {/* candidate name */}
          <label>Candidate Name:</label>
          <input
            type="text"
            name="candName"
            placeholder="Enter Name"
            required
            value={this.state.candName}
            onChange={this.handleChange} //Binding function
            // calling function
            // onChange={({target: {value} }) =>
            //this.handleChange("candName", value)}
            onBlur={this.handleBlur}
          />
          <br />
          <span className="error">{this.state.errors.candName}</span>
        </div>
        <br />
        <div>
          {/* candidate age */}
          <label>Candidate Age:</label>
          <input
            type="number"
            name="candAge"
            placeholder="Enter Age"
            value={this.state.candAge}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required
          />
          <br />
          <span className="error">{this.state.errors.candAge}</span>
        </div>
        <br />
        <div>
          {/* role applied */}
          <label>Role Applied:</label>
          <select
            name="roleApplied"
            value={this.state.roleApplied}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required
          >
            <option value="">--Select--</option>
            <option value="React">React Dev</option>
            <option value="Node">Node Dev</option>
            <option value="Mern">full stack Dev</option>
          </select>
          <br />
          <span className="error">{this.state.errors.roleApplied}</span>
        </div>
        <br />
        <div>
          {/* terms and conditions */}
          <input
            type="checkbox"
            name="termsCond"
            checked={this.state.termsCond}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required
          />
          <label>I agree to terms and conditions for the applied role.</label>
          <br />
          <span className="error">{this.state.errors.termsCond}</span>
        </div>
        <br />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default JobApp;
