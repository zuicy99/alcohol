import React, { useMemo, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { useQuery } from "react-query";
import { getMarketAddress, getPathByAddress } from "../../api/marketMapApi";
import StoreMapInfo from "../../components/storeMap/StoreMapInfo";
import BasicLayout from "../../layout/BasicLayout";
import { PB16 } from "../../styles/basic";
import {
  ItemContent,
  ItemWrap,
  MarginB20,
} from "../../styles/common/reviewProductCss";
import { MarketWrap, MyLocation, StoreWrap } from "../../styles/StoreMapCss";

const StoreMapPage = () => {
  // const [marketData, setMarketData] = useState([]);
  // var map = new kakao.maps.Map();
  // const getCoordsFromAddress = async address => {
  //   const geocoder = new window.kakao.maps.services.Geocoder();
  //   return new Promise((resolve, reject) => {
  //     geocoder.addressSearch(address, (result, status) => {
  //       if (status === window.kakao.maps.services.Status.OK) {
  //         const coords = {
  //           lat: result[0].y,
  //           lng: result[0].x,
  //         };
  //         resolve(coords);
  //       } else {
  //         reject(status);
  //       }
  //     });
  //   });
  // };

  // useEffect(() => {
  //   getMarketAddress({
  //     successFn: data => {
  //       setMarketData(data);
  //     },
  //     failFn: data => {
  //       alert("마켓정보 불러오기 실패");
  //     },
  //     errorFn: data => {
  //       alert("서버 불안정");
  //     },
  //   });
  // }, []);

  // @AREA 현재 위치(좌표값)
  const [location, setLocation] = useState();
  useMemo(() => {
    const success = position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };
    const error = () => {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [navigator.geolocation.getCurrentPosition]);

  console.log("현재 위치는 : ", location);

  // @COMMENT 좌표를 주소로 변환하는 기능

  const { data: myAddressArray } = useQuery({
    queryFn: () => getPathByAddress({ location }),
  });
  // const myAddress =

  // @COMMENT 가게 위치를 변환하는 기능
  const { data: marketData } = useQuery({
    queryFn: () => getMarketAddress(),
  });
  console.log("데이터 :", marketData);

  return (
    <div>
      <BasicLayout>
        <ItemWrap>
          <ItemContent>
            <StoreWrap>
              <div>
                <MyLocation>
                  <PB16 style={{ width: "50px" }}>내 위치</PB16>
                  <PB16>ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅇㅁㄴ</PB16>
                </MyLocation>
                <MarginB20 />
                <MarketWrap>
                  {marketData?.map((market, index) => (
                    <StoreMapInfo key={index} market={market} />
                  ))}
                </MarketWrap>
              </div>

              <Map
                center={{ lat: 35.8683476, lng: 128.5940482 }}
                style={{ width: "550px", height: "550px" }}
              >
                {/* {marketData?.map((market, index) => (
                  <MapMarker
                    key={index}
                    position={{
                      lat: market.coords.lat,
                      lng: market.coords.lng,
                    }}
                    image={{
                      src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
                      size: { width: 44, height: 49 },
                      options: { offset: { x: 27, y: 69 } },
                    }}
                  />
                ))} */}
              </Map>
            </StoreWrap>
          </ItemContent>
        </ItemWrap>
      </BasicLayout>
    </div>
  );
};

export default StoreMapPage;
