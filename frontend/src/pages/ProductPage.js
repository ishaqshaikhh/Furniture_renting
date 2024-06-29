import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import styles from '../styles/productPage.module.css'

const ProductPage = () => {

    const [category, setCategory] = useState('');

    const [filter, setFilter] = useState('');

    const [drop, setDrop] = useState(Array(3).fill(false));
    
    const handleDrop = (index) => {
        const newDrop = [...drop]
        newDrop[index] = !newDrop[index]
        setDrop(newDrop)
    }



    return (
        <>
            <div className={`${styles.page} container-fluid padd-x`}>
                <div className="d-flex justify-content-end align-items-center">
                    <div class="dropdown" onClick={() => {handleDrop(0)}}>
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
                    <div class="dropdown" onClick={() => {handleDrop(1)}}>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage
