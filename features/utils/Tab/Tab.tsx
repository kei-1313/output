'use client'

import { ReactElement, ReactNode, useMemo, useState, createContext } from "react";
import TabItem from "../TabItem/TabItem";

interface TabItem {
  tabKey: string | number;
  label: string | number | JSX.Element;
  children: ReactNode;
  className?: string;
}

interface TabProps {
  defaultKey: string | number;
  children: ReactElement<TabItem> | ReactElement<TabItem>[];
  className?: string;
}

interface TabHeader {
  tabKey: string | number;
  label: string | number | JSX.Element;
};

interface TabContextState {
  activeKey: string | number;
};

export const TabContext = createContext<TabContextState>({
  activeKey: "",
});


const Tab = ({ defaultKey, children, className }: TabProps) => {
  const [activeKey, setActiveKey] = useState(defaultKey);
  const headers = useMemo(() => {
    const headerArray: TabHeader[] = [];
    if(Array.isArray(children)) {
      children.forEach(content => {
        // if (content.type !== TabItem) throw Error("TabItemを利用してください");
        headerArray.push({
          tabKey: content.props.tabKey,
          label: content.props.label,
        });
      })
    } else if (children.type === TabItem){
      headerArray.push({
        tabKey: children.props.tabKey,
        label: children.props.label,
      });
    } else {
      // -2- childrenの型を指定
      throw Error("TabItemを利用してください");
    }

    return headerArray;
  },[children]);

  return (
    <TabContext.Provider value={{ activeKey }}>
      <ul className="flex gap-5 max-w-[880px] mx-auto mb-4 px-4">
        {headers.map((header) => {
          return (
            <li className="" key={ header.tabKey }>
              <button
                className={header.tabKey === activeKey? 'text-slate-800 text-lg font-bold max-md:text-base': 'text-slate-400 text-lg font-bold max-md:text-base'}
                onClick={() => setActiveKey(header.tabKey)}
              >
                {header.label}
              </button>
            </li>
          );
        })}
      </ul>
      {children}
    </TabContext.Provider>
  )
}

export default Tab
