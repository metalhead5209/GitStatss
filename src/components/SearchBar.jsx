import { React, useState, useContext } from 'react';
import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';
import { GitContext } from '../Context/context';
import { SearchBarWrapper, SearchErrorWrapper } from '../Wrappers';


const SearchBar = () => {
    const [ user, setUser ] = useState('');
    const { error, searchGitUser, loading } = useContext(GitContext);
    // console.log(error);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            searchGitUser(user);
            setUser('');
        } else if (!user) {
            alert('Please enter User Name')
        } else {}
    }
  return (
    <section className='global-section'>
        <SearchBarWrapper className='global-section-center'>
            {error.show && (
                <SearchErrorWrapper>
                    <p>This User Does Not Exist</p>
                </SearchErrorWrapper>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <FcSearch />
                    <input type='text' placeholder="enter username" value={user} onChange={(e) => setUser(e.target.value)}/>
                    {!loading && <button type='submit'>Submit</button>}
                    
                </div>
            </form>
        </SearchBarWrapper>
    </section>
    
        

  )
}

export default SearchBar