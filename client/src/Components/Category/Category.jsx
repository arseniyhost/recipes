import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import style from './../List/List.module.css';
import { sortByCategory } from './../../common/sorts/sortByCategort';

const Category = ({ catString, recipes, onChangeRecipe }) => {
    const [search, setSearch] = useState("");

    let filterRecipe = recipes.filter(
        (recipe) => {
            return recipe.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
    );

    let categoryArray = filterRecipe.map(r => {
        return sortByCategory(r, `${catString}`, onChangeRecipe);
    });


    let updateSearch = (e) => {
        setSearch(e.target.value.substr(0, 20));
    }

    return (
        <Row>
            <InputGroup>
                <InputGroupAddon addonType="prepend">Поиск</InputGroupAddon>
                <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} />
            </InputGroup>
            <div className={style.containerList}>
                <Row>
                    <div className={style.recipesCategory}>
                        <div className={style.allRecipes}>
                            {
                                <div>
                                    <h2>{`${catString}`}</h2>
                                    <div className={style.categoryArrays}>
                                        {
                                            categoryArray
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </Row>
            </div>
        </Row >
    )
}

export default Category;