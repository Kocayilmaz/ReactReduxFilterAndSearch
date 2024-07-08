import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mantine/core';
import { Suggestions } from './Suggestions';

export const SuggestionsList = ({ head }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="suggestions">
            {loading ? (
                <>
                    <Skeleton height={20} width="40%" mb="sm" />
                    <div className="suggestions-list">
                        <Skeleton height={40} width="20%" mr="sm" />
                        <Skeleton height={40} width="20%" mr="sm" />
                        <Skeleton height={40} width="20%" mr="sm" />
                        <Skeleton height={40} width="20%" />
                    </div>
                </>
            ) : (
                <>
                    <h2>{head}</h2>
                    <Suggestions title={"Slider"} />
                    <Suggestions title={"Tutorial"} />
                    <Suggestions title={"Html"} />
                    <Suggestions title={"Prototyping"} />
                    <Suggestions title={"Css 3"} />
                </>
            )}
        </div>
    );
};
