import { useState } from 'react';
import { Input } from 'antd';

function Search(props) {

    const {searchFood} = props;

    const [searchThisFood, setSearchThisFood] = useState("");
  
    const searchBarHandler = (event) => {
      setSearchThisFood(event.target.value)
      searchFood(event.target.value)
    }
  
   return (
      <div>
        <h1>Search: </h1>
        <Input value={searchThisFood} type="text" onChange={searchBarHandler} />
      </div>
    );
}

export default Search;