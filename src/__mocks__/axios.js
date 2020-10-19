export default {
  get: jest.fn().mockImplementation(() =>
    Promise.resolve({
      data: {
        id: "28762",
        name: "Jay",
      },
    })
  ),
  post: jest.fn(() => Promise.resolve({ data: {} }).catch((error) => error)),
};
