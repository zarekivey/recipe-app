import React from 'react';
import { Link } from 'react-router-dom'

const API_KEY = '6758a76f591881b7ab6373393990d59b'

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
        // data from the api
        const res = await req.json();
        this.setState({ activeRecipe: res.recipes[0] });
        console.log(this.state.activeRecipe);
    }
    render () {
        const recipe =this.state.activeRecipe;
        return (
           <div className="container">
            { this.state.activeRecipe.length !== 0 &&
                <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h3 className="active-recipe__title">{ recipe.title }</h3>
                    <h4 className="active-recipe__publisher">
                        Publisher: <span>{ recipe.publisher }</span>
                    </h4>
                    <p className="active-recipe__website">Visit:
                        <span><a href={recipe.source_url}>{recipe.source_url}</a></span>
                    </p>
                    <Link to="/" className="active-recipe__button">Go Home</Link>
                </div>

            }
           </div>
        );
    }
};

export default Recipe;