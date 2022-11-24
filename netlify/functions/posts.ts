export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf8',
    },
    body: JSON.stringify(
      [
        {
          id: 1,
          title: 'My first post',
          body: 'This is a work of great genius.',
        },
        {
          id: 2,
          title: 'Another post',
          body: 'I may have peaked in my first post.',
        },
      ],
      null,
      2,
    ),
  };
};
