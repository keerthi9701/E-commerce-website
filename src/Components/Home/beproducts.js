import React from 'react'
function beProducts() {
  const beProducts = [
    {
      name:  'Gladiator (Ocean)',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/files/apollo-3-black_1_360x.png?v=1694778271',
      Salesprice: 1799,
      Actualprice: 9999,
      alt: 'Gladiator (Ocean)',
    },
    {
      name: 'Hunter',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/products/Invincible-PlusArtboard-23_360x.png?v=1678184824',
      Salesprice: 1599,
      Actualprice:14999,
      alt: 'Hunter',
    },
    {
      name: 'King',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/files/phoenix-amoled-ultra-ace-black_1_360x.png?v=1693887757',
      Salesprice: 1699,
      Actualprice:14999,
      alt: 'King',
    },
    {
        name: 'Visionary',
        imgsrc: 'https://www.fireboltt.com/cdn/shop/products/supernova-black_1_360x.png?v=1673500420',
        Salesprice: 1699,
        Actualprice:15999,
        alt: 'Visionary',
      },
     
    {
      name: 'SuperNova',
      imgsrc: 'https://www.fireboltt.com/cdn/shop/products/2_b7da70e6-b472-4a63-88ad-40cbab9cf6b6_360x.png?v=1679728617',
      Salesprice: 1599,
      Actualprice:9999,
      alt: 'SuperNova',
    },
    {
        name: 'Legacy',
        imgsrc: 'https://www.fireboltt.com/cdn/shop/files/phoenix-amoled-black_1_360x.png?v=1691728590',
        Salesprice: 1999,
        Actualprice:8999,
        alt: 'Legacy',
      },
      {
        name: 'Fire-Bolt Cobra',
        imgsrc: 'https://www.fireboltt.com/cdn/shop/files/black2_360x.png?v=1682748353',
        Salesprice: 1899,
        Actualprice:12999,
        alt: 'Fire-Bolt cobra',
      },
      {
        name: 'Phononix AMOLED',
        imgsrc: 'https://www.fireboltt.com/cdn/shop/products/cobra-black_2_bc61bedf-65c6-4178-80e7-ab30ed865917_360x.png?v=1674565291',
        Salesprice: 1599,
        Actualprice:9999,
        alt: 'Phenonix AMOLED',
      },
      
        
  ];
  
  return (
    <div>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_3d97a4a1-5a54-4baa-882c-0e8fa7759acf_1759x.jpg?v=1704198100" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_copy_adaad913-79de-4149-924c-bb6e706bb78e_1759x.jpg?v=1703484745" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Artboard_1_da546092-c2f4-4489-9a96-54b633905696.jpg?v=1681886684" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    <div className="container pt-5">
      <div className="row">
        {beProducts.map((product, index) => (
          <div className="col-sm-3" key={index}>
            <img src={product.imgsrc} className="img-fluid" alt={product.name} />
            <h4>{product.name}</h4>
            <h7>Salesprice:₹{product.Salesprice}</h7>
           <h6>Actualprice:₹{product.Actualprice}</h6>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default beProducts;