import { FC } from "react";
import { GlobalOutlined, WindowsFilled } from "@ant-design/icons";
import { Tag } from "antd";


interface PlatformTagProps {
   platform: string
}


const PlatformTag: FC<PlatformTagProps> = ({ platform }) => {
   return (
      <>
         {
            platform === 'PC (Windows)' ? <Tag icon={<WindowsFilled />}>PC</Tag>
               : platform === 'Web Browser' ? <Tag icon={<GlobalOutlined />}>Browser</Tag>
                  : null
         }
      </>
   )
}

export default PlatformTag;