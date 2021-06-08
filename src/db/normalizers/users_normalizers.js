/**
 * Normalizers for any queries regarding users.
 */
export const normalizeUsers = (data) => {
  return data;
};

export const normalizeUsersMutation = (user) => {
  const { user_id, user_name, email } = user;
  return {
    user: {
      user_id,
      user_name,
      email,
    },
    token: 'test',
  };
};
