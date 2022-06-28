
import './App.css';
import { useState } from 'react';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")
  console.log(input)
  
  const addItem = () => {
   
    const copyTodoList = [...todoList]
    copyTodoList.push(input)
    setTodoList(copyTodoList)
    setInput('')
    
   
  }
  const deleteItem = (index) => {
    const copyTodoList = [...todoList]
    copyTodoList.splice(index, 1)
    setTodoList(copyTodoList)
   
  }
  const edtitem = (index) => {
    const copyTodoList = [...todoList]

  }
//   const [bulb, setBulb] = useState(false)
//   const bulbkholo = () => {
//     setBulb(!bulb)
// }
  // task 1
  // const hello = 'hello World!'
  // // task 2
  // const helloObj = {obj: 'hello world ka Object'}
  // //task 3
  // const data = ['We', 'are', 'United']
  // //task 4
  // const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  // //task 5
  // const complex = [{company: 'XYZ', jobs: ['JavaScript ,', ' React']}, {company: 'ABC', jobs: ['Angular ,' ,' Ionic']}]

  return (
      <div className="App">
        <header className="App-header">
          {/* <h1>{hello}</h1>
          <h2>{helloObj.obj}</h2>
          <p>{data[0]}</p>
          <p>{data[1]}</p>
          <p>{data[2]}</p>
          <ol>
          {list.map(item => {
            return <li>{item.name}</li>
          })}          

          </ol>
          <table border={2}>
          {complex.map(item => {
            return <> <tr>{item.company}
              {
                item.jobs.map(item => {
                  return <td>{item}</td>
                })
              }
              </tr>
            </>
          })}     
          </table>     */}
          {/* {bulb && true ? <img src='https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg' width={100}/> : <img src='https://www.collinsdictionary.com/images/full/lightbulb_111547856_1000.jpg'width={120}/>}
          <button onClick={bulbkholo}>On/off</button> */}
            {// e.target.value is used to get the text that is being typed in the input box by user
        }
        <h1><span className="stylling">TODO</span>    List</h1>
        
        <input className='input_div' placeholder='whats do you wants to add...' onChange={e => setInput(e.target.value)}></input>
        
        <button className='addButton' onClick={addItem}><img src="https://cdn0.iconfinder.com/data/icons/ie_Bright/512/plus_add_green.png" width={50} /></button>
        <div className='container'>
        <ol className='item'>
          {
            todoList.map((item, index) => {
              return <li className='item_input'>  {item} <button className='editButton'>EDIT</button><button className='removeButton' onClick={() => deleteItem(index)}>DEL</button> <hr /></li>
            })
          }
        </ol>
        </div>
        </header>
      </div>
  );
}

export default App;
