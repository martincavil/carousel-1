import { data } from 'autoprefixer';
import { useState, useEffect} from 'react';
import './App.css';



function App() {
  const datas = [
    {
      id: 1,
      title: "1. Bitcoin",
      desc: "Description 1",
      image: "/assets/bitcoin.svg"
    },
    {
      id: 2,
      title: "2. Car",
      desc: "Description 2",
      image: "/assets/car.svg"
    },
    {
      id: 3,
      title: "3. Cloud",
      desc: "Description 3",
      image: "/assets/cloud.svg"
    },
    {
      id: 4,
      title: "4. Engineering",
      desc: "Description 4",
      image: "/assets/engineering.svg"
    },
    {
      id: 5,
      title: "5. Writer",
      desc: "Description 5",
      image: "/assets/writer.svg"
    } 
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1 ) % datas.length);
    }, 3000)
  });

  return (
    <div className="App">
      <div className='bg-blue-900 h-screen'>
        <div className="container py-12 px-[10%] m-auto ">
          <div className="flex flex-col items-center justify-center">
            <h2 className='text-yellow-500 text-xl font-extrabold mb-8'>Nos solutions</h2>
            <h3 className='text-3xl font-extrabold text-white mb-8'>Notre méthode de recrutement</h3>
          </div>
          <div className='grid grid-cols-3 gap-8'>
            <div className="grid-span-1">

    {datas.map((data, i) => {
      const isActive = (i === index);

      

      let className = "";

      if (i === index) {
        className =' flex text-white';
      } else {
        className = 'hidden'
      }
      return (  
              <div>
                <ul>
                  <li className={isActive ? 'mb-8 cursor-pointer border-l-4 p-4 border-blue-500' : 'mb-8 cursor-pointer border-l-4 p-4 border-blue-800'}>
                    <h4 className={isActive ?'text-white font-extrabold mb-2' : 'text-white font-semibold mb-2'}>{data.title}</h4>
                    <p className={className}>{data.desc}</p>
                  </li>
                </ul>
                <img src={data.image} className={isActive ? 'flex w-full h-48 z-30 absolute top-80 left-48' : 'hidden'} alt="voila"/>
              </div>
            )
            
          })}
            </div>
            <div className="grid-span-2 w-[700px] h-[500px] bg-blue-800 rounded-xl relative flex items-center">
              <div className="absolute top-0 right-0 left-0 w-full h-8 rounded-t-xl bg-blue-600 flex items-center justify-start space-x-2 pl-4">
                <div className="rounded-full h-3 w-3 bg-red-500"></div>
                <div className="rounded-full h-3 w-3 bg-yellow-500"></div>
                <div className="rounded-full h-3 w-3 bg-green-500"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
