import React from 'react';

/**
 * დავალება 2-ის დამხმარე კომპონენტი შეცდომებით
 */
function BuggyNotification({ message, type }) {
  // შეცდომა 4: კომპონენტი აბრუნებს რამდენიმე sibling ელემენტს ერთიანი მშობლის / Fragment-ის გარეშე!
  // შეცდომა 7: style გადაცემულია სტრიქონად (style="...") ნაცვლად ობიექტისა (style={{...}})
  return (
    <div style={{ backgroundColor: '#fef3c7', padding: '10px 14px', borderRadius: '6px', borderLeft: '4px solid #f59e0b' }}>
      <strong style={{ color: '#92400e' }}>შეტყობინება: </strong>
      <span>{message}</span>
    </div>
  );
}

export default BuggyNotification;

