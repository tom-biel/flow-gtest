import React from "react";
import { Router, Link, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import "./main.css"
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const App = () => (
  <div className="app">
     <Menu></Menu>
    <nav className="nav">
      <Link to="/">Page 1</Link> <Link to="page/2">Page 2</Link>
      {` `}
      <Link to="page/3">Page 3</Link> <Link to="page/4">Page 4</Link>
    </nav>

    <FadeTransitionRouter>
      <Page path="/" page="1" />
      <Page path="page/:page" />
    </FadeTransitionRouter>
  </div>
)

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

const Page = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    {props.page}
   
    <Button >test</Button>
    <Button variant="contained" color="secondary" >test</Button>

    <Footer></Footer>
  </div>
)

export default App
