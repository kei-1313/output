'use client'

import { ReactNode, useContext } from "react";
import { TabContext } from "../Tab/Tab";

interface TabItemProps {
  tabKey: string | number;
  label: string | number | JSX.Element;
  children: ReactNode;
  className?: string;
}


const TabItem = ({tabKey, label, children, className}: TabItemProps) => {

  const { activeKey } = useContext(TabContext);

  return activeKey === tabKey ? (
    <div className="">{children}</div>
  ) : null;
}

export default TabItem
