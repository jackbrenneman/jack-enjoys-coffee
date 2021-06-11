/**
 * Normalizers for any queries regarding signing in users.
 */
import jwt from 'jsonwebtoken';

export const normalizeSigninMutation = (user) => {
  const { user_id, user_name, email } = user;
  return {
    user: {
      user_id,
      user_name,
      email,
    },
    token: jwt.sign({ ...user }, process.env.JWT_SECRET, { expiresIn: '1h' }),
  };
};
