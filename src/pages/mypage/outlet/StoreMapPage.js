import React from "react";
import {
  ItemContent,
  ItemWrap,
  MarginB20,
} from "../../../styles/common/reviewProductCss";
import { MapWrap, Place } from "../../../styles/detail/mapModalWrapCss";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { PB16, PB20 } from "../../../styles/basic";
import { dummyData } from "../../../mock/PlaceData";
import MapPlaceInfo from "../../../components/modal/MapPlaceInfo";
import { MyLocation, StoreInfo, StoreWrap } from "../../../styles/StoreMapCss";
import StoreMapInfo from "../../../components/storeMap/StoreMapInfo";

const StoreMapPage = () => {
  return (
    <div>
      <ItemWrap>
        <ItemContent>
          <StoreWrap>
            <div>
              <MyLocation>
                <PB16 style={{ width: "50px" }}>내 위치</PB16>
                <PB16>ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅇㅁㄴ</PB16>
              </MyLocation>
              <MarginB20 />
              {dummyData.map((place, index) => (
                <StoreMapInfo key={index} place={place} />
              ))}
            </div>

            <Map
              center={{ lat: 35.8683476, lng: 128.5940482 }}
              style={{ width: "550px", height: "550px" }}
            >
              <MapMarker // 마커를 생성합니다
                position={{
                  // 마커가 표시될 위치입니다
                  lat: 35.8683476,
                  lng: 128.5940482,
                }}
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
                  size: {
                    width: 44,
                    height: 49,
                  }, // 마커이미지의 크기입니다
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  },
                }}
              />
              <MapMarker
                position={{ lat: 35.86843379427353, lng: 128.59317740895912 }}
              ></MapMarker>
              <MapMarker
                position={{ lat: 35.86956707277221, lng: 128.59432657224625 }}
              ></MapMarker>
              <MapMarker
                position={{ lat: 35.86933415574914, lng: 128.59557688236237 }}
              ></MapMarker>
            </Map>
          </StoreWrap>
        </ItemContent>
      </ItemWrap>
    </div>
  );
};

export default StoreMapPage;
