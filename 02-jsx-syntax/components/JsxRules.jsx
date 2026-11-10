import React from 'react';

/**
 * თემა 2: JSX-ის ძირითადი წესები (JSX Rules)
 * 
 * 1. კომპონენტმა უნდა დააბრუნოს ერთი მშობელი ელემენტი (ან Fragment <> </>).
 * 2. ყველა ტეგი აუცილებლად უნდა დაიხუროს (მაგ: <img />, <input />, <br />).
 * 3. ატრიბუტები იწერება camelCase-ით (მაგ: className, htmlFor, onClick).
 * 4. სტილები (inline styles) გადაეცემა JavaScript ობიექტის სახით: style={{ ... }}.
 */
function JsxRules() {
  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const highlightStyle = {
    backgroundColor: '#ebf8ff',
    color: '#2b6cb0',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'monospace'
  };

  return (
    // React Fragment-ის გამოყენება, რათა არ შეიქმნას ზედმეტი div DOM-ში
    <React.Fragment>
      <div style={cardStyle}>
        <h3 style={{ color: '#2b6cb0', marginTop: 0 }}>1. JSX-ის ძირითადი წესები</h3>
        
        <ul style={{ lineHeight: '1.8' }}>
          <li>
            <strong>ერთი მშობელი ელემენტი:</strong> JSX ყოველთვის უნდა იყოს შეფუთული ერთ მშობელ ტეგში ან{' '}
            <span style={highlightStyle}>&lt;&gt;...&lt;/&gt;</span> (Fragment)-ში.
          </li>
          <li>
            <strong>დახურული ტეგები:</strong> ჩვეულებრივი HTML-ისგან განსხვავებით, ტეგები აუცილებლად უნდა დაიხუროს, მაგ:{' '}
            <span style={highlightStyle}>&lt;input /&gt;</span>, <span style={highlightStyle}>&lt;br /&gt;</span>
          </li>
          <li>
            <strong>className 'class'-ის ნაცვლად:</strong> რადგან 'class' რეზერვირებული სიტყვაა JavaScript-ში, ვიყენებთ{' '}
            <span style={highlightStyle}>className</span>-ს.
          </li>
          <li>
            <strong>htmlFor 'for'-ის ნაცვლად:</strong> &lt;label&gt; ტეგში ვიყენებთ{' '}
            <span style={highlightStyle}>htmlFor</span>-ს.
          </li>
          <li>
            <strong>Inline Styles:</strong> იწერება ორმაგ ფრჩხილებში{' '}
            <span style={highlightStyle}>{'style={{ color: "blue", fontSize: "16px" }}'}</span>
          </li>
        </ul>

        {/* Self-closing ტეგისა და htmlFor-ის პრაქტიკული მაგალითი */}
        <div style={{ marginTop: '12px', background: '#f7fafc', padding: '12px', borderRadius: '6px' }}>
          <label htmlFor="studentInput" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            სტუდენტის სახელი (htmlFor დემონსტრაცია):
          </label>
          <input
            id="studentInput"
            type="text"
            placeholder="შეიყვანეთ სახელი..."
            className="student-text-field"
            style={{
              padding: '8px 12px',
              border: '1px solid #cbd5e0',
              borderRadius: '4px',
              width: '100%',
              maxWidth: '300px',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default JsxRules;

