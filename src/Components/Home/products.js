import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([
        {
            name: 'vivo T2x 5G (Marine Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70',
            price: 12999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages:[
              'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70',
              'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/m/o/-original-imagzjhwcbb6yugf.jpeg?q=70',
              'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/w/y/-original-imagzjhwgakvhahv.jpeg?q=70',
              'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/o/j/-original-imagzjhwmgbkvrt9.jpeg?q=70',
              'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/o/x/-original-imagzjhwu4fg2hth.jpeg?q=70',
              'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/c/m/-original-imagzjhwhefz7xh9.jpeg?q=70',

            ],
            inCart: false
        },
        {
            name: 'APPLE iPhone 14 (Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
            price: 58998,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages:[
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/7/h/-original-imagtc5fyznz42bx.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/v/k/-original-imagtc5fx9jzazdy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/h/z/-original-imagtc5fbxefnjtj.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/s/1/-original-imagtc5fxxhhgtrz.jpeg?q=70',

            ],
            inCart: false
        },
        {
            name: 'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
            price: 17159,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages:[
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/c/f/-original-imagg2abpjwyyvqg.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/i/e/-original-imagm27ghg9hz8zw.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/4/9/-original-imagg2abgspv4shz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/s/1/-original-imagg2abwxamn32y.jpeg?q=70',
            ],
            inCart: false
        },
        {
            name: 'SAMSUNG Galaxy F14 5G (OMG Black, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
            price: 12490,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages:[
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/b/t/-original-imagtywahysgub6f.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/6/3/-original-imagtyxbqmzcyjcz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/f/a/-original-imagtyxbz7krqgn4.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/o/3/-original-imagtyxctmdzmvvn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/z/t/-original-imagtyxcg5sukgb7.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/z/k/-original-imagtyxcmvth6eez.jpeg?q=70',

            ],
              inCart: false
        }
    ]);
    let cartProducts = [];
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            cartProducts = JSON.parse(localStorage.getItem('cart'));
            const temp = products.map(product => {
                const isExist = cartProducts.find(cProduct => product.name === cProduct.name);
                if (isExist) {
                    product.inCart = true;
                    return product;
                }
                return product;
            });
            setProducts(temp);
        }
    }, []);
    const addToCart = (index) => {
        if (localStorage.getItem('cart')) {
            cartProducts = JSON.parse(localStorage.getItem('cart'));
        }
        cartProducts = [...cartProducts,{...products[index], quantity:1}];
        localStorage.setItem('cart', JSON.stringify(cartProducts));
        navigate('/cart');
    };
    const goToCart = () => {
        navigate('/cart');
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {products.map((product, index) => (
                        <div className="row my-4 py-4 border-bottom" key={product.name}>
                            <div className="col-sm-3 px-5">
                                <img src={product.imgSrc} className="img-fluid" alt={product.name}/>
                            </div>
                            <div className="col-sm-6">
                                <h3><Link to={`/product-details/${product.name}?productName=${product.name}&price=${product.price}`} style={{textDecoration: 'none'}} className="text-success">{product.name}</Link></h3>
                                <ul>
                                    {product.specifications.map((specification) => (
                                        <li key={specification}>{specification}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h3>{product.price}</h3>
                                {product.inCart ? (
                                    <button className="btn btn-success" onClick={() => goToCart()}>Go to Cart</button>
                                ): (
                                    <button className="btn btn-primary" onClick={() => addToCart(index)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;