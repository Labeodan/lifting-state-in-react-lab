
const BurgerStack = ({stack, removeFromStack}) => {
    return (
        <ul>
            {stack.length > 0 ? (
                stack.map((ingredient, i) => {
                    return (
                        <li 
                        key={`${ingredient.name}${i}`} 
                        style={{backgroundColor: `${ingredient.color}`}}
                        >
                        <p>{ingredient.name}</p>
                        <button onClick={() => removeFromStack(ingredient, i)}>-</button>
                        </li>
                    );
                })
            ) : (
                <li>Add ingredients</li>
            )}
        </ul>
    );
};
  
export default BurgerStack;

  