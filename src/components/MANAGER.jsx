import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import ABOUT from './ABOUT';

const MANAGER = () => {

  const ref = useRef()
  const passwordref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordarray, setpasswordarray] = useState([])

  const showpassword = (params) => {
    passwordref.current.type = "text"
    if (ref.current.src.includes("/public/allsvgs/eyeoff.svg")) {
      ref.current.src = "/public/allsvgs/eyeon.svg"
      alert("show the passward")
      passwordref.current.type = "password"
    }
    else {
      passwordref.current.type = "text"

      alert("dont show the passward")
      ref.current.src = "/public/allsvgs/eyeoff.svg"
    }
  }


  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordarray;
    if (passwords) {
      setpasswordarray(JSON.parse(passwords))
    } else {
      JSON.stringify
    }
  }, [])

  
  const savepassword = () => {
    if(form.site.length > 3 && form.username.length> 3 && form.password.length > 5){

      setpasswordarray([...passwordarray, {...form, id: uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordarray, {...form, id: uuidv4()}]))
      console.log(passwordarray)
      setform({ site: "", username: "", password: "" })
      toast('🏴‍☠️ passward saved ☠️ !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
      });
    }else{
      toast('🏴‍☠️ password is toooo small  ☠️ !', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
      });
      // setform({ site: "", username: "", password: "" })
    }
  }
  const deletepassword = (id) => {
    console.log("the pass is being deleted",id)
    let c=confirm("do you realy want to delete this thing bro !!!?")
    if(c){
      setpasswordarray(passwordarray.filter(item=>item.id!==id))
      localStorage.setItem("passwords",JSON.stringify(passwordarray.filter(item=>item.id!==id))  )


    }
    
  }
  const editpassword = (id) => {
    console.log("the pass is being edited",id)
    setform(passwordarray.filter(i=>i.id===id)[0])
    setpasswordarray(passwordarray.filter(item=>item.id!==id))
  }


  
  

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  const copyText = (text) => {
    toast('💀 copied to clipboard !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text)
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="  absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="max-w-[85%]  sm:min-h-[88vh] px-4  m-auto bg-green-100 h-full  ">
        <h1 className="text-center font-bold  text-3xl sm:text-xl py-4">
          <span className="text-green-600 ml-2">   &lt;/ </span>
          Pass
          <span className="text-green-600"> oP /&gt;</span>

        </h1>
        <p className="pl-4 text-center font-bold sm:text-base">  your own passward manager</p>
        <div className="items-centers text-white flex flex-col p-3 gap-2">
          <input value={form.site} onChange={handlechange} name='site' placeholder='Enter site url ...' className="p-1 text-black rounded-full border border-green-900 md:w-[99%]" type="text" autoComplete="url" />
          <div className="md:w-1/2 m-auto flex  mt-2 flex-col md:flex-row  gap-2 ">

            <input value={form.username} onChange={handlechange} name='username' placeholder=' Enter User Name' className=" text-black rounded-full border border-green-900 ml-1 " type="text"autoComplete="username"  />
            <div className='relative'>

              <input ref={passwordref} value={form.password} onChange={handlechange} name='password' placeholder=' Enter passward' className=" text-black rounded-full border border-green-900 ml-1" type="password" autoComplete="current-password" />
              <span className='absolute bottom-[-3px] right-[0.5px]' onClick={showpassword}>
                <img ref={ref} className="p-0.5 " src="/public/allsvgs/eyeon.svg" alt="eye" />
              </span>
            </div>

          </div>
          <div className=" justify-center w-full ">

            <button onClick={savepassword} className="flex rounded-full m-auto pl-1 pr-1 mt-2 bg-purple-500 w-fit hover:bg-purple-300"><img src="public/allsvgs/add.svg" alt="" /> add passward </button>
          </div>

        </div>
        <div className=" passwords w-[100%] max-h-[89vh]  overflow-x-auto ">
          <h2 className='ml-1 font-bold '>Your Passwords</h2>
          {passwordarray.length === 0 && <div className='font-semibold'><p>no passwards to show </p></div>}
          {passwordarray.length != 0 &&
            <table className="table-auto h-5/6 w-full rounded-md text-sm sm:text-xs">
              <thead className="bg-green-800 text-white  ">
                <tr>
                  <th className='py-1'>Site</th>
                  <th className='py-1'>Username</th>
                  <th className='py-1'>Passward</th>
                  <th className='py-1'>Actions</th>
                </tr>
              </thead>
              <tbody className='w-full' >
                {passwordarray.map((item, index) => {
                  return <tr key={index}>
                    <td className='py-1 border-4 border-#a855f7 rounded-sm text-center w-1/3  '><span className='flex justify-around'>{item.site}   <img className='w-3' src="/allsvgs/copy.svg" alt="copy" onClick={() => { copyText(item.site) }} /></span></td>
                    <td className='py-1 border-4 border-#c32117 rounded-sm text-center w-1/3 h-full '><span className='flex justify-around'>{item.username} <img className='w-3' src="/allsvgs/copy.svg" alt="copy" onClick={() => { copyText(item.username) }} /></span></td>
                    <td className='py-1 border-4 border-#c9ccca80 rounded-sm text-center w-0.5/3 h-full'><span className='flex justify-around'>{item.password} <img className='w-3' src="/allsvgs/copy.svg" alt="copy" onClick={() => { copyText(item.password) }} /></span></td>
                    <td className='flex justify-around py-1 border-4 border-#c9ccca80 rounded-sm text-center w-0.5/3 h-full'> 
                    <span onClick={()=>{ editpassword(item.id)}} className='cursor-pointer'><img src="/allsvgs/edit.svg" alt="edit" /></span>
                    <span onClick={()=>{ deletepassword(item.id)}} className='cursor-pointer'><img src="/allsvgs/delete.svg" alt="" /></span>
                    </td>
                  </tr>
                })}

              </tbody>
            </table>}
        </div>
      </div>




    </>
  )
}

export default MANAGER
