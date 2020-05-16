import React, { useState } from 'react';
import { ListGroup, Row } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Spinner } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import style from './../List/List.module.css';
import { sortByCategory } from './../../common/sorts/sortByCategort';

const Category = ({ catString, recipes, onChangeRecipe }) => {
    const [search, setSearch] = useState("");

    let filterRecipe = recipes.filter(
        (recipe) => {
            return recipe.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
    );

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
                <div className={style.recipesCategory}>
                    <div className={style.allRecipes}>
                        {
                            catString === "Первые блюда" && <div>
                                <h2>Первые блюда</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Первые блюда', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                        {
                            catString === "Вторые блюда" && <div>
                                <h2>Вторые блюда</h2>
                                <div className={style.categoryContainer}>
                                    {
                                        filterRecipe.map(r => {
                                            return sortByCategory(r, 'Вторые блюда', onChangeRecipe);
                                        })
                                    }
                                </div>
                            </div>
                        }
                        {
                            catString === "Салаты" && <div>
                                <h2>Салаты</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Салаты', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                        {
                            catString === "Закуски" && <div>
                                <h2>Закуски</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Закуски', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                        {
                            catString === "Десерты" && <div>
                                <h2>Десерты</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Десерты', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                        {
                            catString === "Выпечка" && <div>
                                <h2>Выпечка</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Выпечка', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                        {
                            catString === "Соусы" && <div>
                                <h2>Соусы</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Соусы', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                        {
                            catString === "Напитки" && <div>
                                <h2>Напитки</h2>
                                {
                                    filterRecipe.map(r => {
                                        return sortByCategory(r, 'Напитки', onChangeRecipe);
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Row >
    )
}

export default Category;