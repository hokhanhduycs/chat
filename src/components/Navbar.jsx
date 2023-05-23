import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Chat</span>
        <div className="user">
            <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/275529302_3080130348982589_8020125724465283541_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U2HvDXvj7CQAX-Bnb-q&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfAWDq0PDvPhUruUJa5hZva57M1ss3zd5EznKdK2pvR_AQ&oe=6471AD45" alt="avatar" />
            <span>Khanh Duy</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar