import { Button, Card } from 'flowbite-react'
import React, { useState } from 'react'
import ProductModal from './ProductModal'

const Product = ({ product }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const onOpenModal = () => {
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false)
    }

    return (

        <div className="max-w-sm">
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    I am the best
                </p>
                {/* <Button href={`/product/${[product.id]}`}>
                    Read more
                    <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button> */}
                <Button onClick={onOpenModal}>
                    Read more
                    <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button>
                <ProductModal
                    open={modalOpen}
                    close={onModalClose}
                    header={product.name}
                    body={product.description}
                    price={product.price}
                    count={product.count}
                />
            </Card>
        </div>
    )
}

export default Product