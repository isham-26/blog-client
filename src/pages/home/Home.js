import './Home.css'
import Header from "../../components/Header/Header"
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'

const Home = () => {
  return (
    <>
    <Header/>
     <div className="home">
      <Posts/>
      <Sidebar/>
     </div>
    </>
  )
}

export default Home