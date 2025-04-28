
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import MyCard from './MyCard';
import BasicExample from './BasicNav';
import './App.css'; // Make sure to import your CSS file

function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

function About() {
  return <h2>This is the About Page.</h2>;
}

function App(props) {
  return (
    <div className="container">
        <div>
        <BasicExample />
      </div>
      <div className="row">
        <div className="col-sm-9">
            <MyCard className="" bgColor="bg-info" foreColor="text-white" />
          </div>
        <div className="col-sm-3">
            <MyCard className="" bgColor="bg-info" foreColor="text-white" />
          </div>
<div className="col-sm-3">
            <MyCard className="" bgColor="bg-info" foreColor="text-white" />
          </div>
<div className="col-sm-3">
            <MyCard className="" bgColor="bg-info" foreColor="text-white" />
          </div>
<div className="col-sm-3">
            <MyCard className="" bgColor="bg-info" foreColor="text-white" />
          </div>
       
      </div>

    </div>    
  );
}

export default App;
