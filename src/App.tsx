import React from 'react';
import { Column } from './Column';
import {Card} from './Card';
import { AppContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
        </Column>

        <Column text="In Progress">
        <Card text="Learn Typescript"></Card>
        </Column>

        <Column text="Done">
        <Card text="Begin to use static typing"></Card>
        </Column>
    </AppContainer>
  );
}

export default App;
