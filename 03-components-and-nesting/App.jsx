import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import CourseList from './components/CourseList.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

/**
 * თემა 3-ის მთავარი აპლიკაციის კომპონენტი
 * 
 * კომპონენტების იერარქია (Component Tree):
 * App
 *  ├── Navbar
 *  ├── HeroBanner
 *  ├── Content Layout (grid)
 *  │    ├── CourseList
 *  │    │    ├── CourseCard
 *  │    │    ├── CourseCard
 *  │    │    └── CourseCard
 *  │    └── Sidebar
 *  └── Footer
 */
function App() {
  return (
    <div style={{ maxWidth: '960px', margin: '20px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      {/* 1. ზედა ნავიგაცია */}
      <Navbar />

      {/* 2. მთავარი ბანერი */}
      <HeroBanner />

      {/* 3. ძირითადი შინაარსი და გვერდითი პანელი */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }}>
        {/* მთავარი სექცია: კურსების სია, რომელიც თავისთავად ჩააშენებს CourseCard-ებს */}
        <main>
          <CourseList />
        </main>

        {/* გვერდითი პანელი */}
        <Sidebar />
      </div>

      {/* 4. საიტის ძირი */}
      <Footer />
    </div>
  );
}

export default App;

