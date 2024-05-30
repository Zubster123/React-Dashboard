import './App.css';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="flex">
      <div className='basis-[15%] h-[100vh]'>
        <Sidebar />
      </div>
      <div className='basis-[85%] border'>
      <div className='basis-[15%] h-[100vh]'>
        <Dashboardview />
        <div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default App