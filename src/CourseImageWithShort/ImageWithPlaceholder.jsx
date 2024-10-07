import React, { useState } from 'react';

const ImageWithPlaceholder = ({ src, alt, placeholder }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && (
        <img 
          src={placeholder} 
          alt="Loading..." 
          style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
        />
      )}
      <img 
        src={src} 
        alt={alt} 
        style={{ display: isLoading ? 'none' : 'block', width: '150px', height: '150px', objectFit: 'cover' }} 
        onLoad={() => setIsLoading(false)} 
        onError={() => setIsLoading(false)} 
      />
    </div>
  );
};

export default ImageWithPlaceholder;
