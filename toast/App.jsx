import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const handleSuccessToast = ()=>{
      toast.success("success", {
        position:toast.POSITION.TOP_CENTER
      })
  }
  const handleErrorToast = ()=>{
    toast.error("error", {
      position:toast.POSITION.TOP_CENTER
    })
  }
  const handleWarningToast = ()=>{
        toast.warning("Warning", {
          position:toast.POSITION.TOP_CENTER
        })
      }
  const handleLoadingToast = ()=>{
      toast.loading("loading", {
        position:toast.POSITION.TOP_CENTER
      })
  }

  return (
    <>
       <ToastContainer />
       <button onClick={handleSuccessToast}>Success</button>
       <button onClick={handleErrorToast}>Error</button>
       <button onClick={handleWarningToast}>Warning</button>
       <button onClick={handleLoadingToast}>Loading</button>
    </>
    
  )
}

export default App 