import React from "react";


type Props = {
   
    children?: JSX.Element | JSX.Element[] | undefined;
  };
export const PublicRouter: React.FC<Props> = ({children}) => {

  return (<>{children}</>)
  
}
