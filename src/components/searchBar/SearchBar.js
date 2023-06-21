import React from "react";
import { CloseIcon, SearchBarIcon } from "../../assets";
import { Input, StyledInput } from "./styles";

 const SearchBar = ({text, clearInput, handleChange}) => {

  return (
      <StyledInput className={"inputWithIcon"}>
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Pesquisar"
        />
        <div className="left-icon">
          <SearchBarIcon />
        </div>

        <button className="right-icon" onClick={clearInput}>
          <CloseIcon />
        </button>
      </StyledInput>
  );
};

export default SearchBar;