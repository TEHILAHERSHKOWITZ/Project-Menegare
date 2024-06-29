import React, { FC } from 'react';
import {  useNavigate } from 'react-router-dom';
import './notification.styled.scss'
interface NotificationProps {}

const Notification: FC<NotificationProps> = () => {

      const navigate = useNavigate();
    
      const handleBackToProjects = () => {
        navigate('/'); // הנתיב לדף הפרויקטים שלך
      };

   return <div>
   <div className='notification'>
<div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>COMING SOON...</h1>
        <button onClick={handleBackToProjects} className="back-button">
          Back to Projects
        </button>
      </div>
    </div>  
     </div>
    </div>
}

export default Notification;
