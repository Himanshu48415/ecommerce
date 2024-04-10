import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProducts from '../Components/RealtedProducts/RelatedProducts';

const Product = () => {
    {/* <Route path="/products/:productId"> */}

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    {console.log(productId)}
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div className='product'>
            <BreadCrums product={product}/>
            <ProductDisplay product={product}/>
            <DiscriptionBox/>
            <RelatedProducts/>
            
        </div>
    );
}

export default Product;
