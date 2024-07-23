import { useState , useEffect, useCallback , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [Color, setColor] = useState("white")
  const [txt, settxt] = useState("black")
  const [mode, setmode] = useState("dark")
  
  const [length, setlength] = useState(8)
  const [numbox, setnumbox] = useState(true)
  const [chrbox, setchrbox] = useState(true)
  const [password, setpassword] = useState("")

  const passwordref = useRef(null)

  const passgenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numbox) str+= "0123456789"
    if(chrbox) str+= "/*-!@#$%^&*()"
    
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  },[length,numbox,chrbox,setpassword])

  const copytoclip = useCallback(()=>{
    passwordref.current?.select()
    //passwordref.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  function changeColor(){
    if(mode === "dark"){
      setColor("black")
      settxt("white")
      setmode("light")
    }else if(mode === "light"){
      setColor("white")
      settxt("black")
      setmode("dark")
    }
  }

  useEffect(()=>{
    passgenerator()
  },[length,chrbox,numbox,setpassword])
  return (
    <>
      <div className="w-full h-screen duration-300"
      style={{backgroundColor: Color}}>

        <h1 className='py-12 text-4xl text-center'
        style={{color: txt}}
        >Password Generator</h1>

        <div className="w-full max-w-md mx-auto shadow-md
         rounded-xl px-4 py-3 my-8 text-500 "
         style={{color: Color,backgroundColor: txt}}>
          <div 
          className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
              style={{ backgroundColor: 'lightgray',color: 'black' }} // Crystal transparent
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordref}
            />
            <button 
            onClick={copytoclip}
            className='outline-none bg-700 px-3 py-0.5 shrink-0'
            style={{backgroundColor: Color, color: txt }}
            >copy</button>
          </div>
         
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
              type='range'
              min={6}
              max={15}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1 mx-2'>
              <input
              type='checkbox'
              defaultChecked={numbox}
              id='numinput'
              onChange={()=>setnumbox((prev) => !prev)}
              />
              <label>Numbers</label>
              <input
              type='checkbox'
              defaultChecked={chrbox}
              id='chrinput'
              onChange={()=>setchrbox((prev) => !prev)}
              />
              <label>Characters</label>
            </div>
          </div>

        </div>


        <div className="fixed flex flex-wrap top-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center 
            gap-3 shadow-lg bg-slate-500 rounded-3xl px-3 py-2">
              <button 
                onClick={changeColor}
                className="outline-none px-4 py-1 
                rounded-full text-white shadow-lg"
                style={{color: txt,backgroundColor: Color}}>{mode}</button>
            </div>
        </div>

      </div>
    </>
  )

}

export default App
