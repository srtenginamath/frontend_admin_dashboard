import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const history = useNavigate();


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleClick(id, name) {
    history(`/profile/${id}`);
  }

  return (
    <>
      <div class="wrapper">
        <h3 className="heading">Select an account</h3>

        <ul class="list-group">
          {data.users.map((user) => (
            <>
              <li class="list-group-item">
                <img
                  src={user.profilepicture}
                  alt="image1"
                  class="list-group-image"
                />
                <span
                  class="list-group-text"
                  key={user.id}
                  onClick={() => handleClick(user.id)}
                >
                  {user.name}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Home;
