const Login = () => {
  return (
    <div className="w-screen h-screen bg-fondo-main2" id="form" style={'#form {background-size: cover; }'}>
      <form action="" className="flex flex-row w-[90%] rounded-lg shadow-xl shadow-black">
        <div className="w-1/2 bg-white">
          <div className="flex flex-col gap-2">
            <h1>Hello & Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur similique laborum laudantium dicta, ea cupiditate modi eius fugiat libero molestias minima assumenda. Libero ducimus aliquid consequuntur corrupti voluptatibus nihil.</p>
          </div>
          <input type="text" name="username" id="user" placeholder="User Name" className="w-[90%] rounded-full bg-inherit/60 border border-gray-500" />
          <input type="password" name="pass" id="password" placeholder="Password" className="w-[90%] rounded-full bg-inherit/60 border border-gray-500" />
          
        </div>
        <div className="w-1/2 bg-inherit"></div>
      </form>
    </div>
  )
}
export default Login