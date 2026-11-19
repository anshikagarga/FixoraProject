
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-[60vh] flex items-center justify-center flex-col text-center gap-4'>
        <h1 className='text-6xl font-bold text-purple-400'>404 - Page Not Found</h1>
        <p className='text-gray-400'>Sorry, the page you are looking for doesn't exist</p>
        <Link to="/"  className='bg-purple-600 px-7 py-4 rounded-lg hover:bg-purple-700 transition duration-300' >Go to Home</Link>
    </div>
  )
}

export default NotFound