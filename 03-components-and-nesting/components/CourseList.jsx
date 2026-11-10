import React from 'react';
import CourseCard from './CourseCard.jsx';

/**
 * თემა 3: CourseList კომპონენტი
 * 
 * კომპონენტების ჩაშენების (Nesting) დემონსტრაცია:
 * CourseList კომპონენტი თავის შიგნით იყენებს და ჩააშენებს CourseCard კომპონენტებს.
 */
function CourseList() {
  return (
    <div>
      <h3 style={{ color: '#2d3748', borderBottom: '1px solid #edf2f7', paddingBottom: '8px' }}>
        პოპულარული კურსები (CourseCard კომპონენტების ჩაშენება)
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '16px',
        marginTop: '12px'
      }}>
        {/* ხელახლა გამოყენებადი CourseCard კომპონენტები ერთმანეთში ჩაშენებული */}
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default CourseList;

