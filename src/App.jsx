import './App.css'

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400">Learn to integrate tailwind</h1>
      <div className='max-w-sm bg-white  border border-gray-200 rounded-xl mt-8'>
        <img 
          className='w-full h-48 object-cover'
          src="https://images.pexels.com/photos/31203664/pexels-photo-31203664.jpeg" alt="Sample image" />

        <div className='p-4'>
          <h2 className='text-lg font-semibold text-gray-800'>Card Title</h2>
          <p className='mt-2 text-gray-600 text-sml'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas esse facere aspernatur voluptatibus molestias!</p>
          <button
          className='mt-4 px-4 bg-blue-400 rounded-lg text-white py-2 hover:bg-blue-700'
          >Buy Now</button>
        </div>
      </div>

    </>
  )
}

export default App
