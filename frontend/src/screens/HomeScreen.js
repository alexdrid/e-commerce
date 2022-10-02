import { Pagination } from 'flowbite-react'
import React, { useState } from 'react'
import Product from '../components/Product'
import { products } from '../products'


const HomeScreen = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const onPageChange = (page) => {
        setCurrentPage(page)
    }


    return (
        <div>

            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
                    <Product product={product} key={product.id}/>
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
}

export default HomeScreen