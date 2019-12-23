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
                                <img src="https://www.2mm.ru/uploads/img_cache/a9a/a9a44fef427bedf751bfbaf49278bb38_800x600.jpg" alt="" />
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Вторые блюда">
                                <h3>Вторые блюда</h3>
                                <img src="https://s1.1zoom.me/b4652/504/The_second_dishes_Vienna_sausage_Potato_Wood_520555_1920x1080.jpg" alt="" />
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Салаты">
                                <h3>Салаты</h3>
                                <img src="https://dinne.ru/wp-content/uploads/2015/05/978969887untitled.jpg" alt="" />
                            </NavLink>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Закуски">
                                <h3>Закуски</h3>
                                <img src="https://ratatum.com/wp-content/uploads/2018/11/tartaletki.jpg" alt="" />
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Десерты">
                                <h3>Десерты</h3>
                                <img src="https://images4.alphacoders.com/614/thumb-1920-614209.jpg" alt="" />
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Выпечка">
                                <h3>Выпечка</h3>
                                <img src="https://w-dog.ru/wallpapers/4/19/484006232855770.jpg" alt="" />
                            </NavLink>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Соусы">
                                <h3>соусы</h3>
                                <img src="http://3.bp.blogspot.com/-feWMOSH8UGc/UGCSnt3MeMI/AAAAAAAAAJs/Dqe0D5I0Hl4/s1600/DSC09798.JPG" alt="" />
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes/Напитки">
                                <h3>напитки</h3>
                                <img src="https://images3.alphacoders.com/687/687283.jpg" alt="" />
                            </NavLink>
                        </div>
                        <div className={style.itemRecipe}>
                            <NavLink to="/recipes">
                                <h3>все рецепты</h3>
                                <img src="https://images6.alphacoders.com/812/812268.jpg" alt="" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
