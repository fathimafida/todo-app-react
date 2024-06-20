
import React, { useState } from 'react'

const TodoItemCard = ({
  todo
}) => {
    
const[isChecked, setIsChecked] = useState(todo.completed)
return (
    <div className='flex bg-blue-100 p-4   gap-6'>
        <p className='text-xl p-3 font-bold font-size-300 '>{todo.title}</p>
        <input  type='checkbox' checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}/>
    </div>
      
  )
}

export default TodoItemCard
