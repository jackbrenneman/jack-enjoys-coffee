/**
 * Top level component for the site.
 */
import { createContext } from 'react';

export const UserContext = createContext({
  user: { user_id: null, user_name: '' },
});
