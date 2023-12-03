
import BasicTabs from "./BasicTabs";

import dynamic from 'next/dynamic'
import PropertyGrid from "./PropertyListing/PropertyGrid";
// import PropertySale from "./PropertyListing/PropertySale";
import PropertySell from "./PropertyListing/PropertySell";
import BasicFormControl from "./Construct/BasicFormControl";
import ImgMediaCard from "./ServicesCards/ImgMediaCard";

 


function Services() {

  const visibilityChekbox = false;
  
    return (
     
      // <BasicTabs></BasicTabs>
      <div>
        {/* <BasicFormControl></BasicFormControl> */}
        {/* <ImgMediaCard></ImgMediaCard> */}
        <PropertyGrid></PropertyGrid>     
        <PropertySell visibilityChekbox={visibilityChekbox}></PropertySell>
        {/* <PropertySale></PropertySale> */}
      </div>
    );
  }
  
// export default Services

export default dynamic (() => Promise.resolve(Services), {ssr: false})
