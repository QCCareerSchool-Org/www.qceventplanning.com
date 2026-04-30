import type { Metadata } from 'next';
import App from './src/App';

export const metadata: Metadata = {
  title: 'How It Works 2',
  alternates: {
    canonical: '/how-it-works-2',
  },
};

export default function Page() {
  return <App />;
}
