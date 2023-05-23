import React from 'react'
import Cam from "../imgs/cam.png"
import Add from "../imgs/add.png"
import More from "../imgs/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Khanh Duy</span>
            <div className="chatIcons">
                <img src={Cam} alt="Cam"/>
                <img src={Add} alt="Add"/>
                <img src={More} alt="More"/>
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat