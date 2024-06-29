import React, { FC, useEffect, useState } from 'react';
import projectService from '../../services/project.service';
import axios from 'axios';
import './projectDetails.styled.scss'

interface ProjectDetailsProps {
     
      
}

const ProjectDetails: FC<ProjectDetailsProps> = (props:ProjectDetailsProps) => {
  const [menegare, setMenegare] = useState<any[]>([]);
  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('');
  const [projectDescription, setProjectDescription] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectService.getDetailsOfProjectMenegare();
        let data = response.data.results;
        if (!Array.isArray(data)) {
          data = [data];
        }

        setMenegare(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFetchUser = () => {
    projectService.getDetailsOfProjectMenegare()
      .then((response) => {
        const menegare = response.data.results[0];
        setUsername(`${menegare.name.first} ${menegare.name.last}`);
        setUserImage(menegare.picture.large);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };


   return    <div className="coming-soon-container">
   <div className="coming-soon-content">
     <h1>PROJECT DETAILS:</h1>
     <button className="back-button" onClick={handleFetchUser}>
       To view the details of the project click
     </button>
     {username && userImage && (
       <div className="user-details">
         <h2>{username}</h2>
         <img src={userImage} alt="User" />
       </div>
     )}
   </div>
 </div>
}

export default ProjectDetails;
