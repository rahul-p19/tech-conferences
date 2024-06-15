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

function toggleBlur(){
    document.querySelector('header').classList.toggle('blur-3xl');
    document.querySelector('#content').classList.toggle('blur-3xl');
    document.querySelector('#content').classList.toggle('dark:opacity-10');
    document.querySelector('#content').classList.toggle('pointer-events-none');
}


export default function Conferences() {
	const [info, setInfo] = useState([]);
    const [showModal,setShowModal] = useState([0,false]);
	getData(setInfo);
    function Card(item) {
        return (
            <>
                <div key={item.id} className="confCard flex flex-col items-center my-6 gap-y-1 cursor-pointer" onClick={()=>{setShowModal([item.id,true]);toggleBlur();}}>
                    <img src={item.banner_image} alt={item.title} className="rounded-sm" />
                    <h1 className="text-center text-2xl my-2 dark:text-[#ac46a1] font-['Oswald'] font-light">
                        {item.title}
                    </h1>
                    <h2 className="text-lg leading-none dark:text-[#a499be] font-['Poppins'] text-[#4B2390]">
                        Date: {item.date_time.substring(8, 10)}/
                        {item.date_time.substring(5, 7)}/{item.date_time.substring(0, 4)}
                    </h2>
                    <h2 className="text-lg leading-none dark:text-[#a499be] text-[#4B2390] font-['Poppins']">
                        {item.venue_city}, {item.venue_country}
                    </h2>
                </div>
            </>
        );
    }
    function Modal({item}) {
        function handleKeyDown(e){
            switch(e.key){
                case 'ArrowRight':
                    if(showModal[0]<info.length)
                    setShowModal([showModal[0]+1,true]);
                break;
                case 'ArrowLeft':
                    if(showModal[0]>1)
                        setShowModal([showModal[0]-1,true]);
                    break;
                }
        }
        return (
            <div id='modal' className="outline-none fixed z-10 lg:left-[30%] md:left-[15%] sm:left-[15%] left-[10%] top-6 bottom-6 lg:w-1/3 md:w-2/3 sm:w-2/3 w-4/5 overflow-y-auto bg-slate-300 dark:bg-[#111111] rounded-sm pb-3" tabIndex="0" onKeyDown={handleKeyDown}>
                <div key={item.id} className="flex flex-col items-center gap-y-1 relative dark:text-[#a499be]">
                    <button onClick={()=>{setShowModal([0,false]);toggleBlur();}} className="right-3 top-3 absolute"><svg width="24px" height="24px" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg></button>
                    <img src={item.banner_image} alt={item.title} className="w-full" />
                    <h1 className="text-center text-3xl my-4 font-light font-['Oswald'] dark:text-[#ac46a1]">
                        {item.title}
                    </h1>
                    <p className="text-lg mx-4 mb-2 text-center font-['Poppins']">{item.description}</p>
                    <h2 className="text-lg mb-2 font-['Poppins']">
                        <span className="font-semibold">Date: </span> {item.date_time.substring(8, 10)}/
                        {item.date_time.substring(5, 7)}/{item.date_time.substring(0, 4)}
                        <span className="font-semibold ml-4">Time: </span>{item.date_time.substring(11,16)} 
                    </h2>
                    <h2 className="text-lg mb-2 text-center font-['Poppins']">
                        <span className="font-semibold">Venue: </span>{item.venue_name}, {item.venue_city}, {item.venue_country}
                    </h2>
                        <p className="font-semibold text-lg mb-2 font-['Poppins']">Organised by:</p>
                    <div className="flex items-center justify-center pr-4 font-['Poppins']">
                        <img className="w-10 ml-3" src={item.organiser_icon} alt='logo'/>
                        <p className="ml-3 text-lg">{item.organiser_name}</p>
                    </div>
                </div>
            </div>
        );
    }
	return (
		<>
			<main className="p-12">
                {showModal[1]&&<Modal item={info[showModal[0]-1]}/>}
                {document.querySelector('#modal')&&document.querySelector('#modal').focus()}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8" id="content">
					{info.map((item) => {
						return <Card {...item} key={item.id}/>;
                })}
				</div>
			</main>
		</>
	);
}
