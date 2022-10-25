import { React, useState } from 'react';
import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';
import { GitContext } from '../Context/context';
import { SearchBarWrapper } from '../Wrappers';


const SearchBar = () => {
    const [ user, setUser ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            
        }
    }
  return (
    <section className='global-section'>
        <SearchBarWrapper className='global-section-center'>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <FcSearch />
                    <input type='text' placeholder="enter username" value={user} onChange={(e) => setUser(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </SearchBarWrapper>
    </section>
    
        

  )
}

export default SearchBar