/**
 * Normalizers for any queries regarding signing up users.
 */
import jwt from 'jsonwebtoken';

export const normalizeSignupMutation = (user) => {
  const { user_id, user_name, email } = user;
  return {
    user: {
      user_id,
      user_name,
      email,
    },
    token: jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '1h' }),
  };
};
