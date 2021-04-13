import axios from 'axios';
import AuthModule from '../modules/Auth.module';

export default async ({ url, method, data, signal, params }) => {
  try {
    const result = await axios({
      method,
      url,
      ...(params && { params }),
      ...(signal && { cancelToken: signal }),
      ...(data && { data }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        // ...(AuthModule.getToken() && {
        //   Authorization: `Bearer ${AuthModule.getToken()}`,
        // }),
      },
    });
    return {data: result.data};
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Error: ', 'Cancelling axios');
    }
    return {error}
  }
};