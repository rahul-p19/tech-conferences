import React, { useState } from "react";

export default function HomeHeader(){
  const [darkMode,setDarkMode] = useState(false);
  const sunIcon = <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#ffffff" d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"/></svg>
  const moonIcon = <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(-35)" width="34" height="34" viewBox="0 0 24 24"><path d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 0z"/></svg>
  
  function handleDarkMode(){
    setDarkMode(!darkMode);
    document.querySelector('html').classList.toggle('dark');
  }

  return(
    <>
    <header className="flex flex-col items-center">
    <nav className="flex w-full items-center justify-center pt-6 text-center relative">
    <h1 className="text-6xl font-bold dark:text-[#43b3c7]">Global Tech Conferences</h1>
    <button className="m-5 lg:absolute lg:right-7" onClick={handleDarkMode}>{darkMode?sunIcon:moonIcon}</button>
    </nav>
    <h2 className="text-2xl mt-4 dark:text-[#8ad3e0] px-3 text-center">Information about various tech conferences around the world, at your fingertips.</h2>
    </header>
    </>
  )
}