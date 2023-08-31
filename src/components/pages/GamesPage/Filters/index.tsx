import { FC } from "react";

import { useAppDispatch } from "hooks/redux";
import { filterSlice } from "store/reducers/FilterSlice";

import { Space } from "antd";
import GenreSelect from "../GenreSelect";
import PlatformSelect from "../PlatformSelect";
import SortSelect from "../SortSelect";



const Filters: FC = () => {
   const { setCategory, setPlatform, setSort } = filterSlice.actions;
   const dispatch = useAppDispatch();

   return (
      <Space size={24} wrap>
         <GenreSelect onChange={value => dispatch(setCategory(value))} />
         <PlatformSelect onChange={value => dispatch(setPlatform(value))} />
         <SortSelect onChange={value => dispatch(setSort(value))} />
      </Space>
   )
}

export default Filters;