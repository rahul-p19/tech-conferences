import React, { useState } from "react";

export default function App(){
  const [showModal,setShowModal] = useState(false);
  const ele = <div className="fixed z-10 w-2/3 m-auto bg-slate-600">Modal Content</div>
  return(
    <>
    <button onClick={()=>(setShowModal((prev)=>(!prev)))}>Click Me</button>
    {showModal && ele}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias accusamus unde totam tenetur nemo modi provident debitis cupiditate cumque? Quam quas sequi eius sapiente ratione voluptas, tenetur blanditiis architecto asperiores libero ducimus animi iusto neque assumenda cum dicta consequuntur ullam? Commodi cupiditate ipsam, enim mollitia provident illum consectetur, a nisi possimus reiciendis magnam officiis odio facilis molestiae nihil, eius quo! Reprehenderit at optio accusamus explicabo quia tempore vero voluptate quidem. A facere est cupiditate. Fuga reiciendis sed fugit ad aliquid quis consequatur delectus facilis molestias nostrum aliquam placeat dicta perferendis doloremque, autem odit explicabo necessitatibus quibusdam quas saepe eius.</p>
    </>
  )
}