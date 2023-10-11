import React from 'react';
import notFoundPic from '../../Images/notFound.png';

const NotFoundPage = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '-1',
  };

  return <img src={notFoundPic} alt="Page Not Found" style={imageStyle} />;
};

export default NotFoundPage;
