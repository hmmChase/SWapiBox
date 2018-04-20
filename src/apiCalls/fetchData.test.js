// import React from 'react';
// import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import { fetchCategoryData, makeFetch } from './fetchData';

describe('fetchData', () => {

  describe('fetchCategoryData', () => {

    it.skip('calls correct function', () => {
      // inputs
      const category = 'people';

      // outputs


      // execute
      fetchCategoryData.instance(category);


      // assert
      expect(fetchCategoryData()).toHaveBeenCalled();
    });

  });

  describe('makeFetch', () => {

    let mockPeopleData;
    let mockError;
    let mockCategory1;
    let mockCategory2;

    beforeEach(() => {

      mockPeopleData =
        [
          {
            name: 'Luke Skywalker',
            Homeworld: 'Alderaan',
            'HomeWorld Population': "2000000000",
            Species: 'Human'
          }
        ];

      mockError = 'error';
      // mockError = Error(
      //   'Error fetching houses: Bad response, status code - 500'
      // );

      mockCategory1 = 'people';
      mockCategory2 = 'poeple';






      // window.fetch = jest.fn().mockImplementation((URL) => {
      //   switch (URL.includes('people')) {
      //   case true:
      //     return Promise.resolve({
      //       ok: true,
      //       json: () => {
      //         return Promise.resolve(mockPeopleReturn);
      //       }
      //     });
      //   case false:
      //     return Promise.resolve({ message: 'error' });
      //   default:
      //     return;
      //   }
      // });

    });


    it('should fetch from the api based on provided URL', async () => {

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockPeopleData);
          }
        });
      });


      const data = await makeFetch();
      expect(data).toEqual(mockPeopleData);
      // await expect(makeFetch(mockCategory1)).resolves.toEqual(mockPeopleData);

    });

    it('should return an error message if a bad request is sent', async () => {

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          ok: false,
          status: 500
        });
      });

      const data = await makeFetch(mockCategory1);
      expect(data).rejects.toEqual(mockError);
    });
  });

});