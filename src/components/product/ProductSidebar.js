import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideBar } from "../../styles/product/sideBarCss";
import SideBt from "../basic/SideBt";
import SideTitle from "../basic/SideTitle";

const ProductSidebar = type => {
  // search
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");
  // Type,sub-type
  const typeProps = type.type;

  const naviage = useNavigate();
  const [status, setStatus] = useState([]);

  const handleClickAll = typeProps => {
    switch (typeProps) {
      case "위스키":
        naviage("/product/list?type=위스키");
        break;
      case "와인":
        naviage("/product/list?type=와인");
        break;
      case "리큐르":
        naviage("/product/list?type=리큐르");
        break;
      case "브랜디":
        naviage("/product/list?type=브랜디");
        break;
      default:
        break;
    }
  };
  const handleClickSelectOne = typeProps => {
    switch (typeProps) {
      case "위스키":
        naviage("/product/list?type=위스키&subtype=싱글몰트");
        break;
      case "와인":
        naviage("/product/list?type=와인&subtype=레드와인");
        break;
      case "브랜디":
        naviage("/product/list?type=브랜디&subtype=꼬냑");
        break;
      default:
        break;
    }
  };

  const handleClickSelectTwo = typeProps => {
    switch (typeProps) {
      case "위스키":
        naviage("/product/list?type=위스키&subtype=블렌디드");
        break;
      case "와인":
        naviage("/product/list?type=와인&subtype=화이트와인");
        break;
      case "브랜디":
        naviage("/product/list?type=브랜디&subtype=깔바도스");
        break;
      default:
        break;
    }
  };

  const handleClickSelectThree = typeProps => {
    switch (typeProps) {
      case "위스키":
        naviage("/product/list?type=위스키&subtype=버번");
        break;
      case "와인":
        naviage("/product/list?type=와인&subtype=스파클링와인");
        break;
      case "브랜디":
        naviage("/product/list?type=브랜디&subtype=아르마냑");
        break;
      default:
        break;
    }
  };

  const handleClickSelectFour = typeProps => {
    switch (typeProps) {
      case "와인":
        naviage("/product/list?type=와인&subtype=로제와인");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let resultColumn;
    if (typeProps === "위스키") {
      resultColumn = whiskeyColumn;
    } else if (typeProps === "와인") {
      resultColumn = wineColumn;
    } else if (typeProps === "브랜디") {
      resultColumn = brandyColumn;
    } else if (typeProps === "리큐르") {
      resultColumn = liqueurColumn;
    } else if (searchQuery !== null) {
      resultColumn = searchColumn;
    } else {
      console.log("No match");
    }
    console.log("result", resultColumn);
    setStatus(resultColumn);
  }, [typeProps]);

  const whiskeyColumn = ["WHISKEY", "ALL", "싱글몰트", "블렌디드", "버번"];
  const wineColumn = [
    "WINE",
    "ALL",
    "레드와인",
    "화이트와인",
    "스파클링 와인",
    "로제 와인",
  ];
  const liqueurColumn = ["LIQUEUR", "ALL"];
  const brandyColumn = ["BRANDY", "ALL", "꼬냑", "깔바도스", "아르마냑"];
  const searchColumn = ["검색결과"];

  return (
    <SideBar>
      <SideTitle sideTitle={`${status?.[0]}`} />
      <hr />
      <div className="side-nav">
        <SideBt
          sidenNm={`${status?.[1]}`}
          sideId={1}
          // active={activeSide === 1} // 고유 숫자와 비교
          onClick={() => handleClickAll(typeProps)}
        />
        {status?.[1] ? (
          <SideBt
            sidenNm={`${status?.[2]}`}
            sideId={2}
            // active={activeSide === 2}
            onClick={() => handleClickSelectOne(typeProps)}
          />
        ) : (
          ""
        )}
        {status?.[2] ? (
          <SideBt
            sidenNm={`${status?.[3]}`}
            sideId={3}
            // active={activeSide === 3}
            onClick={() => handleClickSelectTwo(typeProps)}
          />
        ) : (
          ""
        )}
        {status?.[3] ? (
          <SideBt
            sidenNm={`${status?.[4]}`}
            sideId={4}
            // active={activeSide === 4}
            onClick={() => handleClickSelectThree(typeProps)}
          />
        ) : (
          ""
        )}
        {status?.[4] ? (
          <SideBt
            sidenNm={`${status?.[5]}`}
            sideId={5}
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
