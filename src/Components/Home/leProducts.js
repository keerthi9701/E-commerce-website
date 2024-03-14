import React from 'react';

function LeProducts() {
  const leProducts = [
    {
      name: 'Royale',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/files/royale-black_1_360x.png?v=1698839751',
      price: 4999,
      alt: 'Royale',
    },
    {
      name: 'Rise Luxe',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/files/rise-steel-black_1_360x.png?v=1700205440',
      price: 1999,
      alt: 'Rise Luxe',
    },
    {
      name: 'Expedition',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/files/expedition-creamy-white_1_360x.png?v=1698733392',
      price: 2999,
      alt: 'Expedition',
    },
    {
      name: 'Xelor',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/files/xelor-black-basic_1_360x.png?v=1695806019',
      price: 3999,
      alt: 'Xelor',
    }
  ];
  
  return (
    <div className="container pt-5">
      <div className="row">
        {leProducts.map((product, index) => (
          <div className="col-sm-3" key={index}>
            <img src={product.imgsrc} className="img-fluid" alt={product.name}/>
            <h4>{product.name}</h4>
            <h4>Price: ₹{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeProducts;
    
    
    

