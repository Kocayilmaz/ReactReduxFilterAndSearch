import React, { useState } from 'react';
import { Card, Image, Text, Button, Group, Skeleton } from '@mantine/core';
import './CustomCard.css';

export const CustomCard = ({ imageLink, title, desc, buttonText }) => {
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
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className="card-title">{title}</Text>
        </Group>
      )}

      {!loaded ? (
        <Skeleton height={12} mt="sm" />
      ) : (
        <Text size="sm" c="dimmed" className="card-desc">
          {desc}
        </Text>
      )}

      {!loaded ? (
        <Skeleton height={36} mt="md" radius="md" />
      ) : (
        <Button color="blue" fullWidth mt="md" radius="md">
          {buttonText}
        </Button>
      )}
    </Card>
  );
};
