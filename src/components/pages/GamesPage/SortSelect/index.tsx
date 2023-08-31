import { FC } from "react";
import { Select, Space } from "antd";
import { SortBy } from "models/filter";


interface SortSelectProps {
   value: string | null,
   onChange(value: string): void
}


const SortSelect: FC<SortSelectProps> = ({ value, onChange }) => {
   return (
      <Space>
         <label>Sort by:</label>
         <Select
            value={value}
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