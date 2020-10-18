export default {
  get: jest.fn().mockImplementation(() =>
    Promise.resolve({
      data: {
        id: "28762",
        naem: "Jay",
      },
    })
  ),
  post: jest.fn(() => Promise.resolve({ data: {} }).catch((error) => error)),
};
