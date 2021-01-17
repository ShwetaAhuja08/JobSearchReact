import React, { Component } from 'react';
class SearchJobsBySkills extends Component {
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Skill to be searched" name="search"/>
                        <button className = "btn btn-search" >Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchJobsBySkills;