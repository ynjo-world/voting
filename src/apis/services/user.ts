type LoginData = {
  code: string;
  message: string;
  data: {
    expiredTime: number;
    walletUser: {
      id: string;
      email: string;
      password: string;
      name: string;
      dtype: string;
      walletName: string;
      type: string;
    };
    accessToken: string;
  };
};

const getCleanLoginData = (rawLoginData: LoginData) => {
  const name = rawLoginData.data.walletUser.name;
  const accessToken = rawLoginData.data.accessToken;
  const expiredTime = rawLoginData.data.expiredTime;
  return { name, accessToken, expiredTime };
};

export { getCleanLoginData };
