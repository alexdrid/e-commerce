import axios from 'axios'
import { Button, Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const ProductModal = ({ open, close, productId }) => {

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        console.log('useEffect', open, productId);
        const fetchProducts = async () => {
            const { data } = await axios.get(`/api/products/${productId}`)
            setProduct(data)
            // setLoading(false)
        }

        if(open) {
            fetchProducts()
        }
    }, [open, productId])

    const addToCart = () => {
        console.log('added to cart');
    }

    return (
        product && 
        <Modal
            show={open}
            onClose={close}
            size="5xl"
            position='top-center'
        >
            <Modal.Header>
                {product.name}
            </Modal.Header>
            <Modal.Body>
                <p>{product.description}</p>
                <p className="font-bold">${product.price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addToCart} disabled={product.count === 0}>
                    <svg
                        className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className='ml-3'>Add to Cart</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal