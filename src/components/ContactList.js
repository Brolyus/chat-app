import React from 'react'
import Contact from './Contact'
const users = [
    {   name: "Irma Perry",
        image: "https://randomuser.me/api/portraits/women/35.jpg",
        
    },
    {   name: "Gilbert Thomas",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        online: "Online"
    },
    {   name: "Robin Lynch",
        image: "https://randomuser.me/api/portraits/women/56.jpg",
        online: "Online"
    },
    {   name: "Gordon Hart",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        online: "Online"
    },
    {   name: "Kitty Reyes",
        image: "https://randomuser.me/api/portraits/women/80.jpg",                
    }
]

const ContactList = () => <div> 
    {users.map(obj => (
        <Contact key={obj.name} name={obj.name} image={obj.image} online={obj.online} />
    ))
    }    
    </div>

export default ContactList;