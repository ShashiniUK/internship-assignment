import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowContact = () => {
  const[contact, setContact] = useState({});
  const[loading, setLoading ] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/contacts/${id}`)
      .then((response) => {
        setContact(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Contact</h1>
      {loading? (
        <Spinner/>
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Id</span>
            <span>{contact._id}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Name</span>
            <span>{contact.Name}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Email</span>
            <span>{contact.Email}</span>
          </div>
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Gender</span>
            <span>{contact.Gender}</span>
          </div>
          {/* <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>Discription</span>
            <span>{contact.}</span>
          </div> */}
          <div className ='my-4'>
            <span className= 'text-x1 mr-4 text-gray-500'>phoneNumber</span>
            <span>{contact.phoneNumber}</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default ShowContact

