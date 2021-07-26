import { Column } from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext'

const App = () => {

  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i}/>
      ))}

      {/* <Column text="In Progress">
        <Card text="Learn Typescript"></Card>
      </Column>

      <Column text="Done">
        <Card text="Begin to use static typing"></Card>
      </Column> */}

      <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => console.log(text)} />
    </AppContainer>
  );
}

export default App;
