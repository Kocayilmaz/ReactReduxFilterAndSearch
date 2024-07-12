import React, { useState, useEffect } from 'react';
import { Skeleton, Button } from '@mantine/core';
import { CloseButton } from '@mantine/core';

export const Navbar = ({ title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer); // Temizleme işlevi
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </>
      ) : (
        <div className="navbar">
          <ul>
            <li><a href="#" className="notification"><i className="cis-bell"></i></a></li>
            <li>
              <Button variant="filled" color="green" size='xs'  radius="xl">{title}</Button>
            </li>
            <li><CloseButton size='md' />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
