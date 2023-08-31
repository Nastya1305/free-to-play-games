import { FC } from "react";
import { Select, Space } from "antd";
import { Category } from "models/filter";


interface GenreSelectProps {
   onChange(value: string): void
}


const GenreSelect: FC<GenreSelectProps> = ({ onChange }) => {
   return (
      <Space>
         <label>Genre:</label>
         <Select
            showSearch
            placeholder="Select a genre"
            style={{ width: 150 }}
            onChange={onChange}
            filterOption={(input, option) =>
               (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={
               Array.from(Object.values(Category).map(genre => ({
                  value: genre,
                  label: genre,
               })))
            }
         />
      </Space>
   )
}

export default GenreSelect;