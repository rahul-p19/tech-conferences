import React, { useState, useEffect } from "react";

function getData(setInfo) {
	useEffect(() => {
		fetch("https://gdscdev.vercel.app/api")
			.then((response) => response.json())
			.then((response) => {
				setInfo(response.content.data);
			});
	}, []);
}

export default function Conferences() {
	const [info, setInfo] = useState([]);
    const [showModal,setShowModal] = useState([0,false]);
	getData(setInfo);
    console.log(info);
    function Card(item) {
        return (
            <>
                <div key={item.id} className="flex flex-col items-center my-6 gap-y-1" onClick={()=>{setShowModal([item.id,true])}}>
                    <img src={item.banner_image} alt={item.title} className="rounded-md" />
                    <h1 className="text-center text-2xl mb-2 dark:text-[#38a9bc]">
                        {item.title}
                    </h1>
                    <h2 className="text-lg dark:text-[#38a9bc]">
                        Date: {item.date_time.substring(8, 10)}/
                        {item.date_time.substring(5, 7)}/{item.date_time.substring(0, 4)}
                    </h2>
                    <h2 className="text-lg dark:text-[#38a9bc]">
                        {item.venue_city}, {item.venue_country}
                    </h2>
                </div>
            </>
        );
    }
    function Modal({item}) {
        return (
            <div id='modal' className="fixed z-10 left-12 right-12 top-12 bottom-12 bg-slate-300 rounded-sm shadow-custom">
                <div key={item.id} className="flex flex-col items-center my-6 gap-y-1">
                    <button onClick={()=>{setShowModal([0,false])}} className="right-40 fixed">X</button>
                    <img src={item.banner_image} alt={item.title} className="rounded-md w-[60%]" />
                    <h1 className="text-center text-5xl mb-2 dark:text-[#38a9bc]">
                        {item.title}
                    </h1>
                    <p className="text-xl">{item.description}</p>
                    <h2 className="text-lg dark:text-[#38a9bc]">
                        Time: {item.date_time.substring(11,16)}
                    </h2>
                    <h2 className="text-lg dark:text-[#38a9bc]">
                        Date: {item.date_time.substring(8, 10)}/
                        {item.date_time.substring(5, 7)}/{item.date_time.substring(0, 4)}
                    </h2>
                    <h2 className="text-lg dark:text-[#38a9bc]">
                        {item.venue_name}, {item.venue_city}, {item.venue_country}
                    </h2>
                        <p className="font-semibold">Organised by:</p>
                    <div className="flex items-center">
                        <img className="w-10" src={item.organiser_icon} alt={item.organiser_name} />
                        <p>{item.organiser_name}</p>
                    </div>
                </div>
            </div>
        );
    }
	return (
		<>
			<main className="p-12">
                {showModal[1]&&<Modal item={info[showModal[0]-1]}/>}
				<div className="grid grid-cols-3 gap-x-8" id="content">
					{info.map((item) => {
						return <Card {...item} key={item.id}/>;
                })}
				</div>
			</main>
		</>
	);
}
