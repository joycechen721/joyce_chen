import React from 'react';
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
          alt="hi gif"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Custom404;
