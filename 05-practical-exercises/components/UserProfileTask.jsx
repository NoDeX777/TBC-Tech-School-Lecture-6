import React from 'react';

/**
 * სავარჯიშო 1: მომხმარებლის პროფილის ბარათი
 * 
 * დავალება სტუდენტებისთვის:
 * 1. გამოიყენეთ Props დესტრუქტურიზაცია.
 * 2. განსაზღვრეთ default prop ავატარისთვის (default placeholder სურათი).
 * 3. გამოიყენეთ პირობითი რენდერინგი ონლაინ სტატუსის საჩვენებლად (მწვანე/ნაცრისფერი წერტილი).
 * 4. გამოიტანეთ მომხმარებლის სოციალური ქსელების მასივი .map()-ით.
 */
function UserProfileTask({
  username,
  role = 'სტუდენტი',
  avatarUrl = 'https://via.placeholder.com/100',
  isOnline = false,
  bio,
  skills = []
}) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      maxWidth: '320px'
    }}>
      <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 12px' }}>
        <img
          src={avatarUrl}
          alt={username}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #3182ce'
          }}
        />
        {/* პირობითი რენდერინგი: ონლაინ/ოფლაინ ინდიკატორი */}
        <span style={{
          position: 'absolute',
          bottom: '2px',
          right: '2px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          backgroundColor: isOnline ? '#38a169' : '#a0aec0',
          border: '2px solid white'
        }} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 4px 0', color: '#2d3748' }}>{username}</h3>
        <p style={{ margin: '0 0 10px 0', color: '#718096', fontSize: '13px' }}>{role}</p>
        {bio && <p style={{ fontSize: '13px', color: '#4a5568', fontStyle: 'italic', margin: '0 0 12px 0' }}>"{bio}"</p>}
      </div>

      {skills.length > 0 && (
        <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '10px' }}>
          <strong style={{ fontSize: '12px', color: '#718096' }}>უნარები:</strong>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '6px' }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#ebf8ff',
                  color: '#2b6cb0',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 'bold'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfileTask;

