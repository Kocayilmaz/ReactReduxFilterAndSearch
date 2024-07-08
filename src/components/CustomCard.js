import React from 'react';
import { Card, Image, Text, Button, Group } from '@mantine/core';
import './CustomCard.css';

export const CustomCard = ({ imageLink, title, desc, buttonText }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="big-box">
      <Card.Section>
        <Image
          src={imageLink}
          alt={title}
          className="card-image"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} className="card-title">{title}</Text>
      </Group>

      <Text size="sm" c="dimmed" className="card-desc">
        {desc}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        {buttonText}
      </Button>
    </Card>
  );
};
