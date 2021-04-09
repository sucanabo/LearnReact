import {React,useRef,useState} from 'react';
import PropTypes from 'prop-types';
SearchForm.propTypes = {
    onSubmitForm: PropTypes.func
};
SearchForm.defaultProps = {
    onSubmitForm:null
}

function SearchForm(props) {
    const handleSearchTermChange = (e)=>{
        setSearchTerm(e.target.value);
        if(!onSubmitForm) return;
        
        if(typingRef.current){
            clearTimeout(typingRef.current);
        }
        
        typingRef.current = setTimeout(() => {
            onSubmitForm(e.target.value);
        }, 300);
    }
    const typingRef = useRef(null);
    const {onSubmitForm} = props;
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange}/>
        </div>
    );
}

export default SearchForm;