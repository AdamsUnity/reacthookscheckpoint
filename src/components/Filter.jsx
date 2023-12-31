import React from "react";
import { Input, Select } from "antd";

const { Search } = Input;

const Filter = ({ memorizeMovies: { myMemorizeMovies }, setMyMovies }) => {
  //filter movies by rate

  const filterByRate = (rate) => {
    let filteredMovies = myMemorizeMovies.filter(
      (item) => item.rating === Number(rate)
    );
    setMyMovies(filteredMovies);
  };
  // filter by search

  const filterBySearch = (value) => {
    // console.log(value);
    let filteredMovies = myMemorizeMovies.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim())
    );
    setMyMovies(filteredMovies);
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <Search
        placeholder="Search"
        enterButton
        style={{
          width: 250,
        }}
        onSearch={(value) => filterBySearch(value)}
      />

      {/* the filtering movie bt rate */}
      <Select
        defaultValue="Filter by rate"
        style={{
          width: 150,
        }}
        onChange={(value) => filterByRate(value)}
        options={[
          {
            value: "1",
            label: "1⭐",
          },
          {
            value: "2",
            label: "2⭐⭐",
          },
          {
            value: "3",
            label: "3⭐⭐⭐",
          },
          {
            value: "4",
            label: "4⭐⭐⭐⭐",
          },
          {
            value: "5",
            label: "5⭐⭐⭐⭐⭐",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
