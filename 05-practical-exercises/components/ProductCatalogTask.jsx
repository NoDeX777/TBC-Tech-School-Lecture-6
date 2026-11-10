import React from 'react';

/**
 * სავარჯიშო 2: პროდუქტის ბარათი (კომპონენტების კომპოზიცია & Props)
 * 
 * დავალება სტუდენტებისთვის:
 * 1. დაშალეთ ონლაინ მაღაზიის ელემენტი პატარა კომპონენტებად.
 * 2. გამოთვალეთ ფასდაკლებული ფასი JSX-ში.
 * 3. შეამოწმეთ მარაგში არსებობა (In Stock / Out of Stock).
 * 4. მიიღეთ და გამოიძახეთ addToCart ფუნქცია Props-იდან.
 */
function ProductCard({ product, onAddToCart }) {
  const { id, title, price, discountPercent = 0, inStock, category } = product;

  // ფასდაკლების გამოთვლა
  const finalPrice = discountPercent > 0
    ? (price - (price * discountPercent) / 100).toFixed(2)
    : price.toFixed(2);

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: inStock ? '#ffffff' : '#f7fafc',
      opacity: inStock ? 1 : 0.7,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
    }}>
      <div>
        <span style={{ fontSize: '11px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {category}
        </span>
        <h4 style={{ margin: '6px 0 8px 0', color: '#2d3748', fontSize: '16px' }}>
          {title}
        </h4>

        <div style={{ margin: '8px 0' }}>
          {discountPercent > 0 ? (
            <div>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#e53e3e', marginRight: '8px' }}>
                {finalPrice} ₾
              </span>
              <span style={{ textDecoration: 'line-through', color: '#a0aec0', fontSize: '14px' }}>
                {price.toFixed(2)} ₾
              </span>
              <span style={{ marginLeft: '8px', fontSize: '11px', backgroundColor: '#fed7d7', color: '#9b2c2c', padding: '2px 6px', borderRadius: '4px' }}>
                -{discountPercent}%
              </span>
            </div>
          ) : (
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d3748' }}>
              {price.toFixed(2)} ₾
            </span>
          )}
        </div>
      </div>

      <div style={{ marginTop: '14px' }}>
        {inStock ? (
          <button
            onClick={() => onAddToCart(product)}
            style={{
              width: '100%',
              backgroundColor: '#3182ce',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '13px'
            }}
          >
            კალათაში დამატება 🛒
          </button>
        ) : (
          <button
            disabled
            style={{
              width: '100%',
              backgroundColor: '#e2e8f0',
              color: '#a0aec0',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'not-allowed',
              fontSize: '13px'
            }}
          >
            მარაგი ამოიწურა
          </button>
        )}
      </div>
    </div>
  );
}

function ProductCatalogTask({ products, onAddToCart }) {
  return (
    <div>
      <h3 style={{ color: '#2d3748', marginBottom: '14px' }}>
        პროდუქციის კატალოგი (კომპონენტების კომპოზიცია)
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px'
      }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogTask;

