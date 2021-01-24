import React from 'react';
import MemberCard from '../membercard/membercard.component';
import elektrik from '../../assets/elektrik.svg';
import './division.styles.scss';


const Division = () => {
  return (
    <div class="division">
        <img src={elektrik} />
        <div class="division_name">Electrical Division</div>
        <div class="division_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nihil. Delectus eum ullam in ipsum molestiae maxime iure dicta nihil pariatur quaerat. Explicabo accusantium soluta voluptatibus cupiditate cum impedit iure?</div>
        <div class="division_container">
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
        </div>
        
    </div>
  );
};

export default Division;