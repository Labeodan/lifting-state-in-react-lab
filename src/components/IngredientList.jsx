import { availableIngredients } from "../App";
const IngredientList = ({addToStack}) => {
    return (
        <ul>
            {availableIngredients.map((ingredient) => {
                return (
                    <li 
                    key={ingredient.name} 
                    style={{backgroundColor: `${ingredient.color}`}}
                    >
                        <p>{ingredient.name}</p>
                        <button onClick={() => addToStack(ingredient)}>+</button>
                    </li>
                )
            })}
        </ul>
    )
  };
  
  export default IngredientList;
  