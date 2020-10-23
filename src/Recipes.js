import React from 'react';
import style from './recipe.model.css';

const Recipes =({title,calories,image,ingredients})=> {
    return (
        <div className={style.recipes}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(gred =>(
                    <li>
                        {gred.text}
                    </li>
                )
                    
            )}
            </ol>
            <p>{calories}</p>
            <img src={image} atl=""/>

        </div>
    );
        
    
}
export default Recipes;