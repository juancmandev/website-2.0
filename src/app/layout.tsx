interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return <>{children}</>;
}
