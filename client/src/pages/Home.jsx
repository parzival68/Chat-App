import { Sidebar, MessageContainer } from '../components/index.js'

const Home = () => {
  return (
    <div className="flex sm:h-[740px] sm:w-screen md:h-[740px] lg:h-[740px] lg:w-screen h-[740px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home