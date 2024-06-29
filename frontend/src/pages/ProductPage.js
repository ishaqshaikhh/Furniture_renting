import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import styles from '../styles/productPage.module.css'
import toast from 'react-hot-toast';

const ProductPage = () => {

    const [category, setCategory] = useState('');
    const [filter, setFilter] = useState('');
    const [products, setProducts] = useState('');

    const [drop, setDrop] = useState(Array(3).fill(false));

    const handleDrop = (index) => {
        const newDrop = [...drop]
        newDrop[index] = !newDrop[index]
        setDrop(newDrop)
    }


    const getAllProducts = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_API_URL + "/api/getAllProducts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const json = await response.json();
            const products = JSON.parse(json.context.products)
            if (json.success) {
                console.log(products);
                setProducts(products)
            } else {
                toast.error(json.error)
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

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

                    {products && products.map((item, index) => {
                        return <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <ProductCard  data={item} />
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default ProductPage
