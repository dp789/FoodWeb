import React,{useEffect,useState} from 'react';
//import useState from "react";
import Recipes from "./Recipes";
import './App.css';


const App=()=> {
  const APP_ID="08e11436";
  const APP_KEY="65333459a85bb7eba33d87aef1575493";
  //const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  //const [counter,setCounter]=useState(0);

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('chicken')
  useEffect( ()=>{
     getRecipies();
  },[query]);
  
  const getRecipies= async() =>
  {
    const response=await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
  };
 const updateSearch=e=>{
   setSearch(e.target.value);
  // console.log(search);
 }
const getSearch = e =>{
 e.preventDefault();
 setQuery(search);
 setSearch('');
}

  return (
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">
      search
      </button>
    </form>
    <div className="recipies">
    {recipes.map(recipes=>(
      <Recipes
      key={recipes.recipe.label}
      title={recipes.recipe.label}
      calories={recipes.recipe.calories}
      image={recipes.recipe.image}
      ingredients={recipes.recipe.ingredients}
      />

    ))};
    </div>
   </div>
  );
}

export default App;
