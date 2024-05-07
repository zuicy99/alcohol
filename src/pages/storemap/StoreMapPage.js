import React, { useEffect, useState } from "react";
import { KakaoMapContext, Map, MapMarker } from "react-kakao-maps-sdk";
import StoreMapInfo from "../../components/storeMap/StoreMapInfo";
import { dummyData } from "../../mock/PlaceData";
import { PB16 } from "../../styles/basic";
import {
  ItemContent,
  ItemWrap,
  MarginB20,
} from "../../styles/common/reviewProductCss";
import { MarketWrap, MyLocation, StoreWrap } from "../../styles/StoreMapCss";
import BasicLayout from "../../layout/BasicLayout";
import { getMarketAddress } from "../../api/marketMapApi";
import styled from "@emotion/styled/macro";

const initState = [
  {
    marketcode: 1,
    marketname: "포도대구동성로점",
    address: "대구광역시 중구 공평동 57-3번지 101호",
    phonenumber: "01011111111",
    delivery: "PickUp",
    opentime: "10:00:00",
    closetime: "22:00:00",
  },
];

const StoreMapPage = () => {
  const [marketData, setMarketData] = useState([]);

  // var map = new kakao.maps.Map();
  const getCoordsFromAddress = async address => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = {
            lat: result[0].y,
            lng: result[0].x,
          };
          resolve(coords);
        } else {
          reject(status);
        }
      });
    });
  };

  useEffect(() => {
    getMarketAddress({
      successFn: data => {
        setMarketData(data);
      },
      failFn: data => {
        alert("마켓정보 불러오기 실패");
      },
      errorFn: data => {
        alert("서버 불안정");
      },
    });
  }, []);

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
                  {marketData.map((market, index) => (
                    <StoreMapInfo key={index} market={market} />
                  ))}
                </MarketWrap>
              </div>

              <Map
                center={{ lat: 35.8683476, lng: 128.5940482 }}
                style={{ width: "550px", height: "550px" }}
              >
                {marketData.map((market, index) => (
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
                ))}
              </Map>
            </StoreWrap>
          </ItemContent>
        </ItemWrap>
      </BasicLayout>
    </div>
  );
};

export default StoreMapPage;
