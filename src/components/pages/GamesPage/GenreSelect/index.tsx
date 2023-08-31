import { FC } from "react";
import { Select, Space } from "antd";
import { Category } from "models/filter";


interface GenreSelectProps {
   value: string | null,
   onChange(value: string): void
}


const GenreSelect: FC<GenreSelectProps> = ({ value, onChange }) => {
   return (
      <Space>
         <label>Genre:</label>
         <Select
            value={value}
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