import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-1000"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center 
          gap-3 shadow-lg bg-black rounded-3xl px-3 py-2">
            <button 
              onClick={() => setcolor("red")}
              className="outline-none px-4 py-1 
              rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>red</button>
            <button 
              onClick={() => setcolor("white")}
              className="outline-none px-4 py-1 
              rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>white</button>
            <button 
              onClick={() => setcolor("blue")}
              className="outline-none px-4 py-1 
              rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
            <button 
              onClick={() => setcolor("pink")}
              className="outline-none px-4 py-1 
              rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>pink</button>
            <button 
              onClick={() => setcolor("cyan")}
              className="outline-none px-4 py-1 
              rounded-full text-white shadow-lg" style={{backgroundColor: "cyan"}}>cyan</button>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
