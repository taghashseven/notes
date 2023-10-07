import { BeakerIcon , Bars3Icon , SunIcon , MoonIcon } from '@heroicons/react/24/solid'
import { useState ,useEffect } from 'react';
import './NavBar.css'

const NavBar = ()=>{
    // get value from local storage
    const [showMenu, setShowMenu] = useState(false);
    const [dark , setDark] = useState(localStorage.getItem('dark') === 'true' ? true : false);

    // set dark mode
    const setDarkMode = ()=>{
        setDark(!dark);
        if(dark){
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark',true);
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark',false);
        }
    }

  
    // set dark mode on load
    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[])


    return(
        <div className="container mx-auto bg-gray-200 dark:text-white dark:bg-gray-900/50">
            <div className='flex justify-between   p-2 border-b-[1px] border-gray-400 '>
                <h1 className="">logo</h1>
                <ul className="flex max-md:hidden gap-3">
                    <li>python</li>
                    <li>css</li>
                    <li>c++</li>    
                </ul>
                <div className='flex'>
                    <Bars3Icon className="w-6 h-6 md:hidden" onClick={()=>setShowMenu(!showMenu)}/>
                    <SunIcon className={`w-6 h-6  `+(dark ? '' : 'hidden')} onClick={setDarkMode}/>
                    <MoonIcon className={"w-6 h-6  "+(dark ? 'hidden' : '')} onClick={setDarkMode}/>
                </div>
            </div>

            <ul className={" mobile-nav flex  justify-center flex-col items-center gap-1 md:hidden p-2 "+ ( showMenu ? '' : 'hidden' ) } onClick={()=>setShowMenu(false)}>
                <li className='bg-slate-300/40 dark:bg-slate-900/40 text-center w-full'>python</li>
                <li className='bg-slate-300/40 dark:bg-slate-900/40 text-center w-full'>css</li>
                <li className='bg-slate-300/40 dark:bg-slate-900/40 text-center w-full'>c++</li>    
            </ul>
            

        </div>


    )
}

export default NavBar;