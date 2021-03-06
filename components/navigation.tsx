import Link from 'next/link';
import { useState } from 'react';
// import  "../styles/navigation.module.css";
// as = what you would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload.
// if have to rebuild API in strapi just use staic tiltes to get a render

export default function Navigation (props){

  // console.log(props.navigation[0].title)
  const [active, setActive] = useState(true);

  const handleMobileButton = () => {
    setActive(!active);
  };

  const [activeAbout, setActiveAbout] = useState(false);

  const handleAboutButton = () => {
    setActiveAbout(!activeAbout);
  };


    return(
    <>
    <nav className="bg-gray-800 lg:flex">
      <div className="flex">
      <div className="font-bold text-xl text-white px-8">
            <Link  href="/">The Cause Collective</Link>
     </div>   

       {/* mobile-button */}
       <button
          className='mobile-button'
          onClick={handleMobileButton}
        >
       <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    
  
     
     

         {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
       <div
        // if condition is active= which its flase then use that class other wise use later class
          className={`${
            active ?  'active': 'nav'
          } `}
        >
          {/* nav-beginning*/}
          <ul className={`${active ?'true': 'hidden'} lg:flex  py-4`} >
           <li className="button-hover px-3">
           <button
           onClick={handleAboutButton}
           >{props.navigation[0].title}
           
           <ul className={`${ 
            activeAbout ? 'active' : 'nav '
          }  `}>
          <li className={`${ 
            activeAbout ? 'active' : 'hidden'
          } lg:absolute px-3 rounded-sm `}>{props.navigation[4].title}</li>
            <li className={`${ 
            activeAbout ? 'active' : 'hidden'
          } lg:absolute px-3 rounded-sm lg:mt-5 `}>{props.navigation[5].title}</li>
          </ul>
          </button>
           </li>
           <li className="button-hover px-3">
           <Link href="/">{props.navigation[1].title}</Link>
           </li>
           <li className=" button-hover px-3">
           <Link href="/">{props.navigation[2].title}</Link>
           </li>
           <li className="px-3">
           <Link href="/">{props.navigation[3].title}</Link>
           </li>
        </ul> 
         
        </div>
        
    
       
       
      </nav>

      
    </>
)
}




  {/* {props.navigation.map(item=>(
          <li className="px-4 hover:text-white outline-none  hover:bg-green-600 hover:rounded-lg hover:border-solid" key={props.navigation.id}>
            <Link href={item.slug}>
              
            <Nav.Link href={item.slug} className="font-semibold flex">
              {item.title}
              <svg className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Nav.Link>
            </Link>
          </li>
          ))} */}


