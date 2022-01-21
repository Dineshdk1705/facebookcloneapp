import { AirlineSeatReclineExtra } from '@mui/icons-material'
import React from 'react'
import { useStateValue } from '../ContextApi/StateProvider'
import '../Css/StoryReel.css'
import Story from './Story'

const StoryReel = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story image="https://wallpaper.dog/large/20343742.jpg" profileSrc={user.photoURL} title={user.displayName}/>
            <Story image="https://c0.wallpaperflare.com/preview/753/303/598/left-human-hand-near-plane-window.jpg" profileSrc="https://i.pinimg.com/originals/d3/41/aa/d341aa715b2dff1b3093cbb659b7901c.jpg" title="DP" />
            <Story image="https://en.100mbsports.com/wp-content/uploads/2019/04/rohit-sharma-bday-e1592206150573.jpg" profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/69/Rohit_Sharma_2015_%28cropped%29.jpg" title="Harish" />
            <Story image="https://i.pinimg.com/originals/48/b1/cf/48b1cfb6a391b2d36bd14ebcd9dcb5fc.jpg" profileSrc="https://upload.wikimedia.org/wikipedia/commons/3/33/Taylor_Swift_4%2C_2011.jpg" title="Sam" />
            <Story image="https://www.contemporist.com/wp-content/uploads/2015/03/in-home-library_280315_07-800x1120.jpg" profileSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Alia_Bhatt_Raazi.jpg" title="Aastha" />            
        </div>
    )
}
 
export default StoryReel
