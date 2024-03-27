// pages/404.tsx

import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Image from 'next/image';

const Custom404: NextPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>~ 404 ~</h1>
      <p style={{ textAlign: 'center', marginTop: '30px' }}>this page is either in the workings or simply does not exist :/</p>
      <div>
        <Image
          src="/images/main/hi.gif"
          alt="Hello GIF"
          width={300} // Adjust width as needed
          height={200} // Adjust height as needed
        />
      </div>
    </div>
  );
};

export default Custom404;
