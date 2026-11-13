import React from 'react';

/**
 * თემა 2: JavaScript გამოსახულებები JSX-ში (Curly Braces { })
 * 
 * JSX-ის შიგნით ნებისმიერი JavaScript გამოსახულების (Expression) ჩასასმელად
 * ვიყენებთ ფიგურულ ფრჩხილებს: { JavaScript კოდი }.
 */
function JsxExpressions() {
  const courseName = "Full Stack Development";
  const currentLecture = 3;
  const totalLectures = 24;

  const student = {
    firstName: "ნინო",
    lastName: "ბერიძე",
    score: 95
  };

  // ფუნქცია, რომელიც გამოიძახება პირდაპირ JSX-ში
  const formatFullName = (first, last) => `${first} ${last}`;

  const calculateProgress = (current, total) => {
    return Math.round((current / total) * 100);
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h3 style={{ color: '#2b6cb0', marginTop: 0 }}>2. JavaScript გამოსახულებები JSX-ში {'{ }'}</h3>
      <p>
        ფიგურულ ფრჩხილებში შეგვიძლია მოვათავსოთ ცვლადები, მათემატიკური ოპერაციები და ფუნქციის გამოძახებები:
      </p>

      <div style={{ background: '#f7fafc', padding: '14px', borderRadius: '6px' }}>
        <p><strong>კურსი:</strong> {courseName.toUpperCase()}</p>
        <p><strong>სტუდენტი:</strong> {formatFullName(student.firstName, student.lastName)}</p>
        <p><strong>შეფასება:</strong> {student.score} / 100</p>
        <p><strong>ლექციის პროგრესი:</strong> {currentLecture} / {totalLectures} ({calculateProgress(currentLecture, totalLectures)}%)</p>
        <p><strong>მათემატიკური ოპერაცია (2 + 2):</strong> {2 + 2}</p>
      </div>
    </div>
  );
}

export default JsxExpressions;

