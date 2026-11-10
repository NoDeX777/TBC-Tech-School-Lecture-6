import React from 'react';

/**
 * თემა 1: Virtual DOM-ის კონცეფცია
 * 
 * Virtual DOM არის რეალური DOM-ის მსუბუქი ასლი (JavaScript Object) მეხსიერებაში.
 * როდესაც კომპონენტის მონაცემები იცვლება:
 * 1. იქმნება ახალი Virtual DOM ხე.
 * 2. Diffing ალგორითმი ადარებს ძველ და ახალ Virtual DOM-ს (Reconciliation).
 * 3. მხოლოდ ის ნაწილები იცვლება რეალურ DOM-ში, რომლებიც რეალურად შეიცვალა.
 */
function VirtualDomExplanation() {
  // აი როგორ გამოიყურება Virtual DOM-ის ელემენტი JavaScript ობიექტის სახით:
  const virtualDomNodeExample = {
    type: 'div',
    props: {
      className: 'card',
      children: [
        { type: 'h4', props: { children: 'სათაური' } },
        { type: 'p', props: { children: 'Virtual DOM-ის ტექსტი' } }
      ]
    }
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h3 style={{ color: '#2b6cb0' }}>2. როგორ მუშაობს Virtual DOM?</h3>
      <p>
        Virtual DOM არ ანახლებს მთლიან გვერდს (Browser Repaint / Reflow ძვირი ოპერაციაა).
        ის პოულობს მხოლოდ სხვაობას (Diff) და აკეთებს მინიმალურ ჩარევას Real DOM-ში.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
        <div style={{ background: '#feebc8', padding: '12px', borderRadius: '6px' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#7b341e' }}>Real DOM</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li>პირდაპირი წვდომა ბრაუზერის ხესთან</li>
            <li>განახლება ნელია და მოითხოვს გადახატვას (Repaint)</li>
            <li>მეხსიერების დიდი მოხმარება</li>
          </ul>
        </div>

        <div style={{ background: '#c6f6d5', padding: '12px', borderRadius: '6px' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#22543d' }}>Virtual DOM (React)</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li>მსუბუქი JavaScript ობიექტი მეხსიერებაში</li>
            <li>ძალიან სწრაფი შედარება (Diffing)</li>
            <li>რეალურ DOM-ში იგზავნება მხოლოდ ცვლილება (Batch update)</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '16px', background: '#edf2f7', padding: '12px', borderRadius: '6px' }}>
        <p style={{ margin: '0 0 6px 0', fontWeight: 'bold' }}>
          Virtual DOM-ის სტრუქტურის ილუსტრაცია მეხსიერებაში:
        </p>
        <pre style={{ margin: 0, fontSize: '12px', color: '#2d3748' }}>
          {JSON.stringify(virtualDomNodeExample, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default VirtualDomExplanation;

