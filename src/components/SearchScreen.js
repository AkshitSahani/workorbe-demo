import React from 'react';
import {Card, CardItem, Input } from './common';
import {Actions} from 'react-native-router-flux';

const SearchScreen = () => {
  return(
    <Card>
      <CardItem>
        <Input placeholder="Capability" focussed={()=>{Actions.FiltersScreen();}}/>
      </CardItem>
    </Card>
  )
};

export default SearchScreen;
