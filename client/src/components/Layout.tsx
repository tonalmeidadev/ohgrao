interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="h-screen px-8">{children}</div>;
}
