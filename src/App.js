import React, { Component } from 'react';
import './App.css';

import Permanent from './BackLogs/src/Permanent/Permanent';
import Contract from './BackLogs/src/Contract/Contract';
// import SignIn from './BackLogs/src/Signin/Signin';
import List from './BackLogs/src/List/List';
import Header from './BackLogs/src/List/header';
import Dashboard from './Dashboard/Dashboard';
class App extends Component {
  state = {
    contract: [
      { 
        id:"C01",
        name: "Manu Kapoor",
        email: "manu.kapoor@wipro.com",
        company: "Wipro",
        mobile: "9160808366" 
      },
      { 
        id:"C02",
        name: "Manu Kapoor 2",
        email: "manu.kapoor@wipro.com",
        company: "Wipro",
        mobile: "9160808366" 
      }
    ],
    permanent: [
      { 
        id:"P01",
        name: "Suresh",
        email: "manu.kapoor@wipro.com",
        company: "Wipro",
        mobile: "9160808366" 
      },
      { 
        id:"P02",
        name: "Suresh 2",
        email: "manu.kapoor@wipro.com",
        company: "Wipro",
        mobile: "9160808366" 
      }
    ],
    showContract: true,
    showPermanent: false
  }

  toggleEmployeesHandler = () => {
    const doesShow = this.state.showPermanent;
    this.setState({ showPermanent: !doesShow })
  }

  render() {
    let contractEmployees= null;
    let permanentEmployees= null;

    if(this.state.showContract){
      contractEmployees =(
        (this.state.contract.map((item, index) => {
          return <Contract 
          key = {item.id}
          name = {item.name} 
          email = {item.email} 
          company = {item.company} 
          mobile = {item.mobile}
          onDelete={()=>this.deleteEmployee(index)} 
          />
        }))
      )
    }
    else{
      permanentEmployees =(
        (this.state.permanent.map(item =>{
          return <List 
          key = {item.id} // to avoid re-render of complete data, just re-render the changes in the DOM. and renders updated changes
          name = {item.name} 
          email = {item.email} 
          company = {item.company} 
          mobile = {item.mobile} 
          />
        }))
        )
    }
    return (
      <div className="App">
          {/* <Header/> */}
        <button onClick={this.toggleEmployeesHandler}>Toggle Employees</button>
        {permanentEmployees} 
        {/* <Dashboard /> */}
        {/* <button onClick={this.togglePersonsHandler}>Toggle</button> */}
        
       
        {/* {this.state.permanent ? 
          <div>
        <Contract
         name = {this.state.contract[0].name}/>
          </div>  :<Permanent />
        } */}
      </div>
    );
  }
}

export default App;
