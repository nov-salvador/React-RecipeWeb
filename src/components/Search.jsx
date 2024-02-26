import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
function Search() {
  const [input, setInput] = useState('')
  const navigate = useNavigate();
  function submitHandler(e){
    navigate('/recipes/searched/' + input)
    e.preventDefault();
  }
  return (
    <form className="search-form" onSubmit={submitHandler}>
      <div>
        <FaSearch onClick={submitHandler}/>
        <input onChange={el => setInput(el.target.value)}type="text" className="search-input mono" placeholder="Search recipes" value={input}/>
      </div>
    </form>
  )
}

export default Search