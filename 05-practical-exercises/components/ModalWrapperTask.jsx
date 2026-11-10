import React from 'react';

/**
 * სავარჯიშო 3: მოდალური ფანჯრის Wrapper (children & callback props)
 * 
 * დავალება სტუდენტებისთვის:
 * 1. გამოიყენეთ `children` prop მოდალის დინამიური კონტენტის მისაღებად.
 * 2. გამოიყენეთ `isOpen` prop პირობითი რენდერინგისთვის (თუ false-ია, კომპონენტი აბრუნებს null-ს).
 * 3. გამოიძახეთ `onClose` callback ფუნქცია დახურვის ღილაკზე დაჭერისას.
 */
function ModalWrapperTask({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '480px',
        padding: '20px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
          <h3 style={{ margin: 0, color: '#2d3748' }}>{title}</h3>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              color: '#a0aec0',
              fontWeight: 'bold'
            }}
          >
            ✕
          </button>
        </div>

        {/* აქ ჩაჯდება props.children */}
        <div style={{ padding: '16px 0' }}>
          {children}
        </div>

        <div style={{ textAlign: 'right', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#e2e8f0',
              color: '#4a5568',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            დახურვა
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWrapperTask;

