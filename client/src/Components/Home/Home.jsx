import React from 'react';
import style from './Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className={style.homePage}>
            <div className={style.mainBlock}>
                <div className={style.dishesPhoto}>
                    <img src="https://smachno.ua/wp-content/uploads/2018/11/30/rybnye-blyuda.jpg" alt="dishes" />
                </div>
                <div className={style.textAbout}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione amet, excepturi facilis cumque ducimus aliquam aperiam recusandae molestias modi harum inventore! Molestiae quidem at pariatur error, alias recusandae quam consectetur incidunt architecto sunt, rem sed suscipit impedit fugiat omnis non aliquam? Saepe, eaque in. Voluptatibus nobis unde optio reiciendis rem!
               </div>
            </div>

            <div className={style.categories}>
                <h2>Репецты</h2>
                <div className={style.containerCategories}>
                    <div className={style.box}>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Первые блюда">
                                <h3>Первые блюда</h3>
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Вторые блюда">
                                <h3>Вторые блюда</h3>
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Салаты">
                                <h3>Салаты</h3>
                            </NavLink>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Закуски">
                                <h3>Закуски</h3>
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Десерты">
                                <h3>Десерты</h3>
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Выпечка">
                                <h3>Выпечка</h3>
                            </NavLink>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Соусы">
                                <h3>соусы</h3>
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Напитки">
                                <h3>напитки</h3>
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes">
                                <h3>все рецепты</h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
