import { unstable_flag as flag } from '@vercel/flags/next';
 
export const short = flag({
  key: 'short',
  decide: () => false,
});