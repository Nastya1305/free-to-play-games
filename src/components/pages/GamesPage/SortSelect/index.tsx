import { FC } from "react";
import { Select, Space } from "antd";
import { SortBy } from "models/filter";


interface SortSelectProps {
   onChange(value: string): void
}


const SortSelect: FC<SortSelectProps> = ({ onChange }) => {
   return (
      <Space>
         <label>Sort by:</label>
         <Select
            placeholder="Select a sort"
            style={{ width: 150 }}
            onChange={onChange}
            options={
               Array.from(Object.values(SortBy).map(sortType => ({
                  value: sortType,
                  label: sortType,
               })))
            }
         />
      </Space>
   )
}

export default SortSelect;