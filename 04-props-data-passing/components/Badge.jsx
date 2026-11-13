import React from 'react';

/**
 * თემა 4: Badge კომპონენტი
 * დემონსტრირება: Default Props და პირობითი სტილები Props-ის მიხედვით
 */
function Badge({ label, variant = 'info' }) {
  const getBadgeStyle = () => {
    switch (variant) {
      case 'success':
        return { backgroundColor: '#c6f6d5', color: '#feaa00ff', border: '1px solid #f4f40fff' };
      case 'warning':
        return { backgroundColor: '#feebc8', color: '#7b341e', border: '1px solid #fbd38d' };
      case 'danger':
        return { backgroundColor: '#fed7d7', color: '#742a2a', border: '1px solid #feb2b2' };
      case 'info':
      default:
        return { backgroundColor: '#bee3f8', color: '#2a4365', border: '1px solid #90cdf4' };
    }
  };

  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 10px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: '600',
      ...getBadgeStyle()
    }}>
      {label}
    </span>
  );
}

export default Badge;

