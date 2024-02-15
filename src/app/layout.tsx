import './globals.css';

type props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: props) {
  return children;
}
