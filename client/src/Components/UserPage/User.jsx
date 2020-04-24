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
    
    const userRecipes = ownRecipes.filter( r => r.hasOwnProperty('idRecipe'));
    console.log(userRecipes);
    

    return (
        <div>
            <div>
                <h2>Account</h2>
                <h3>Hello {user.name}</h3>
            </div>
            <div>
                <p>Your own recipes:</p>
            </div>
            <div>
                {
                    userRecipes.map(r => {
                        if(user._id) {
                            if(r.idRecipe === user._id) {
                                return <div className={style.recipeChange}>
                                <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/recipe/${r.id}`}>
                                    <h3>{r.title}</h3>
                                </NavLink>
                                <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/updaterecipe`}>
                                    <Button color="success">Edit</Button>
                                </NavLink>
                                <div>
                                    <Button
                                        onClick={toggle}
                                        color="danger">
                                        Delete this recipe
                                    </Button>
                                    <Modal isOpen={modalWindow} toggle={toggle}>
                                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                        <ModalBody>
                                            Do you wanna delete this recipe?
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={(e) => { onDeleteClick(r._id); setTimeout(toggle(), 1000) }}>Yes</Button>{' '}
                                            <Button color="secondary" onClick={toggle}>No</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </div>
                           }
                        }
                        else {
                            if(r.idRecipe === user.id) {
                                return <div className={style.recipeChange}>
                                <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/recipe/${r.id}`}>
                                    <h3>{r.title}</h3>
                                </NavLink>
                                <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/updaterecipe`}>
                                    <Button color="success">Edit</Button>
                                </NavLink>
                                <div>
                                    <Button
                                        onClick={toggle}
                                        color="danger">
                                        Delete this recipe
                                    </Button>
                                    <Modal isOpen={modalWindow} toggle={toggle}>
                                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                        <ModalBody>
                                            Do you wanna delete this recipe?
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={(e) => { onDeleteClick(r._id); setTimeout(toggle(), 1000) }}>Yes</Button>{' '}
                                            <Button color="secondary" onClick={toggle}>No</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </div>
                           }
                        }
                    })
                }

                <div>
                    <NavLink to="/addrecipe">Add recipe</NavLink>
                </div>
            </div>
        </div>
    );
}

export default User;