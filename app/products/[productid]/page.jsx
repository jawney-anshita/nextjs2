"use client"
import Dashboard from '../../../components/Dashboard/Dashboard';
import DashboardUpdateProperty from '../../../components/Dashboard/DashboardUpdateProperty';
import { useEffect, useState } from 'react';



export default function Home({ params }) {
  const [propertyVisibility, setPropertyVisibility] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, SetPropertyType] = useState("");
  const [category, setCategory] = useState("");
  const [dimensions, setDimesions] = useState("");
  const [age, SetAge] = useState("");
  const [availability, setAvailability] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [washrooms, SetWashrooms] = useState("");
  const [balconies, setBalconies] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [openParking, SetOpenParking] = useState("");
  const [coverParking, setCoverParking] = useState("");
  const [pricing, setPricing] = useState("");
  const [priceunit, setpriceUnit] = useState("Lakhs");
  const [propertyid, setPropertyid] = useState("");
  


  useEffect(() => {
    getProductDetails()
    console.log("Update single data", params.productid)
  }, []);

  const getProductDetails = async () => {
    let propertyID = params.productid;
    let productdata = await fetch("/api/products/"+propertyID)
    productdata = await productdata.json();
    if(productdata){
      setPropertyVisibility(propertyVisibility);
    setFullname(productdata.fullname);
    setPhone(productdata.phone);
    setEmail(email);
    setLocation(location);
    SetPropertyType(propertyType);
    setCategory(category);
    setDimesions(dimensions);
    SetAge(age);
    setAvailability(availability);
    setBedrooms(bedrooms);
    SetWashrooms(washrooms);
    setBalconies(balconies);
    setFurnishing(furnishing);
    SetOpenParking(openParking);
    setCoverParking(coverParking);
    setPricing(pricing);
    setpriceUnit(priceunit);
    setPropertyid(propertyID);
    }
    console.log("Product Data", productdata)
    console.log( "Showing Product Data", propertyid,fullname,phone,email,location,propertyType,category,dimensions,age,availability,bedrooms,washrooms,balconies,furnishing,openParking,coverParking,pricing,priceunit,propertyVisibility);
  }
  return (
    <div >
      <div>
        <DashboardUpdateProperty 
        propertyid={propertyid}
        propertyVisibility={propertyVisibility} 
        fullname={fullname} 
        phone={phone} 
        email={email} 
        location={location} 
        propertyType={propertyType}
        category={category}
        dimensions={dimensions}
        age={age}
        availability={availability}
        bedrooms={bedrooms}
        washrooms={washrooms}
        balconies={balconies}
        furnishing={furnishing}
        openParking={openParking}
        coverParking={coverParking}
        pricing={pricing}
        priceunit={priceunit}
        ></DashboardUpdateProperty>

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
