import React, { Component } from 'react';
//import JobSeekerService from '../services/JobSeekerService';

class UpdateJobSeekerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
                address:'',
                contact_no:'',
                email:'',
                skill_set:'',
                location:'',
        }
        this.changeAddressHandler= this.changeAddressHandler.bind(this);
        this.changeContact_noHandler = this.changeContact_noHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSkill_setHandler = this.changeSkill_setHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveUpdatedJobSeeker = this.saveUpdatedJobSeeker.bind(this);
    }     

    saveUpdatedJobSeeker = (e)=>{
        e.preventDefault();
        let jobseeker ={ address: this.state.address, contact_no: this.state.contact_no, email: this.state.email, 
            skill_set: this.state.skill_set, location: this.state.location
        };
        console.log(JSON.stringify(jobseeker));
        //EmployeeService.createEmployee(employee).then(res =>{
        //    this.props.history.push('/employees');
        //})
    }  
    
    cancel(){
        this.props.history.push('/jobseeker');
    }

   
    changeAddressHandler = (event) =>{
        this.setState({address: event.target.value});
    }

    changeContact_noHandler = (event) =>{
        this.setState({contact_no: event.target.value});
    }

    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
    }

    changeSkill_setHandler = (event) =>{
        this.setState({skill_set: event.target.value});
    }

    changeLocationHandler = (event) =>{
        this.setState({location: event.target.value});
    }

    

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Job Seeker</h3>
                            <div className = "card-body">
                                <form>
                                    
                                    <div className="form-group"> 
                                        <label>Enter Address</label>
                                        <input placeholder="Address" name="address"
                                            className="form-control" value = {this.state.address} 
                                            onChange = {this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Contact Number</label>
                                        <input placeholder="Contact Number" name="contact_no"
                                            className="form-control" value = {this.state.contact_no} 
                                            onChange = {this.changeContact_noHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Email ID</label>
                                        <input placeholder="Email" name="email"
                                            className="form-control" value = {this.state.email} 
                                            onChange = {this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Skill Set</label>
                                        <input placeholder="Skill Set" name="skill_set"
                                            className="form-control" value = {this.state.skill_set} 
                                            onChange = {this.changeSkill_setHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Location</label>
                                        <input placeholder="Location" name="location"
                                            className="form-control" value = {this.state.location} 
                                            onChange = {this.changeLocationHandler}/>
                                    </div>
                                   
                                    <button className = "btn btn-success" onClick = {this.saveUpdatedJobSeeker}>Save Changes</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default UpdateJobSeekerProfile;