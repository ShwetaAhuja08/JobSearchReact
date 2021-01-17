import React, { Component } from 'react';
class SearchJobsByLocation extends Component {
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Location to be searched" name="search"/>
                        <button className = "btn btn-search" >Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchJobsByLocation;