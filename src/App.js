import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './sass/App.css'; 
import { Header } from './components/GlobalComponents/Header'
import { HomePage } from './components/Home/HomePage';
import { ProjectsPage } from './components/Projects/ProjectsPage'
import { BlogPage } from './components/Blog/BlogPage';
import { ContactPage } from './components/Contact/ContactPage';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  return (
    <Router>
      <>
      <Header/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/projects' component={ProjectsPage}/>
        <Route path='/blog' component={BlogPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Redirect to='/'/>
      </Switch>
      </>
    </Router>
  );
  }

export default App;
