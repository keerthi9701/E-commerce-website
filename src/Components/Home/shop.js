import {useNavigate} from 'react-router-dom';
function Products() {
  const product = [{
    name: 'APPLE iPhone 14 (Blue, 128 GB)',
    imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
    price: '58999',
    category: 'mobile',
    iscart: false,
    specifications: [
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '12MP + 12MP | 12MP Front Camera',
      '5000 mAh Battery',
      'A15 Bionic Chip, 6 Core Processor Processor',
      '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
    ]
  },
  {
    name: 'POCO C55 (Forest Green, 64 GB)  (4 GB RAM)',
    imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/6/f/-original-imagnb6nvnqz7hqq.jpeg?q=70',
    price: '13999',
    iscart: false,
    specifications: [
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '12MP + 12MP | 12MP Front Camera',
      '5000 mAh Battery',
      'A15 Bionic Chip, 6 Core Processor Processor',
      '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
    ]
  },
  {
    name: 'vivo T2x 5G (Aurora Gold, 128 GB)  (8 GB RAM)',
    imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70',
    price: '14999',
    iscart: false,
    specifications: [
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '12MP + 12MP | 12MP Front Camera',
      '5000 mAh Battery',
      'A15 Bionic Chip, 6 Core Processor Processor',
      '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
    ]
  },
  {
    name: 'vivo T2x 5G (Marine Blue, 128 GB)  (6 GB RAM)',
    imgsrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70',
    price: '15999',
    iscart: false,
    specifications: [
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '12MP + 12MP | 12MP Front Camera',
      '5000 mAh Battery',
      'A15 Bionic Chip, 6 Core Processor Processor',
      '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories'
    ]
  }
  ]
  let cart = [];
  if (localStorage.getItem('Cart-items')) {
    cart = JSON.parse(localStorage.getItem('Cart-item'));
    product.forEach(product=>{
      cart.forEach(cartproduct => {
        if(product.name===cart.name){
          product.iscart='true';
        }
      });

      });
    }
  
    const navigate=useNavigate();
  let addToCart = (index) => {
    console.log('Add product to cart...', index);
    product[index].iscart='true';
    cart.push(product[index]);
    localStorage.setItem('cart-items',JSON.stringify(cart));
    navigate('/cart');
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {product.map((product, index) => (
            <div className="row my-4 py-4border-bottom">
              <div className="col-sm-3 px-5">
                <img src={product.imgsrc} className="img-fluid" alt="product Image"></img>
              </div>
              <div className="col-sm-6">
                <h3><Link to={'/product-details/${product.name}?productName=${product.name}'} style={{text}}></Link></h3>
                <ul>
                  {product.specifications.map((specification) => (
                    <li key={specification}>{specification}</li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-3">
                <h3>{product.price}</h3>
                {product.iscart ?
                  (<button className="btn btn-primary" onClick={() => addToCart(index)}>Go to cart</button>) :
                  (<button className="btn btn-primary" onClick={() => addToCart(index)}>Add to cart</button>)}
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}
export default Products;