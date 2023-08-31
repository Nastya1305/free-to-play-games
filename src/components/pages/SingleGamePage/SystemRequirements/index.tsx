import { FC } from "react";
import { Descriptions } from "antd";
import { SystemRequirements } from "models/game";


interface SystemRequirmentsProps {
   systemRequirements: SystemRequirements
}


const SystemRequirments: FC<SystemRequirmentsProps> = ({ systemRequirements }) => {
   return (
      <Descriptions size="small" title="Minimum System Requirements" layout="vertical"
         column={{ xs: 2, lg: 5 }} bordered
         items={[
            { key: '1', label: 'OS', children: systemRequirements.os },
            { key: '2', label: 'Memory', children: systemRequirements.memory },
            { key: '3', label: 'Storage', children: systemRequirements.storage },
            { key: '4', label: 'Processor', children: systemRequirements.processor },
            { key: '5', label: 'Graphics', children: systemRequirements.graphics }
         ]}
      />
   )
}

export default SystemRequirments;