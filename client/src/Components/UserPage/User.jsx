import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import style from './User.module.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const User = ({ user, ownRecipes, onChangeRecipe, onDeleteClick }) => {

    const [modalWindow, setWindow] = useState(false);

    const toggle = () => setWindow(!modalWindow);

    if (!user) {
        return <Redirect to="/" />
    }

    const userRecipes = ownRecipes.filter(r => r.hasOwnProperty('idRecipe'));
    console.log(userRecipes);

    return (
        <div className={style.wrapper}>
            <div className={style.titleUser}>
                <h2>Профиль</h2>
                <p className={style.nameUser}>Добро пожаловать {user.name}</p>
            </div>
            <div className={style.titleRecipes}>
                <p>Ваши рецепты</p>
            </div>
            <div className={style.allRecipes}>
                {
                    userRecipes.map(r => {

                        if (user._id) {
                            if (r.idRecipe === user._id) {
                                return <div className={style.recipeChange}>
                                    <div className={style.photoRecipe}>
                                        <img src={r.urlPhoto} alt="photo" />
                                    </div>
                                    <div className={style.aboveTitle}>
                                        <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/recipe/${r.id}`}>
                                            <h3>{r.title}</h3>
                                        </NavLink>
                                    </div>
                                    <div className={style.buttonModify}>
                                        <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/updaterecipe`}>
                                            <Button color="success">Редактировать</Button>
                                        </NavLink>
                                        <div className={style.btnDelete}>
                                            <Button
                                                onClick={(e) => { toggle(); onChangeRecipe(r.id) }}
                                                color="danger">
                                                Удалить
                                            </Button>
                                            <Modal isOpen={modalWindow} toggle={toggle}>
                                                <ModalHeader toggle={toggle}>Удаление</ModalHeader>
                                                <ModalBody>
                                                    Вы действительно хотите удалить этот рецепт?
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="primary" onClick={(e) => { onDeleteClick(r._id); setTimeout(toggle(), 1000) }}>Да</Button>{' '}
                                                    <Button color="secondary" onClick={toggle}>Нет</Button>
                                                </ModalFooter>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            }
                        }
                        else {
                            if (r.idRecipe === user.id) {
                                return <div className={style.recipeChange}>
                                    <div className={style.photoRecipe}>
                                        <img src={r.urlPhoto} alt="photo" />
                                    </div>
                                    <div className={style.aboveTitle}>
                                        <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/recipe/${r.id}`}>
                                            <h3>{r.title}</h3>
                                        </NavLink>
                                    </div>
                                    <div className={style.buttonModify}>
                                        <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/updaterecipe`}>
                                            <Button color="success">Редактировать</Button>
                                        </NavLink>
                                        <div className={style.btnDelete}>
                                            <Button
                                                onClick={(e) => { toggle(); onChangeRecipe(r.id) }}
                                                color="danger">
                                                Удалить
                                        </Button>
                                            <Modal isOpen={modalWindow} toggle={toggle}>
                                                <ModalHeader toggle={toggle}>Удаление</ModalHeader>
                                                <ModalBody>
                                                    Вы действительно хотите удалить этот рецепт?
                                            </ModalBody>
                                                <ModalFooter>
                                                    <Button color="primary" onClick={(e) => { onDeleteClick(r._id); setTimeout(toggle(), 1000) }}>Да</Button>{' '}
                                                    <Button color="secondary" onClick={toggle}>Нет</Button>
                                                </ModalFooter>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            }
                        }
                    })
                }

                <div>
                    <NavLink to="/addrecipe">Добавить рецепт</NavLink>
                </div>
            </div>
        </div>
    );
}

export default User;