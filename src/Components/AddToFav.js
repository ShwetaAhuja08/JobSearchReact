import React, { Component } from 'react';
class AddToFav extends Component {
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Job Title" name="search"/>
                        <button className = "btn btn-search" >Add to apply</button>
                        <button className = "btn btn-search" >Remove</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddToFav;