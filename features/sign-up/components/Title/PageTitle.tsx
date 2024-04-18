export interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="center text-[40px] font-bold text-black">{children}</h1>
  );
};

export default PageTitle;
