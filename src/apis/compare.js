import axios from "axios";

export async function postCompare(payload) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_DOMAIN}/compare/`,
      payload, // axios는 자동으로 JSON 생성해줌!
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // axios는 .data에 JSON 응답이 들어있음
  } catch (error) {
    // axios 에러 구조에 맞게 처리
    const status = error.response?.status;
    const message = error.response?.data;

    throw new Error(`API Error: ${status} / ${JSON.stringify(message)}`);
  }
}
