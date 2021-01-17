import React, { Component } from 'react';
class SearchJobsByOrgName extends Component {
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Organization name to be searched" name="search"/>
                        <button className = "btn btn-search" >Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchJobsByOrgName;