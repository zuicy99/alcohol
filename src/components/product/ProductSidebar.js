import React, { useEffect, useState } from "react";
import { SideBar } from "../../styles/product/sideBarCss";
import SideTitle from "../basic/SideTitle";
import SideBt from "../basic/SideBt";
import { useNavigate } from "react-router";

const ProductSidebar = type => {
  // const [activeSide, setActiveSide] = useState(side);

  const typeProps = type.type;

  const naviage = useNavigate();
  const [status, setStatus] = useState([]);

  const handleClickAll = typeProps => {
    if (typeProps === "위스키") {
      console.log("typeProps : ", typeProps);
      naviage("/product/list?type=위스키");
    } else if (typeProps === "와인") {
      naviage("/product/list?type=와인");
    } else if (typeProps === "리큐르") {
      naviage("/product/list?type=리큐르");
    } else if (typeProps === "브랜디") {
      naviage("/product/list?type=브랜디");
    }
  };
  const handleClickSelectOne = typeProps => {
    console.log("typeProps : ", typeProps);
    if (typeProps === "위스키") {
      naviage("/product/list?type=위스키&subtype=싱글몰트");
    } else if (typeProps === "와인") {
      naviage("/product/list?type=와인&subtype=레드와인");
    } else if (typeProps === "브랜디") {
      naviage("/product/list?type=브랜디&subtype=꼬냑");
    }
  };
  const handleClickSelectTwo = typeProps => {
    console.log("typeProps : ", typeProps);
    if (typeProps === "위스키") {
      naviage("/product/list?type=위스키&subtype=브랜디드");
    } else if (typeProps === "와인") {
      naviage("/product/list?type=와인&subtype=화이트와인");
    } else if (typeProps === "리큐르") {
      naviage("/product/list?type=리큐르");
    } else if (typeProps === "브랜디") {
      naviage("/product/list?type=브랜디&subtype=깔바도스");
    }
  };
  const handleClickSelectThree = typeProps => {
    console.log("typeProps : ", typeProps);
    if (typeProps === "위스키") {
      naviage("/product/list?type=위스키&subtype=버번");
    } else if (typeProps === "와인") {
      naviage("/product/list?type=와인&subtype=스파클링와인");
    } else if (typeProps === "리큐르") {
      naviage("/product/list?type=리큐르");
    } else if (typeProps === "브랜디") {
      naviage("/product/list?type=브랜디&subtype=아르마냑");
    }
  };
  const handleClickSelectFour = typeProps => {
    if (typeProps === "와인") {
      naviage("/product/list?type=와인&subtype=로제와인");
    }
  };

  useEffect(() => {
    let resultColumn;
    if (typeProps === "위스키") {
      console.log("위스키입니다.");
      resultColumn = whiskeyColumn;
    } else if (typeProps === "와인") {
      console.log("와인입니다.");
      resultColumn = wineColumn;
    } else if (typeProps === "브랜디") {
      console.log("브랜디");
      resultColumn = brandyColumn;
    } else if (typeProps === "리큐르") {
      console.log("리큐르");
      resultColumn = liqueurColumn;
    } else {
      console.log("No match");
    }
    console.log("result", resultColumn);
    setStatus(resultColumn);
  }, [typeProps]);

  const whiskeyColumn = ["WHISKEY", "싱글몰트", "블렌디드", "버번"];
  const wineColumn = [
    "Wine",
    "레드와인",
    "화이트와인",
    "스파클링 와인",
    "로제 와인",
  ];
  const liqueurColumn = ["Liqueur"];
  const brandyColumn = ["BRANDY", "꼬냑", "깔바도스", "아르마냑"];

  return (
    <SideBar>
      <SideTitle sideTitle={`${status?.[0]}`} />
      <hr />
      <div className="side-nav">
        {/* {console.log(`activeSide ${activeSide}`)} */}
        <SideBt
          sidenNm="ALL"
          sideId={1}
          // active={activeSide === 1} // 고유 숫자와 비교
          onClick={() => handleClickAll(typeProps)} // 고유 숫자 전달
        />
        {status?.[1] ? (
          <SideBt
            sidenNm={`${status?.[1]}`}
            sideId={2}
            // active={activeSide === 2}
            onClick={() => handleClickSelectOne(typeProps)}
          />
        ) : (
          ""
        )}
        {status?.[2] ? (
          <SideBt
            sidenNm={`${status?.[2]}`}
            sideId={3}
            // active={activeSide === 3}
            onClick={() => handleClickSelectTwo(typeProps)}
          />
        ) : (
          ""
        )}
        {status?.[3] ? (
          <SideBt
            sidenNm={`${status?.[3]}`}
            sideId={4}
            // active={activeSide === 4}
            onClick={() => handleClickSelectThree(typeProps)}
          />
        ) : (
          ""
        )}
        {status?.[4] ? (
          <SideBt
            sidenNm={`${status?.[4]}`}
            sideId={4}
            // active={activeSide === 4}
            onClick={() => handleClickSelectFour(typeProps)}
          />
        ) : (
          ""
        )}
      </div>
    </SideBar>
  );
};

export default ProductSidebar;
