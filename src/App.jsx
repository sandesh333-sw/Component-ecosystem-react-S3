import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
    <>

    <Header />
      <h1 className="text-blue-600 dark:text-sky-400">Learn to integrate tailwind</h1>
      <div className='flex gap-4'>
        <Card 
          title='Buy Python course'
          buttonText='join now' 
          imageUrl="https://media.istockphoto.com/id/1340516764/photo/empty-classroom-ready-for-pupils.jpg?s=2048x2048&w=is&k=20&c=Utnq9LnSoVro9b9rl1blTcjI1apDd3oDZOK6JUpplPA="
          />
        <Card
          title='Buy Node.js course'
          buttonText='join today' 
          imageUrl="https://media.istockphoto.com/id/2203424023/photo/businesswoman-leading-seminar-activities-with-flipchart-at-convention.jpg?s=2048x2048&w=is&k=20&c=uOrVBdM2q5Z39gdkiBKyJVFwQwC25jQueguHPeH7aHE="
        />
      </div>
    </>
  )
}

export default App
