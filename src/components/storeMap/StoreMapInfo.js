import React from "react";
import { LocationBox, MyLocation } from "../../styles/StoreMapCss";
import { P16, PB16 } from "../../styles/basic";
import { MarginB10, MarginB20 } from "../../styles/common/reviewProductCss";

const StoreMapInfo = ({ place }) => {
  return (
    <>
      <LocationBox>
        <div className="branch">
          <PB16>{place.name}</PB16>
          <PB16>|</PB16>
          <PB16>{place.Branch}</PB16>
        </div>
        <MarginB10 />
        <div>
          <P16>{place.address} </P16>
          <P16>{place.phoneNumber}</P16>
        </div>
      </LocationBox>
    </>
  );
};

export default StoreMapInfo;
