import React, { useState } from 'react';
import StudentCard from './components/StudentCard.jsx';
import Badge from './components/Badge.jsx';
import ContainerCard from './components/ContainerCard.jsx';
import ActionButton from './components/ActionButton.jsx';
import CourseDataTable from './components/CourseDataTable.jsx';

/**
 * თემა 4-ის მთავარი აპლიკაციის კომპონენტი
 * დემონსტრაცია: Props-ის მეშვეობით მონაცემების გადაცემა მშობლიდან შვილ კომპონენტებში
 */
function App() {
  const [notification, setNotification] = useState('დააჭირეთ ღილაკებს ფუნქციის Props-ით გადაცემის შესამოწმებლად');

  // კურსების მონაცემთა მასივი
  const coursesData = [
    { id: 1, title: 'შესავალი React-ში', mentor: 'თიბისი მენტორი', statusLabel: 'მიმდინარე', statusVariant: 'warning' },
    { id: 2, title: 'Node.js & Express ბექენდი', mentor: 'დავით კ.', statusLabel: 'აქტიური', statusVariant: 'success' },
    { id: 3, title: 'PostgreSQL მონაცემთა ბაზები', mentor: 'ანა მ.', statusLabel: 'მომავალი', statusVariant: 'info' },
    { id: 4, title: 'შესავალი React-ში', mentor: 'თიბისი მენტორი', statusLabel: 'მიმდინარე', statusVariant: 'warning' },
    { id: 5, title: 'Node.js & Express ბექენდი', mentor: 'დავით კ.', statusLabel: 'აქტიური', statusVariant: 'success' },
    { id: 6, title: 'PostgreSQL მონაცემთა ბაზები', mentor: 'ანა მ.', statusLabel: 'მომავალი', statusVariant: 'info' }

  ];

  // მშობლის ფუნქციები, რომლებიც გადაეცემა შვილ კომპონენტს (ActionButton)
  const handleSuccessAction = () => {
    setNotification('შეტყობინება მშობელს: "წარმატებით შესრულდა!" (Callback Props მუშაობს!)');
  };

  const handleResetAction = () => {
    setNotification('შეტყობინება განულდა.');
  };

  return (
    <div style={{ maxWidth: '860px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ borderBottom: '2px solid #3182ce', paddingBottom: '12px', marginBottom: '24px' }}>
        <h1 style={{ color: '#2c5282', margin: 0 }}>თემა 4: Props - მონაცემების გადაცემა კომპონენტებს შორის</h1>
        <p style={{ color: '#718096', margin: '6px 0 0 0' }}>
          TBC Tech School - Full Stack Development (ლექცია 3)
        </p>
      </header>

      {/* 1. პრიმიტიული და რთული Props, Destructuring და Default Props */}
      <ContainerCard title="1. Props-ის გადაცემა და დესტრუქტურიზაცია (StudentCard)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {/* სტუდენტი 1: ყველა პროპით */}
          <StudentCard
            name="ნიკოლოზ ხუციშვილი"
            age={22}
            role="Frontend სტაჟიორი"
            isGraduated={false}
            skills={['JavaScript', 'React', 'HTML/CSS']}
            contact={{ email: 'nikoloz@example.com', city: 'თბილისი' }}
          />

          {/* სტუდენტი 2: იყენებს default prop role='სტუდენტი' */}
          <StudentCard
            name="მარიამ ჩხეიძე"
            age={24}
            isGraduated={true}
            skills={['React', 'Node.js', 'PostgreSQL', 'TypeScript']}
            contact={{ email: 'mariam@example.com', city: 'ბათუმი' }}
          />
          <StudentCard
            name="ნოდარ კიზირია"
            age={27}
            isGraduated={true}
            skills={['React', 'Node.js', 'PostgreSQL', 'TypeScript', "python", "llm engenering"]}
            contact={{ email: 'mariam@example.com', city: 'ბათუმი' }}
          />
        </div>
      </ContainerCard>

      {/* 2. სპეციალური 'children' Prop (Wrapper კომპონენტები) */}
      <ContainerCard title="2. სპეციალური 'children' Prop (ContainerCard)" borderColor="#805ad5">
        <p>
          ეს კონტეინერი თავად არის <code style={{ color: '#805ad5' }}>&lt;ContainerCard&gt;</code> კომპონენტი.
          ტეგებს შორის ჩაწერილი ნებისმიერი JSX ელემენტი (პარაგრაფები, ბეიჯები, ღილაკები)
          კომპონენტში შემოდის <strong>props.children</strong>-ის სახით!
        </p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <Badge label="React.js" variant="info" />
          <Badge label="Props Data Flow" variant="success" />
          <Badge label="Component Tree" variant="warning" />
        </div>
      </ContainerCard>

      {/* 3. ფუნქციების გადაცემა Props-ით (Callback Props) */}
      <ContainerCard title="3. ფუნქციის გადაცემა Props-ით (Callback Props)" borderColor="#38a169">
        <p style={{ margin: '0 0 12px 0' }}>
          მშობლის მდგომარეობა (State): <strong style={{ color: '#2b6cb0' }}>{notification}</strong>
        </p>

        <div>
          {/* ფუნქციების გადაცემა onClick პროპად */}
          <ActionButton
            label="შეტყობინების გაგზავნა"
            onClick={handleSuccessAction}
            variant="primary"
          />
          <ActionButton
            label="განულება"
            onClick={handleResetAction}
            variant="secondary"
          />
        </div>
      </ContainerCard>

      {/* 4. მასივის გადაცემა Props-ით */}
      <ContainerCard title="4. ობიექტების მასივის გადაცემა Props-ით (CourseDataTable)" borderColor="#dd6b20">
        <CourseDataTable courses={coursesData} />
      </ContainerCard>

      <footer style={{ marginTop: '30px', textAlign: 'center', color: '#a0aec0', fontSize: '13px' }}>
        TBC Tech School © Props & Unidirectional Data Flow
      </footer>
    </div>
  );
}

export default App;

