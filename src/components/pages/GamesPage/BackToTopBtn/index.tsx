import { FC, useEffect, useState } from "react";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";


const BackToTopBtn: FC = () => {
   const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

   function setBtnState() {
      if (window.scrollY > 100) {
         setBackToTopButton(true)
      } else {
         setBackToTopButton(false)
      }
   }
   useEffect(() => {
      window.addEventListener('scroll', setBtnState);
      return () => window.removeEventListener('scroll', setBtnState);
   }, []);


   return (
      <>
         {
            backToTopButton &&
            <Button
               icon={<ArrowUpOutlined />}
               size="middle"
               shape="circle"
               type="primary"
               style={{
                  position: 'fixed',
                  bottom: '50px',
                  right: '50px'
               }}
               onClick={() => window.scrollTo(0, 0)}
            />
         }
      </>
   )
}

export default BackToTopBtn;