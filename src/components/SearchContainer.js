import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mantine/core';

export const SearchContainer = ({ head, title, desc }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 saniye bekletme süresi

        return () => clearTimeout(timer); // Temizleme işlevi
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <Skeleton height={32} mb="xl" width="50%" />
                    <div className="search-container">
                        <Skeleton height={40} width={100} mr="sm" />
                        <Skeleton height={40} width="70%" />
                    </div>
                </>
            ) : (
                <>
                    <h1 className="greeting">{head}</h1>
                    <div className="search-container">
                        <select className="filter">
                            <option value="all">{title}</option>
                        </select>
                        <input type="text" placeholder={desc} className="search-input" />
                    </div>
                </>
            )}
        </>
    );
};
