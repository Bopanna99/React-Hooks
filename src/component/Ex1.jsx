import React, { useState } from 'react'

function Ex1() {
    const [x,setX]=useState(2)
    const [title,setTitle]=useState("Welcome to react")
    const [isView,setIsView]=useState(true)
    const [colors,setColors]=useState(['red','green','blue','yellow'])
    const [user,setUser]=useState({
        name:'Raju',
        age:25,
        email:'raju@gmail.com'
    })

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success"></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="text-warning">x= {x}</div>
                <div className="text-success">Title ={title}</div>
                <div className="text-success">{isView ? "Say true": "Say false"}</div>
                <div className="text-success">
                    {
                        colors.map((item,index)=>{
                            return(
                                <p key={index}>{item}</p>
                            )
                        })
                    }
                </div>
                <div className="text-success">
                    users ={user.name}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex1
