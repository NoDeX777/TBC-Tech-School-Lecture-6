import React from 'react';

/**
 * თემა 1: რატომ React? - დეკლარაციული vs იმპერატიული მიდგომა
 * 
 * ეს კომპონენტი სტუდენტებს უხსნის განსხვავებას ტრადიციულ JavaScript DOM მანიპულაციასა (იმპერატიული)
 * და React-ის დეკლარაციულ მიდგომას შორის.
 */
function DeclarativeVsImperative() {
  // დეკლარაციული მონაცემი (State-ის იმიტაცია)
  const isUserLoggedIn = true;
  const username = "გიორგი";

  /*
   * იმპერატიული მიდგომა (Vanilla JS):
   * const div = document.createElement('div');
   * if (isUserLoggedIn) {
   *   div.innerText = 'მოგესალმებით, ' + username;
   * } else {
   *   div.innerText = 'გთხოვთ გაიაროთ ავტორიზაცია';
   * }
   * document.body.appendChild(div);
   * 
   * დეკლარაციული მიდგომა (React):
   * ჩვენ მხოლოდ აღვწერთ, თუ როგორი უნდა იყოს UI არსებული მონაცემის მიხედვით,
   * ხოლო DOM-ის შექმნასა და განახლებაზე React თავად ზრუნავს!
   */

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h3 style={{ color: '#2b6cb0' }}>1. დეკლარაციული UI-ის მაგალითი</h3>
      <p>
        <strong>React-ის ფილოსოფია:</strong> UI = f(state) — ინტერფეისი არის მონაცემების ასახვა.
      </p>
      
      <div style={{ background: '#f7fafc', padding: '12px', borderRadius: '6px' }}>
        {isUserLoggedIn ? (
          <p style={{ color: '#2f855a', fontWeight: 'bold' }}>
            მოგესალმებით, {username}! თქვენ წარმატებით შეხვედით სისტემაში.
          </p>
        ) : (
          <p style={{ color: '#c53030' }}>
            გთხოვთ გაიაროთ ავტორიზაცია.
          </p>
        )}
      </div>
    </div>
  );
}

export default DeclarativeVsImperative;

