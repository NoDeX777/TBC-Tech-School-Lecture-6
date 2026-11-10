import React from 'react';

/**
 * თემა 2: სიების რენდერინგი (Rendering Lists & Keys)
 * 
 * JSX-ში მასივის ელემენტების გამოსატანად ვიყენებთ `.map()` მეთოდს.
 * თითოეულ ელემენტს აუცილებლად უნდა ჰქონდეს უნიკალური `key` პროპი,
 * რათა React-ის Virtual DOM-მა ზუსტად იცოდეს, რომელი ელემენტი შეიცვალა, დაემატა ან წაიშალა.
 */
function ListRendering() {
  const topics = [
    { id: 101, title: 'შესავალი React-ში', status: 'დასრულებული' },
    { id: 102, title: 'Virtual DOM & JSX სინტაქსი', status: 'მიმდინარე' },
    { id: 103, title: 'კომპონენტების კომპოზიცია', status: 'მომავალი' },
    { id: 104, title: 'Props - მონაცემთა გადაცემა', status: 'მომავალი' }
  ];

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'დასრულებული':
        return { backgroundColor: '#c6f6d5', color: '#22543d' };
      case 'მიმდინარე':
        return { backgroundColor: '#feebc8', color: '#7b341e' };
      default:
        return { backgroundColor: '#edf2f7', color: '#4a5568' };
    }
  };

  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px' }}>
      <h3 style={{ color: '#2b6cb0', marginTop: 0 }}>4. სიების რენდერინგი (.map() & key პროპი)</h3>
      <p>
        React-ში HTML-ის სიებს ვაგენერირებთ მასივის <code>.map()</code> მეთოდით:
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {topics.map((topic) => (
          <li
            key={topic.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              borderBottom: '1px solid #e2e8f0',
              backgroundColor: topic.status === 'მიმდინარე' ? '#fffaf0' : 'transparent'
            }}
          >
            <span>
              <strong>#{topic.id}</strong> {topic.title}
            </span>
            <span
              style={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '12px',
                fontWeight: 'bold',
                ...getStatusBadgeStyle(topic.status)
              }}
            >
              {topic.status}
            </span>
          </li>
        ))}
      </ul>

      <small style={{ color: '#718096' }}>
        * გაფრთხილება: არ გამოიყენოთ მასივის ინდექსი (index) key-დ, თუ სია დინამიურია და ელემენტების რიგითობა შეიძლება შეიცვალოს!
      </small>
    </div>
  );
}

export default ListRendering;

