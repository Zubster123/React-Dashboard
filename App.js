import './App.css';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className='flex'>
      <div className='basis-[20%] h-[100vh] border'>
        <Sidebar />
      </div>
      <div className='basis-[80%]'>
        <Dashboardview />
      </div>


    </div>

  );
}

export default App;
