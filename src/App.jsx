import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400">Learn to integrate tailwind</h1>
      <div className='flex gap-4'>
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
