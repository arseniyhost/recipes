import React, { useState } from 'react';
import { ListGroup, Row } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import { InputGroup, InputGroupAddon, Input, Spinner } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './List.module.css';

const useStyles = makeStyles({
    card: {
      width: 600,
    },
    media: {
      height: 300,
    },

    // cardImg: {
    //     width: 600,
    //     height
    // }
  });

const List = ({ loading, recipes, onChangeRecipe, props }) => {

    const classes = useStyles();

    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState("");

    let updateSearch = (e) => {
        setSearch(e.target.value.substr(0, 20));
    }

    let onChangeCategories = (smallCat) => {
        setCategories(smallCat);
    }

    if (loading) {
        return <Spinner style={{ width: '3rem', height: '3rem' }} />
    }

    let filterRecipe = recipes.filter(
        (recipe) => {
            return recipe.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
    );

    return (
        <Row>
            <InputGroup>
                <InputGroupAddon addonType="prepend">Поиск</InputGroupAddon>
                <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} />
            </InputGroup>
            <div className={style.containerList}>
                <div>
                    {
                        filterRecipe.map((r) => {
                            return <Card className={style.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={style.media}
                                        image={r.urlPhoto}
                                        title={r.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <h3>{r.title}</h3>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {r.description.substring(0, 25) + " . . ."}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/recipe/${r.id}`}>Смотреть</NavLink>
                                    </Button>
                                </CardActions>
                            </Card>

                        })
                    }
                </div>
            </div>
        </Row>
    );
}


export default List;