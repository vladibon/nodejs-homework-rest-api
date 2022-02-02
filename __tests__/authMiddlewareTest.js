/* eslint-disable no-undef */
// const { Unauthorized } = require('http-errors');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const { auth } = require('../middlewares');

// describe('Auth middleware test', () => {
// it('Should call next() and add user property to req object', () => {
//   const _id = '61fa6be2d607ca7c1a46abad';
//   const token = jwt.sign({ id: _id }, process.env.SECRET_KEY, {
//     expiresIn: '1d',
//   });
//   const mReq = { headers: { authorization: `Bearer ${token}` } };
//   const mRes = {};
//   const mockNext = jest.fn();
//   const user = {
//     _id: { $oid: '61fa6be2d607ca7c1a46abad' },
//     email: 'vl_bondar@hotmail.com',
//     verify: true,
//     subscription: 'starter',
//     avatarURL: '//www.gravatar.com/avatar/841ab9d60b5363f305448a9cafb05e58',
//     token:
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE2YmUyZDYwN2NhN2MxYTQ2YWJhZCIsImlhdCI6MTY0MzgwMTYxMiwiZXhwIjoxNjQzODg4MDEyfQ.sj8JJAuHqVp__EC7WuJan1VF1xRkDkVKIJWEjyLVHHA',
//     password: '$2a$10$6Ucyfv6htRkmyGvrN7UmzulZ0dMZHAi2BrbimFeQwagK9jgOaeDza',
//     verificationToken: null,
//     createdAt: { $date: '2022-02-02T11:32:50.856Z' },
//     updatedAt: { $date: '2022-02-02T11:33:32.931Z' },
//   };

//   auth(mReq, mRes, mockNext, user);

//   expect(mReq.user._id).toEqual(_id);
//   expect(mockNext).toHaveBeenCalled();
// });

// it('Should call next() with error in case authorization header is absent', () => {
//   const mReq = { headers: {} };
//   const mRes = {};
//   const mockNext = jest.fn();
// const user = {
//   _id: { $oid: '61fa6be2d607ca7c1a46abad' },
//   email: 'vl_bondar@hotmail.com',
//   verify: true,
//   subscription: 'starter',
//   avatarURL: '//www.gravatar.com/avatar/841ab9d60b5363f305448a9cafb05e58',
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE2YmUyZDYwN2NhN2MxYTQ2YWJhZCIsImlhdCI6MTY0MzgwMTYxMiwiZXhwIjoxNjQzODg4MDEyfQ.sj8JJAuHqVp__EC7WuJan1VF1xRkDkVKIJWEjyLVHHA',
//   password: '$2a$10$6Ucyfv6htRkmyGvrN7UmzulZ0dMZHAi2BrbimFeQwagK9jgOaeDza',
//   verificationToken: null,
//   createdAt: { $date: '2022-02-02T11:32:50.856Z' },
//   updatedAt: { $date: '2022-02-02T11:33:32.931Z' },
// };

//     auth(mReq, mRes, mockNext);

//     expect(mockNext).toHaveBeenCalledWith(new Unauthorized('Not authorized'));
//   });
// });

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });
