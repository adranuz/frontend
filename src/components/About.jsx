import React from 'react';

const About = ({ address, email, website, phone }) => {
  return (
    <div className='About'>
      <h3 className='About-title'>Find Me</h3>
      <div className='About-item'>{address}</div>
      <div className='About-item'>{email}</div>
      <div className='About-item'>{website}</div>
      <div className='About-item'>{phone}</div>
    </div>
  );
};

export default About;
