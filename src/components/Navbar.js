import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mantine/core';

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
                        <li><a href="#" className="notification"><i className="fas fa-bell"></i></a></li>
                        <li>
                            <div className="green-box">
                                <span className="green-box-text">{title}</span>
                            </div>
                        </li>
                        <li><a href="#" className="exit"><i className="fas fa-sign-out-alt"></i></a></li>
                    </ul>
                </div>
            )}
        </>
    );
};
