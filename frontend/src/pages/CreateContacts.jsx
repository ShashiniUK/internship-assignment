import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {useSnackbar} from 'notistack';

const CreateContacts = () => {
  const[Name, setName] = useState('');
  const[Gender, setGender] = useState('');
  const[Email, setEmail] = useState('');
  const[phoneNumber, setphoneNumber] = useState('');
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveContact = () => {
    const data ={
      Name,
      Gender,
      Email,
      phoneNumber,
    
    };
    setLoading(true);
    axios
        .post('http://localhost:8080/contacts', data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar('Contact registered successfully', { variant: 'success' });
          navigate('/home');
        })
        .catch((error) =>{
          setLoading(false);
          //alert('An error happened.Please check console');
          enqueueSnackbar('Error', { variant: 'error' });
          console.log(error);
       });
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Create Contact</h1>
      {loading ? <Spinner/> :''}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-x1-mr-4 text-gray-500'>Name</label>
          <input 
            type='text'
            value ={Name}
            onChange={(e) => setName(e.target.value)  }
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <label className='text-x1-mr-4 text-gray-500'>Email</label>
          <input 
            type='text'
            value ={Email}
            onChange={(e) => setEmail(e.target.value)  }
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <label className='text-x1-mr-4 text-gray-500'>Gender</label>
          <input 
            type='text'
            value ={Gender}
            onChange={(e) => setGender(e.target.value)  }
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <label className='text-x1-mr-4 text-gray-500'>phoneNumber</label>
          <input 
            type='text'
            value ={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)  }
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          {/* <label className='text-x1-mr-4 text-gray-500'>Discription</label>
          <input 
            type='text'
            value ={Discription}
            onChange={(e) => setDiscription(e.target.value)  }
            className='border-2 border-gray-500 px-4 py-2 w-full'
          /> */}
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveContact}>
          Save
        </button>

      </div>
    
    </div>
  )
}

export default CreateContacts