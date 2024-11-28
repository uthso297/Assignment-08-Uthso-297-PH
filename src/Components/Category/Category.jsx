import PropTypes from 'prop-types';
const Category = ({cat , handleCat}) => {
    return (
    
            <button onClick={()=>handleCat(cat)}  className="bg-gray-400 w-[90%] rounded-3xl px-6 py-2 text-xl font-bold hover:bg-[#9538E2] flex items-center justify-center">{cat}{cat.includes('Smartwatch') ? 'es': 's'}</button>
        
    );
};

Category.propTypes ={
    cat: PropTypes.string,
    handleCat: PropTypes.func
}

export default Category;