import logo from './logo.svg';
import './App.css';
import RegJobSeeker from './Components/RegJobSeeker';
import UpdateJobSeekerProfile from './Components/UpdateJobSeekerProfile';
import ViewAllJobs from './Components/ViewAllJobs';
import SearchJobsBySkills from './Components/SearchJobBySkills';
import SearchJobsByLocation from './Components/SearchJobsByLocation';
import SearchJobsByOrgName from './Components/SearchJobsByOrgName';
import SearchJobsByDesignation from './Components/SearchJobsByDesignation';
import CreateEmployerComponent from './Components/CreateEmployerComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import AddToFav from './Components/AddToFav';
import EmployerNavigation from './Components/EmployerNavigation';


function App() {
  return (

    // <div className="App">
    //     <Router>
    //   <div className='container'>
    //      <switch>
    //          <Route path="/" component={Navigation} exact={true} ></Route>
    //          </switch>
    //          </div>
    //          </Router>
    //          </div>
             <div>
               
               <Navigation/>
              
             </div>
  );
}

export default App;
