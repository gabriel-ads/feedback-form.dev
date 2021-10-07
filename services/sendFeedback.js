/**
 *
 * @param {string} name
 * @param {number} rating
 * @param {string} message
 */
export default async function sendFeedback(name, rating, message) {
  const formResponses = {
    name: name,
    rating: rating,
    message: message,
  };
  const feedbackRes = await fetch(
    "https://5f4b11f341cb390016de37aa.mockapi.io/api/v1/feedback",
    {
      method: "POST",
      body: JSON.stringify(formResponses),
    }
  );
  const feedbackResData = await feedbackRes.json();

  if ([400, 401, 404, 422].includes(feedbackRes.status)) {
    return Promise.reject(feedbackRes);
  } else {
    return feedbackResData;
  }
}
