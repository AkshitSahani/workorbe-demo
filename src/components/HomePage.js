import React from 'react';
import {Button, Spinner, Header, Card, CardItem} from './common';

const HomePage = () => {
  return(
    <Card>
      <Header title="Workorbe" />
      <Button content="Provider" />
      <Button content="Seeker" />
    </Card>
  )
};

export default HomePage;
