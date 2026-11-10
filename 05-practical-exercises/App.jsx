import React, { useState } from 'react';
import UserProfileTask from './components/UserProfileTask.jsx';
import ProductCatalogTask from './components/ProductCatalogTask.jsx';
import ModalWrapperTask from './components/ModalWrapperTask.jsx';

/**
 * სავარჯიშოების მთავარი აპლიკაცია
 */
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const sampleProducts = [
    { id: 1, title: 'React 19 სრული კურსი', price: 120, discountPercent: 20, inStock: true, category: 'ონლაინ კურსი' },
    { id: 2, title: 'JavaScript დეველოპერის წიგნი', price: 65, discountPercent: 0, inStock: true, category: 'წიგნები' },
    { id: 3, title: 'TBC Tech School ჰუდი', price: 80, discountPercent: 10, inStock: false, category: 'მერჩი' }
  ];

  const handleAddToCart = (product) => {
    setCartItemsCount(cartItemsCount + 1);
    alert(`კალათაში დაემატა: ${product.title}`);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ borderBottom: '2px solid #3182ce', paddingBottom: '12px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: '#2c5282', margin: 0 }}>პრაქტიკული სავარჯიშოები</h1>
          <p style={{ color: '#718096', margin: '6px 0 0 0' }}>ლექცია 3: JSX, კომპონენტები და Props</p>
        </div>
        <div>
          <span style={{ backgroundColor: '#edf2f7', padding: '8px 14px', borderRadius: '20px', fontWeight: 'bold' }}>
            🛒 კალათა: {cartItemsCount}
          </span>
        </div>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ color: '#2b6cb0' }}>სავარჯიშო 1: მომხმარებლის პროფილი</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <UserProfileTask
            username="ლუკა მაისურაძე"
            role="Junior Frontend დეველოპერი"
            isOnline={true}
            bio="React-ის შესწავლა ჩემი საყვარელი პროცესია!"
            skills={['React', 'JavaScript', 'CSS3']}
          />
          <UserProfileTask
            username="ანა კობახიძე"
            isOnline={false}
            bio="TBC Tech School სტუდენტი"
            skills={['HTML5', 'Git', 'UI/UX']}
          />
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <ProductCatalogTask products={sampleProducts} onAddToCart={handleAddToCart} />
      </section>

      <section style={{ marginBottom: '32px', padding: '20px', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
        <h2 style={{ color: '#2b6cb0', marginTop: 0 }}>სავარჯიშო 3: მოდალური ფანჯრის Wrapper (children)</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: '#805ad5',
            color: 'white',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          მოდალის გახსნა (Modal Demo)
        </button>

        <ModalWrapperTask
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="TBC Tech School მოდალი"
        >
          <p>ეს კონტენტი გადაეცემა <strong>children</strong> პროპის მეშვეობით!</p>
          <div style={{ backgroundColor: '#ebf8ff', padding: '10px', borderRadius: '6px', borderLeft: '4px solid #3182ce' }}>
            კომპონენტის შიგნით შეგიძლიათ ჩასვათ ნებისმიერი ფორმა, ღილაკი ან სხვა კომპონენტი.
          </div>
        </ModalWrapperTask>
      </section>
    </div>
  );
}

export default App;

