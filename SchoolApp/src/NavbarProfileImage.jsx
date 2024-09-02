import React, { useEffect, useState } from 'react';
import { storage } from './firebase/firebase';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

const NavbarProfileImage = ({ userId }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        // Fetch profile image URL directly from Firebase Storage
        const imageRef = storageRef(storage, `images/${userId}/profileImage`);
        const downloadUrl = await getDownloadURL(imageRef);

        setUrl(downloadUrl);
      } catch (error) {
        console.error('Error getting profile image URL:', error);
        // Handle the case where the image cannot be fetched or an error occurs
        // Set a default URL or handle it according to your requirements
        setUrl('/bilder/persona.icon.png');
      }
    };

    fetchProfileImage();
  }, [userId]);

  return (
    <img
      src={url || '/public/bilder/persona.icon.png'}
      alt="Profilbild"
      className="rounded-circle border"
      height="40px"
      width="40px"
      loading="lazy"
    />
  );
};

export default NavbarProfileImage;


  