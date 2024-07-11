// CustomCard.js
import React, { useState } from 'react';
import { Card, Image, Text, Skeleton } from '@mantine/core';
import './CustomCard.css';

export const CustomCard = ({ imageLink, title, desc }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="big-box">
      <Card.Section>
        {!loaded && <Skeleton height={160} />}
        <Image
          src={imageLink}
          alt={title}
          className="card-image"
          style={{ display: loaded ? 'block' : 'none' }}
          onLoad={() => setLoaded(true)}
        />
      </Card.Section>

      {!loaded ? (
        <Skeleton height={20} mt="md" />
      ) : (
        <Text fw={500} className="card-title" mt="md" mb="xs">{title}</Text>
      )}

      {!loaded ? (
        <Skeleton height={12} mt="sm" />
      ) : (
        <Text size="sm" color="dimmed" className="card-desc">
          {desc}
        </Text>
      )}
    </Card>
  );
};
