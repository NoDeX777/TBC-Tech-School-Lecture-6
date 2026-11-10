import React from 'react';
import Badge from './Badge.jsx';

/**
 * თემა 4: მონაცემთა მასივის მიღება Props-ით და ტაბულარული რენდერინგი
 */
function CourseDataTable({ courses }) {
  if (!courses || courses.length === 0) {
    return <p style={{ color: '#718096' }}>კურსების სია ცარიელია.</p>;
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
        <thead>
          <tr style={{ backgroundColor: '#edf2f7', borderBottom: '2px solid #cbd5e0' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>კურსის სახელი</th>
            <th style={{ padding: '10px' }}>ლექტორი</th>
            <th style={{ padding: '10px' }}>სტატუსი</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>#{course.id}</td>
              <td style={{ padding: '10px' }}>{course.title}</td>
              <td style={{ padding: '10px' }}>{course.mentor}</td>
              <td style={{ padding: '10px' }}>
                <Badge
                  label={course.statusLabel}
                  variant={course.statusVariant}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseDataTable;

