'use client';

import {
  ReactElement,
  ReactNode,
  useMemo,
  useState,
  createContext,
} from 'react';
import TabItem from '../TabItem/TabItem';

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
}

interface TabContextState {
  activeKey: string | number;
}

export const TabContext = createContext<TabContextState>({
  activeKey: '',
});

const Tab = ({ defaultKey, children, className }: TabProps) => {
  const [activeKey, setActiveKey] = useState(defaultKey);
  const headers = useMemo(() => {
    const headerArray: TabHeader[] = [];
    if (Array.isArray(children)) {
      children.forEach((content) => {
        headerArray.push({
          tabKey: content.props.tabKey,
          label: content.props.label,
        });
      });
    } else if (children.type === TabItem) {
      headerArray.push({
        tabKey: children.props.tabKey,
        label: children.props.label,
      });
    } else {
      throw Error('TabItemを利用してください');
    }

    return headerArray;
  }, [children]);

  return (
    <TabContext.Provider value={{ activeKey }}>
      <ul className="mx-auto mb-4 flex max-w-[880px] gap-5 px-4">
        {headers.map((header) => {
          return (
            <li className="" key={header.tabKey}>
              <button
                className={
                  header.tabKey === activeKey
                    ? 'text-lg font-bold text-slate-800 max-md:text-base'
                    : 'text-lg font-bold text-slate-400 max-md:text-base'
                }
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
  );
};

export default Tab;
