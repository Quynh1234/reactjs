import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListToDo from './Todos/ListToDo';
import Home from './Todos/Home';
import Nav from './Nav/Nav';
import MyComponents from './Example/MyComponents';
import ShowUsers from './Users/showUsers';
import DetailUsers from './Users/DetailUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Simple To Do App with React.js ( BNQ & HOC REACTJS)
          </p>

          <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/MyComponent" element={<MyComponents />} />
        <Route path="/todo" element={<ListToDo />} />
        <Route path="/user" element={<ShowUsers />} />
        <Route path="/user/:id" element={<DetailUsers />} />
       </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      
      
      </div>
    </Router>
    
  );
}

export default App;
