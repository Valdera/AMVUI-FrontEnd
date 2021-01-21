import React from 'react';
import './membercard.styles.scss';
// import Image from 'react-bootstrap/Image';

const MemberCard = () => {
  return (
    <div className="membercard">
        <div class="container">
            <img src={'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg'} />
            <div class="container_bottom-left">Electrical Engineer</div>
        </div>
        
      
      {/* <h1>NAMA MEMBER</h1>
      <h3>Electrical Engineer</h3>
      <h3>Electrical Engineering 18</h3> */}
      
    </div>
  );
};

export default MemberCard;
