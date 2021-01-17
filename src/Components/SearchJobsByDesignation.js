import React, { Component } from 'react';
class SearchJobsByDesignation extends Component {
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Designation to be searched" name="search"/>
                        <button className = "btn btn-search" >Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchJobsByDesignation;