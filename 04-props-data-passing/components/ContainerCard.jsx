import React from 'react';

/**
 * თემა 4: სპეციალური 'children' Prop (Wrapper / Container Component)
 * 
 * როდესაც კომპონენტს ვხურავთ გახსნა-დახურვის ტეგებით:
 * <ContainerCard title="...">
 *   <p>ნებისმიერი შიგთავსი</p>
 * </ContainerCard>
 * 
 * შიგნით მოთავსებული ნებისმიერი JSX ელემენტი ავტომატურად გადაეცემა კომპონენტს
 * `children` პროპის სახით.
 */
function ContainerCard({ title, children, borderColor = '#3182ce' }) {
  return (
    <div style={{
      borderTop: `4px solid ${borderColor}`,
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
      marginBottom: '16px'
    }}>
      {title && (
        <h3 style={{ margin: '0 0 12px 0', color: '#2d3748', fontSize: '18px' }}>
          {title}
        </h3>
      )}

      {/* აქ ჩაჯდება მშობლის მიერ გადაცემული ნებისმიერი JSX ელემენტი */}
      <div style={{ color: '#4a5568' }}>
        {children}
      </div>
    </div>
  );
}

export default ContainerCard;

