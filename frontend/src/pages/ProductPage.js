import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import styles from '../styles/productPage.module.css'
import toast from 'react-hot-toast';
import FetchContext from '../context/Fetch/FetchContext';
import StateContext from '../context/state/StateContext';

const ProductPage = () => {

    const [category, setCategory] = useState('');
    const [filter, setFilter] = useState('');
    const { products } = useContext(StateContext)
    const { getAllProducts } = useContext(FetchContext)
    const [drop, setDrop] = useState(Array(3).fill(false));

    const handleDrop = (index) => {
        const newDrop = [...drop]
        newDrop[index] = !newDrop[index]
        setDrop(newDrop)
    }



    useEffect(() => {
        getAllProducts();
    }, [])


    // pagination code herere 
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8;

    // Calculate the current users to display
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentProduct = products.slice(indexOfFirstUser, indexOfLastUser);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / usersPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Next page handler
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };



    return (
        <>
            <div className={`${styles.page} container-fluid padd-x`}>
                <div className="d-flex justify-content-end align-items-center">
                    <div class="dropdown" onClick={() => { handleDrop(0) }}>
                        <input type="checkbox" class="dropdown__switch drop1" id="filter-switch" hidden />
                        <label for="filter-switch" class={`dropdown__options-filter ${drop[0] ? 'active' : ''}`}>
                            <ul class="dropdown__filter" role="listbox" tabindex="-1">
                                <li class="dropdown__filter-selected" aria-selected="true">
                                    Default option
                                </li>
                                <li>
                                    <ul class="dropdown__select">
                                        <li class="dropdown__select-option" role="option">
                                            Option 1
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 2
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 3
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 4
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 5
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </label>
                    </div>
                    <div class="dropdown" onClick={() => { handleDrop(1) }}>
                        <input type="checkbox" class="dropdown__switch drop2" id="filter-switch" hidden />
                        <label for="filter-switch" class={`dropdown__options-filter ${drop[1] ? 'active' : ''}`}>
                            <ul class="dropdown__filter" role="listbox" tabindex="-1">
                                <li class="dropdown__filter-selected" aria-selected="true">
                                    Default option
                                </li>
                                <li>
                                    <ul class="dropdown__select">
                                        <li class="dropdown__select-option" role="option">
                                            Option 1
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 2
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 3
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 4
                                        </li>
                                        <li class="dropdown__select-option" role="option">
                                            Option 5
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </label>
                    </div>
                </div>
                <div className="row">

                    {products && currentProduct.slice(0, 8).map((item, index) => {
                        return <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                            <ProductCard data={item} />
                        </div>
                    })}
                </div>

                <div className="d-flex justify-content-end align-items-end">
                    {products.length >= "8" ? <div className="d-flex justify-content-between align-items-center">
                        <div className={styles.pagination}>
                            <button onClick={previousPage} disabled={currentPage === 1} className={`${styles.btn} ${currentPage === 1 ? styles.disabled : ''}`}>Previous</button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`${styles.btn} ${currentPage === index + 1 ? styles.active : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button onClick={nextPage} disabled={currentPage === totalPages} className={`${styles.btn} ${currentPage === totalPages ? styles.disabled : ''}`}>Next</button>
                        </div>
                    </div> : null}
                </div>
            </div>
        </>
    )
}

export default ProductPage
