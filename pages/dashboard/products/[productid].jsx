
import Dashboard from '../../../components/Dashboard/Dashboard';
import DashboardUpdateProperty from '../../../components/Dashboard/DashboardUpdateProperty';
import { useEffect } from 'react';



export default function Home(params) {
  useEffect(()=>{
    console.log("Update single data", params)
},[]);


  return (
    <div >
      <div>
      <DashboardUpdateProperty></DashboardUpdateProperty>
        
      </div>
  
      
      <footer>
       
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by skypropertysolutions.co.in
          {/* {' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} /> */}
        </a>
      </footer>

    
    </div>
  );
}
