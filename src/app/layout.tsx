import { TodosProvider } from '@/context/todos';
// Josefin_Sans does not work, so use Josefin_Slab instead.
import { Josefin_Slab } from 'next/font/google';

import type { Metadata } from 'next';

import 'the-new-css-reset/css/reset.css';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Frontend Mentor - Todo app',
};

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <html lang="en" className={josefinSlab.className}>
      <body>
        <TodosProvider>{children}</TodosProvider>
      </body>
    </html>
  );
};

export default RootLayout;
