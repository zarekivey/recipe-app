import React from 'react';

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
        console.log(this.props);
        return (
            <div>Recipe</div>
        );
    }
};

export default Recipe;