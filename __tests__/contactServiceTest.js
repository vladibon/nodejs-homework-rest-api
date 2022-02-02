/* eslint-disable no-undef */
const { NotFound } = require('http-errors');
const { getContactById } = require('../controllers/contacts');
const { Contact } = require('../models');

describe('Contacts service getContactById test', () => {
  it('Should return contact data by providen ID', async () => {
    const mReq = {
      params: { contactId: '61fa6c18d607ca7c1a46abb4' },
      user: { _id: '61fa6be2d607ca7c1a46abad' },
    };
    const mRes = {
      json: jest.fn(),
    };

    const contact = {
      _id: mReq.params.contactId,
      name: 'Aaaaaaaaaa',
      owner: { _id: mReq.user._id },
    };

    jest.spyOn(Contact, 'findOne').mockImplementationOnce(async () => contact);

    await getContactById(mReq, mRes);

    expect(mRes.json).toHaveBeenCalled();

    // expect(result._id).toEqual(contact._id);
    // expect(result.owner._id).toEqual(contact.owner._id);
    // expect(result.name).toBeDefined();
  });

  it('Should return error in case contact did not find', async () => {
    jest.spyOn(Contact, 'findOne').mockImplementationOnce(async () => null);

    const mReq = {
      params: { contactId: '61fa6c18d607ca7c1a46abb4' },
      user: { _id: '61fa6be2d607ca7c1a46abad' },
    };
    const mRes = {
      json: jest.fn(),
    };

    try {
      await getContactById(mReq, mRes);
    } catch (error) {
      expect(error).toEqual(new NotFound());
    }
  });
});
