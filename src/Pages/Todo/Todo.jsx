
import {useEffect} from 'react'
import TodoItemCard from './Components/TodoItemCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoData } from '../../redux/slices/todoSlice'
// import { TodoContext } from '../../Context/TodoContext'

// import {setTodoList,setIsTodoError,SetIsTodoLoading, getTodoData} from '../../redux/slices/todoSlice'
const Todo = () => {
// const{todoList,setTodoList} =useContext(TodoContext)   we use this for context
// const[todoList,setTodoList]=useState([])
// const[isError,setIsError]=useState(false)     we use this for usestate hooks
// const[isLoading,setIsLoading]=useState(true)

const dispatch = useDispatch()
const todoState = useSelector((state)=>state.todo)

useEffect(()=>{
  dispatch(getTodoData())
  // const getTodoData = async()=>{
  //  try {
    // instead of fetch we can use axios and the code will be like this
    // const response = await axios.get("https://jsonplaceholder.mock.beeceptor.com/todos")
  //   // setTodoList(response.data)
  //   const response = await fetch("https://json-placeholder.mock.beeceptor.com/todos")
  //   if(!response.ok){
  //     throw new Error("Something went wrong")
  //   }
  //   const data = await response.json()
  //   dispatch(setTodoList(data))
  //  } catch (error) {
  //   dispatch(setIsTodoError(true))
  //  }finally{
  //   dispatch(SetIsTodoLoading(false))
  //  }
  // }
  // getTodoData()
},[])

if(todoState.isLoading){
  return <div className='w-50 h-50 text-xl  font-bold justify-center flex' >
    Loading...
        
</div>
}
if(todoState.isError){
  return <div className='text-md font-bold'>Something Went Wrong</div>
}
  return (
    <div className='flex flex-col gap-5'>
     {todoState.todoList.map((todo)=>{
        return <TodoItemCard key={todo.id} todo={todo}/>
      })}
    </div>
  )
}

export default Todo


