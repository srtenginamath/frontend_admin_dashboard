import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { Button , Row , Col, Container} from 'react-bootstrap';
import "./Profile.css";
import { useNavigate ,BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';

const Profile = () => {

  

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      const user = data.users.find((user) => user.id == id);
      setData(user);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>

<div id="page">


      <div className="profile_details">
      <img src={data?.profilepicture} alt="profile" className="profile-img"></img>
      <h1>{data?.name}</h1>
      <div className="address">
        <p>Username :</p>
        <p>{data?.username}</p>
        
        </div>
        <div className="address">
        <p>email :</p>
        <p>{data?.email}</p>
        
        </div>
        <div className="address">
        <p>Phone :</p>
        <p>{data?.phone}</p>
        
        </div>
        <div className="address">
        <p>Website :</p>
        <p>{data?.website}</p>
        
        </div>
      <h1>Company :</h1>
      <div className="address">
        <p>Name :</p>
        <p>{data?.company?.name}</p>
        
        </div>
        <div className="address">
        <p>Catchphrase :</p>
        <p>{data?.company?.catchPhrase}</p>
        
        </div>
        <div className="address">
        <p>bs :</p>
        <p>{data?.company?.bs}</p>
        
        </div>
        
      </div>
      
      <div className="profile_details">
     
        <h1>Address :</h1>
        <div className="address">
        <p>Street :</p>
        <p>{data?.address?.street}</p>
        
        </div>
        <div className="address">
        <p>Suite :</p>
        <p>{data?.address?.suite}</p>
        
        </div>
        <div className="address">
        <p>City :</p>
        <p>{data?.address?.city}</p>
        
        </div>
        <div className="address">
        <p>Zipcode :</p>
        <p>{data?.address?.zipcode}</p>
        
        </div>
      </div>
    </div>

  
  

      
    </>
  );
};

export default Profile;
