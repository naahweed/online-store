import { useState } from "react";
const Search=({search,onSearch})=>{
    
    const HandleSearch=(event)=>{
        
        onSearch(event)
    }
    return(<>
    <label htmlFor="search">Search</label>
    <input type="text" id="search" onChange={HandleSearch} value={search}/>
    
    </>)

}
export default Search;