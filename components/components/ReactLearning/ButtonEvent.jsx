// import React from 'react'
const ButtonEvent = () => {

const ChangeEvent=(name)=>{
  console.log(`Thanks for you support ${name}`)
}

  return (
    <div>
       <button onClick={()=>ChangeEvent('vivek')}>  {/*creates a anyminous fucntion */}
        Subscribe
       </button>
    </div>
  )
}

export default ButtonEvent
