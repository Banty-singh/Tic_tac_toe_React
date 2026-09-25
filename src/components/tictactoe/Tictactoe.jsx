import React, { useRef, useState } from 'react'
import './Tictactoe.css'


let data = ["", "", "", "", "", "", "", "", ""]

const Tictactoe = () => {

  let [count, setcount] = useState(0);
  let [lock, setlock] = useState(false);
  let Titleref = useRef(null);
  let box1=useRef(null)
  let box2=useRef(null)
  let box3=useRef(null)
  let box4=useRef(null)
  let box5=useRef(null)
  let box6=useRef(null)
  let box7=useRef(null)
  let box8=useRef(null)
  let box9 = useRef(null)
  let box_array =[box1,box2,box3,box4,box5,box6,box7,box8,box9]

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (data[num] !== "") return;
    
    if (count % 2 === 0) {
      e.target.innerHTML = "X";
      data[num] = "X"
      setcount(++count);
    } else {
      e.target.innerHTML = "O"
      data[num] = "O"
      setcount(++count)
    }
    checkwin()
 }
    const checkwin = () => {
      if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
        win(data[2])
      }
      else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
        win(data[5])
      }

      else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
        win(data[8])
      }

      else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
        win(data[6])
      }
      else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
        win(data[7])
      }
      else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
        win(data[8])
      }
      else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
        win(data[8])
      }
      else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
        win(data[6])
      }
      
    }
    const win = (winner) => {
      setlock(true);
      if(winner === "X"){
        Titleref.current.innerHTML="Congratulation player X is winner"
      }
      else{
        Titleref.current.innerHTML="Congratulation player O is winner"
      }
    }

    const reset = ()=>{
      setlock(false);
      data = ["", "", "", "", "", "", "", "", ""]
      Titleref.current.innerHTML=`Welcome in TIC_TAC_TOE Game in <span>React</span>`;
      box_array.map((e)=>{
        e.current.innerHTML="";
      })
    }
 



  return (
    <>
      <h1 ref={Titleref}>Welcome in TIC_TAC_TOE Game in <span>React</span></h1>
      <div className="boxes">
        <div className="row1">
          <div className="box" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
          <div className="box" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
          <div className="box" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="row2">
          <div className="box" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
          <div className="box" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
          <div className="box" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className="row3">
          <div className="box" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
          <div className="box" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
          <div className="box" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>
      <button className='reset'onClick={()=>{reset()}}>Reset</button>
    </>
  )
}

export default Tictactoe