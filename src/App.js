import Checkbox from './components/checkbox';
import RadioButton from './components/radiobutton';
import { ShoppingList } from './components/test';

function App() {
  return (
    <div className="App">
      <h2>Чекбокс </h2>
      <Checkbox />
      <hr color="green" />
      <ShoppingList />
      <hr color="green" />
      <h2>радио-кнопка </h2>
      <RadioButton />
      <hr color="green" />
    </div>
  );
}

export default App;
