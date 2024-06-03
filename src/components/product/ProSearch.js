import React from "react";
import { ProSearchForm } from "../../styles/common/searchCss";

const ProSearch = ({
  // selecteOption,
  // onChangeOption,
  // searchText,
  // onSearchText,
  // onSubmit,
  // handleClickSearch,
  onSearchChange,
  searchValue,
  searchName,
  // placeholder,
  onSearchClick,
  onSelectChange,
  searchPlaceholder,
  // 최근검색어
  onRecentClick,
}) => {
  return (
    <div>
      <ProSearchForm>
        <div className="search-wrap">
          <div className="search-info">
            <input
              type="text"
              className="search-word"
              placeholder={searchPlaceholder}
              name={searchName}
              value={searchValue}
              onChange={onSearchChange}
              onClick={onRecentClick}
            />
            <button
              className="search-bt"
              onClick={onSearchClick}
              style={{ float: "right" }}
            >
              <img src={process.env.PUBLIC_URL + `/images/search.png`} />
            </button>
          </div>
        </div>
      </ProSearchForm>
    </div>
  );
};

export default ProSearch;
