import React from 'react';

/**
 * თემა 3: Sidebar კომპონენტი
 * გვერდითი ბლოკი რესურსებითა და სასარგებლო ბმულებით
 */
function Sidebar() {
  const resources = [
    { id: 1, text: 'React-ის ოფიციალური დოკუმენტაცია', link: 'https://react.dev' },
    { id: 2, text: 'TBC Tech School პორტალი', link: '#' },
    { id: 3, text: 'ლექციის პრეზენტაცია', link: '#' }
  ];

  return (
    <aside style={{
      backgroundColor: '#f7fafc',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    }}>
      <h4 style={{ margin: '0 0 12px 0', color: '#2d3748' }}>სასარგებლო რესურსები</h4>
      
      <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
        {resources.map((item) => (
          <li key={item.id}>
            <a href={item.link} style={{ color: '#3182ce', textDecoration: 'none' }}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

