import React from 'react';

/**
 * თემა 3: HeroBanner კომპონენტი
 * წარმოადგენს გვერდის მთავარ ვიზუალურ ბანერს
 */
function HeroBanner() {
  return (
    <div style={{
      backgroundColor: '#ebf8ff',
      borderLeft: '5px solid #3182ce',
      padding: '20px',
      borderRadius: '6px',
      marginBottom: '20px'
    }}>
      <h2 style={{ margin: '0 0 8px 0', color: '#2b6cb0' }}>
        გახდი Full Stack დეველოპერი
      </h2>
      <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
        ისწავლე React კომპონენტური არქიტექტურა, დაყავი რთული ინტერფეისი მცირე,
        მარტივ და ხელახლა გამოყენებად ნაწილებად!
      </p>
    </div>
  );
}

export default HeroBanner;

