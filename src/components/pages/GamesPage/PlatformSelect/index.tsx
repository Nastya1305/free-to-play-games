import { Select, Space } from "antd";
import { FC } from "react";
import { Platform } from "models/filter";

interface PlatformSelectProps {
   onChange(value: string): void
}


const PlatformSelect: FC<PlatformSelectProps> = ({ onChange }) => {

   return (
      <Space>
         <label>Platform:</label>
         <Select
            placeholder="Select a platform"
            style={{ width: 150 }}
            onChange={onChange}
            options={
               Array.from(Object.values(Platform).map(platformType => ({
                  value: platformType,
                  label: platformType,
               })))
            }
         />
      </Space>
   )
}

export default PlatformSelect;