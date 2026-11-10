import React from 'react';

/**
 * თემა 3: Footer კომპონენტი
 * საიტის ძირი (Footer)
 */
function Footer() {
  return (
    <footer style={{
      marginTop: '40px',
      padding: '20px',
      borderTop: '1px solid #e2e8f0',
      textAlign: 'center',
      color: '#718096',
      fontSize: '14px'
    }}>
      <p style={{ margin: '0 0 6px 0' }}>
        © 2026 TBC Tech School. ყველა უფლება დაცულია.
      </p>
      <small>
        შექმნილია React კომპონენტების იერარქიის სადემონსტრაციოდ.
      </small>
    </footer>
  );
}

export default Footer;

