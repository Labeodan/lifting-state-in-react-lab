import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  // state variables
  const [stack, setStack] = useState([])

  const addToStack = ({name, color}) => {
    const newIngredient = [...stack, {
      name: name, 
      color: color
    }]

    setStack(newIngredient)
    console.log("added to stack")
  }

  const removeFromStack = (ingredient, index) => {
    const removeIngredient = stack.filter((_, i) => i !== index)

    setStack(removeIngredient)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList addToStack={addToStack}/>
        <BurgerStack stack={stack} removeFromStack={removeFromStack}/>
      </section>
    </main>
  );
};

export default App;
