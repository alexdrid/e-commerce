import { Pagination, Spinner } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from "../actions/productActions.js";
import { getProducts } from '../slices/productsSlice.js';
import Product from "../components/Product";

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const { products, loading, error } = useSelector(state => state.productList)

    const onPageChange = (page) => {

    }
    const currentPage = 1

    return (
        loading ? (
            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner" size='xl' />
            </div>)
            : error ? (
                <div>
                    {error}
                </div>
            ) : (
                <div>

                    <div className="grid grid-cols-4 gap-4">
                        {products.map(product => (
                            <Product product={product} key={product._id} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                        showIcons={true}
                        totalPages={15}
                    />
                </div>
            )
    )
}

export default HomeScreen