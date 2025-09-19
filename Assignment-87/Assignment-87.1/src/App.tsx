import HappyTracker from './HappyTracker'
import SadTracker from './SadTracker'
import HappyIncrementor from './HappyIncrementor'
import SadIncrementor from './SadIncrementor'

const App = () => {
  return (
    <div className='p-2 space-y-2 flex flex-col items-center gap-40'>
      <div className="flex gap-5">
        <HappyTracker />
        <SadTracker />
      </div>
      <div className="flex gap-5 ">
        <HappyIncrementor />
        <SadIncrementor />
      </div>
    </div>
  )
}

export default App
