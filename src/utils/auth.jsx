export const signUp = async () => {
  return new Promise((resolve, reject) => {
    resolve({ message: "User successfully registered!" });
  });
};

export const signIn = async () => {
  return new Promise((resolve, reject) => {
    resolve({ token: "fake-jwt-token" });
  });
};

export const checkToken = async (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Jose", email: "fake-email@example.com", _id: "fake-id" },
    });
  });
};
