import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// import Test from './components/Test';
import Test1 from './components/Profile';
import Home from './Pages/Home';
import Profile from './components/Profile';
import Posts from './Pages/Posts';
import Gallery from './Pages/Gallery';
import Todo from './Pages/Todo';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/profile/:id' element={<Layout/>}>
      <Route index element={<Profile/>}/>
        {/* <Route index element={<Test/>}/> */}
        <Route path='posts' element={<Posts/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='todo' element={<Todo/>}/>
     
      </Route>
      <Route index element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
