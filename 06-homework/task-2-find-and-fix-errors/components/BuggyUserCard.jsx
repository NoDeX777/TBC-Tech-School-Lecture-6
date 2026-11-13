import React from 'react';

/**
 * დავალება 2: შეასწორე შეცდომები (Task 2: Find & Fix Errors)
 * 
 * ⚠️ ყურადღება: ამ კომპონენტში დაშვებულია შეცდომები!
 * იხილეთ ვორდის ფაილი შეცდომების ზუსტი რაოდენობის გასაგებად.
 */

// შეცდომა 1: კომპონენტის სახელი იწყება პატარა ასოთი (React თვლის ჩვეულებრივ HTML ტეგად)
function buggyUserCard(props) {
  // შეცდომა 5: Props-ის მუტაცია! React-ში Props არის Read-Only (მხოლოდ წაკითხვადი)
  // props.score = props.score + 5; // <-- ეს აკრძალულია!

  return (
    // შეცდომა 2: გამოყენებულია class= ნაცვლად className=-ისა
    // შეცდომა 7: style გადაცემულია სტრიქონად და არა ობიექტად
    <div
      class="student-card"
      style={{
        border: '1px solid #cbd5e0',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#ffffff',
        marginBottom: '16px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* შეცდომა 3: img ტეგი არ არის დახურული (self-closing <img ... />) */}
        <img
          src={props.avatar || 'https://via.placeholder.com/60'}
          alt={props.name}
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />

        <div>
          <h4 style={{ margin: 0, color: '#1e293b' }}>{props.name}</h4>
          <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '13px' }}>
            როლი: {props.role}
          </p>
        </div>
      </div>

      <div style={{ marginTop: '12px', fontSize: '14px' }}>
        <p style={{ margin: '4px 0' }}>ქულა: <strong>{props.score}</strong> / 100</p>
      </div>

      {/* საგნების სია */}
      {props.subjects && (
        <div style={{ marginTop: '10px' }}>
          <span style={{ fontSize: '12px', color: '#64748b' }}>საგნები:</span>
          <ul style={{ paddingLeft: '20px', margin: '6px 0 0 0', fontSize: '13px' }}>
            {props.subjects.map((subj) => (
              // შეცდომა 6: .map()-ით რენდერინგისას აკლია უნიკალური key პროპი!
              <li>{subj}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default buggyUserCard;

