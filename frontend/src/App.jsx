import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateContacts from './pages/CreateContacts';
import ShowContact from './pages/ShowContact';
import EditContact from './pages/EditContact';
import DeleteContact from './pages/DeleteContact';
import LoginDesign from './pages/LoginDesign';
import SignUpPage from './pages/SignUpPage';



const App = () => {
 return (
    <Routes>
      <Route path='/Login' element= {<LoginDesign/>}/>
      <Route path='/SignUp' element= {<SignUpPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contacts/create' element={<CreateContacts/>}/>
      <Route path='/contacts/details/:id' element={<ShowContact/>}/>
      <Route path='/contacts/edit/:id' element={<EditContact/>}/>
      <Route path='/contacts/delete/:id' element={<DeleteContact/>}/>

    </Routes>
    
   
  );
  
};

export default App;
/* <Route path="/" element={<Login/>}/>
       <Route path="/employee/signup" element={<Signup/>}/>*/ 