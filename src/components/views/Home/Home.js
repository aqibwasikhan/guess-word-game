// import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react';
import { useState, useRef } from 'react';
import './Home.css';

const Home = () => {
  const wordArray = ['aqib', 'khan', 'jani']
  const [wordNo, setWordno] = useState(0);
  const [right, setRight] = useState(0);
  const [gameEnd, setEndgame] = useState(false);
  // const brArray = useState(wordArray[wordNo].split(''))
  // const [shuffle,setShuffle] = useState( setShuffle(brArray.sort(() => Math.random() - 0.5)));
  // const [ttext,setText] = useState('')

  let inputRef = useRef(null);

  // useEffect(()=>{
  //   shuffling()
  // },[wordNo])
  // useEffect(()=>{


  // },[])
  // useEffect(()=>{

  // },[])
  // console.log(shuffleq)
  // const shuffling = () =>{
  // // setShuffle(setBrarray(brArray.sort(() => Math.random() - 0.5)))
  //     setShuffle(brArray.sort(() => Math.random() - 0.5))


  // }
  let word_ = wordArray[wordNo].split('').sort(() => Math.random() - 0.5)
  const handleGuess = () => {

    // debugger
    var text = inputRef.current.value
    setWordno(wordNo + 1)

    // inputRef('')
    //  shuffling()


    // setShuffle(brArray.sort(() => Math.random() - 0.5))


    // setText(e.target.value)
    console.log(text)
    if (text === wordArray[wordNo]) {
      alert('you are correct')
      // setWordno(wordNo+1)

      setRight(right + 1)

    } else {
      alert('you are wrong')
      // setEndgame(true)

    }
    console.log(wordNo)
    if (wordNo !== wordArray.length - 1) {
      setWordno(wordNo + 1)
      
    } else {
      
      setEndgame(true)
      setWordno(0)
    }
    // if(wordNo > wordArray.length) {
      // }
      // inputRef.current.value('')
      // setText('')
      
      inputRef.current.value = ''
  }


  return (
    <div className='home'>
      {gameEnd ?
        <div>
          <h3 className='word'>Total Score : {right}</h3>

        </div> : <div>

          <h3 className='word'>{word_}</h3>
          <h3 className='word'>Score : {right}</h3>

          <input className='input-field' type="text" ref={inputRef} /> <br />
          <button className='guess-button' onClick={handleGuess}>GUESS</button>
        </div>

      }
    </div>
  )
}

export default Home