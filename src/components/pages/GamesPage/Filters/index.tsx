import { FC } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { filterSlice } from "store/reducers/FilterSlice";

import { Space } from "antd";
import GenreSelect from "../GenreSelect";
import PlatformSelect from "../PlatformSelect";
import SortSelect from "../SortSelect";



const Filters: FC = () => {
   const { setCategory, setPlatform, setSort } = filterSlice.actions;
   const filter = useAppSelector(state => state.filterReducer);
   const dispatch = useAppDispatch();

   return (
      <Space size={24} wrap>
         <GenreSelect value={filter.category} onChange={value => dispatch(setCategory(value))} />
         <PlatformSelect value={filter.platform} onChange={value => dispatch(setPlatform(value))} />
         <SortSelect value={filter["sort-by"]} onChange={value => dispatch(setSort(value))} />
      </Space>
   )
}

export default Filters;