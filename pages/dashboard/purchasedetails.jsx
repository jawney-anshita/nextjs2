// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import ResponsiveAppBar from '../components/ResponsiveAppBar';
// import HeroBanner from '../components/HeroBanner';
// import { Container } from '@mui/material';
// import Services from '../components/Services';
// import Dashboard from '../components/Dashboard/Dashboard';
import Dashboard from '../../components/Dashboard/Dashboard';
import DashboardBuyersTable from '../../components/Dashboard/DashboardBuyersTable';
import DataTable from '../../components/Dashboard/SubPages/DataTable';
import SellerDataTable from '../../components/Dashboard/SubPages/SellerDataTable';




export default function PurchaseDetails() {
  return (
    <div >
      <div>
        <SellerDataTable></SellerDataTable>
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
