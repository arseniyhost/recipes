import React from 'react';
import { Redirect } from 'react-router-dom';
import {Spinner} from 'reactstrap';
import ScrollTopButton from '../ScrollTop/ScrollTop';
import style from './Recipe.module.css';

const Recipe = (props) => {

    if(!props.newContent) {
        return <Redirect to="/recipes" />
    }

   
    return (
        <div className={style.containerRecipe}>
            <div className={style.mainInformation}>
                <RecipePresentasion newContent={props.newContent} />
                <RecipeInformation newContent={props.newContent} />
            </div>
            <ScrollTopButton />
        </div>
    )
}

const RecipePresentasion = ({ newContent }) => {
    return (
        <div>
            <div>
                <h2>{newContent.title}</h2>
            </div>
            <div className={style.contentImg}>
                <img src={newContent.urlPhoto} alt="recipePhoto" />
            </div>
        </div>
    )
}

const RecipeInformation = ({ newContent }) => {
    let i = 1, j = 1;
    return (
        <div>
            <div>
                <h3>Описание:</h3>
                <p>{newContent.description}</p>
            </div>
            <div className={style.ingredients}>
                <h3>Ингредиенты:</h3>
                <ul>
                    {newContent.Ingredients &&
                        newContent.Ingredients.map((ing, id) => {
                            return <li key={id}>{`${j++}. ${ing.nameOfProduct} - ${ing.amount} ${ing.type}`}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div>
                <h3>Пошаговое приготовление:</h3>
                {
                    newContent.instructions &&
                    newContent.instructions.map((ins, id) => {
                        return <div  key={id}>
                    <p>{`Шаг ${i++}`}</p>
                            <p>{ins.instructionsStep}</p>
                            {ins.photo && <div><img src={ins.photo} alt="photoIns" /></div>}
                        </div>
                    })
                }
                <div className={style.loveFood}>
                    <p>Приятного аппетита!</p>
                </div>
            </div>
        </div>
    )
}


export default Recipe;