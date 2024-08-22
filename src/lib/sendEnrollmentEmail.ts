export const sendEnrollmentEmail = async (enrollmentId: number, code: string): Promise<void> => {
  console.log('sending enrollment email', enrollmentId);
  const url = `${process.env.ENROLLMENT_ENDPOINT}/${enrollmentId}/email`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'X-API-Version': '2',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }
  await response.json();
};
