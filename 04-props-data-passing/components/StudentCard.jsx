import React from 'react';

/**
 * თემა 4: Props დესტრუქტურიზაცია, სხვადასხვა ტიპის მონაცემების მიღება და Default Props
 * 
 * Props (Properties) არის პარამეტრები, რომელსაც მშობელი კომპონენტი გადასცემს შვილ კომპონენტს.
 * Props არის Read-Only (მხოლოდ წაკითხვადი) — შვილ კომპონენტს არ შეუძლია თავისი props-ის შეცვლა.
 */
function StudentCard({
  name,
  age,
  role = 'სტუდენტი', // Default prop მნიშვნელობა
  isGraduated,
  skills,
  contact
}) {
  return (
    <div style={{
      border: '1px solid #cbd5e0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: '#2b6cb0', fontSize: '18px' }}>{name}</h4>
        <span style={{
          fontSize: '11px',
          padding: '2px 8px',
          borderRadius: '12px',
          backgroundColor: isGraduated ? '#c6f6d5' : '#feebc8',
          color: isGraduated ? '#22543d' : '#7b341e',
          fontWeight: 'bold'
        }}>
          {isGraduated ? 'კურსდამთავრებული ✓' : 'სწავლობს ⏳'}
        </span>
      </div>

      <p style={{ margin: '8px 0', fontSize: '14px', color: '#4a5568' }}>
        <strong>ასაკი:</strong> {age} | <strong>როლი:</strong> {role}
      </p>

      {contact && (
        <p style={{ margin: '4px 0', fontSize: '13px', color: '#718096' }}>
          <strong>ელ.ფოსტა:</strong> {contact.email} | <strong>ქალაქი:</strong> {contact.city}
        </p>
      )}

      {skills && skills.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <strong style={{ fontSize: '13px', color: '#2d3748' }}>უნარები (Array Prop):</strong>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#edf2f7',
                  color: '#2d3748',
                  fontSize: '12px',
                  padding: '2px 8px',
                  borderRadius: '4px'
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

export default StudentCard;

