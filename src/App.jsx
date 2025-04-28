import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import MyCard from './MyCard';

function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

function About() {
  return <h2>This is the About Page.</h2>;
}

function App(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <MyCard bgColor="bg-info" foreColor="text-white" />
          <MyCard />
          <MyCard />
          <MyCard bgColor="bg-primary" foreColor="text-white" />
          <MyCard />
          <MyCard />
        </div>
        <div class="col">
          <MyCard bgColor="bg-info" foreColor="text-white" />
          <MyCard />
          <MyCard />
          <MyCard bgColor="bg-primary" foreColor="text-white" />
          <MyCard />
          <MyCard />
        </div>
      </div>

    </div>    
  );
}

export default App;
