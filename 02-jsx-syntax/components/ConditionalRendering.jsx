import React from 'react';

/**
 * თემა 2: პირობითი რენდერინგი (Conditional Rendering JSX-ში)
 * 
 * JSX-ში პირობების სამართავად ყველაზე ხშირად ვიყენებთ:
 * 1. Ternary Operator (პირობა ? ჭეშმარიტი : მცდარი)
 * 2. Logical AND Operator (პირობა && გამოსახულება)
 */
function ConditionalRendering() {
  const isUserEnrolled = false;
  const unreadMessagesCount = 4;
  const userRole = "admin"; // შესაძლო მნიშვნელობები: "admin", "student", "guest"

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h3 style={{ color: '#2b6cb0', marginTop: 0 }}>3. პირობითი რენდერინგი (Conditional Rendering)</h3>

      {/* 1. Ternary ოპერატორის მაგალითი */}
      <div style={{ marginBottom: '14px', padding: '10px', background: '#f7fafc', borderRadius: '6px' }}>
        <strong>სტატუსი (Ternary Operator ? :): </strong>
        {isUserEnrolled ? (
          <span style={{ color: '#2f855a', fontWeight: 'bold' }}>სტუდენტი ჩარიცხულია კურსზე ✓</span>
        ) : (
          <span style={{ color: '#c53030', fontWeight: 'bold' }}>კურსზე რეგისტრაცია არ არის დასრულებული ✗</span>
        )}
      </div>

      {/* 2. Logical AND (&&) ოპერატორის მაგალითი */}
      <div style={{ marginBottom: '14px', padding: '10px', background: '#f7fafc', borderRadius: '6px' }}>
        <strong>შეტყობინებები (Logical && Operator): </strong>
        {unreadMessagesCount > 0 && (
          <span style={{ backgroundColor: '#e53e3e', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
            თქვენ გაქვთ {unreadMessagesCount} წაუკითხავი შეტყობინება
          </span>
        )}
      </div>

      {/* 3. მრავალპირობიანი რენდერინგი (Ternary nesting ან ცალკე ლოგიკა) */}
      <div style={{ padding: '10px', background: '#f7fafc', borderRadius: '6px' }}>
        <strong>მომხმარებლის როლი: </strong>
        {userRole === 'admin' ? (
          <span style={{ color: '#805ad5', fontWeight: 'bold' }}>ადმინისტრატორი (სრული წვდომა)</span>
        ) : userRole === 'student' ? (
          <span style={{ color: '#3182ce', fontWeight: 'bold' }}>სტუდენტი (სასწავლო მასალებზე წვდომა)</span>
        ) : (
          <span style={{ color: '#718096' }}>სტუმარი (შეზღუდული წვდომა)</span>
        )}
      </div>
    </div>
  );
}

export default ConditionalRendering;

