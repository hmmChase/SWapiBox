import React from 'react';
import { shallow } from 'enzyme';
import FilmCrawl from './FilmCrawl';
import { fetchFilmCrawl } from '../../apiCalls/fetchFilmCrawl';
jest.mock('../../apiCalls/fetchFilmCrawl.js');
import * as mockData from '../../__mocks__/mockData';

describe('FilmCrawl', () => {
  let filmCrawl;

  beforeEach(() => {
    jest.resetAllMocks();

    filmCrawl = shallow(<FilmCrawl />, { disableLifecycleMethods: true });
  });

  it('matches snapshot with filmCrawl data fetched', () => {
    filmCrawl.setState({
      filmCrawl: mockData.cleanFilmData
    });

    expect(filmCrawl).toMatchSnapshot();
  });

  it('matches snapshot with error fetching film crawl data', () => {
    filmCrawl.setState({
      errorStatus: 'mock error'
    });

    expect(filmCrawl).toMatchSnapshot();
  });

  it('matches snapshot while fetching film crawl data', () => {
    filmCrawl = shallow(<FilmCrawl />);

    expect(filmCrawl).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls setFilmCrawl', async () => {
      // need help understanding this

      const setFilmCrawl = jest.spyOn(filmCrawl.instance(), 'setFilmCrawl');
      // setFilmCrawl = filmCrawl.instance().setFilmCrawl = jest.fn();

      filmCrawl.instance().componentDidMount();
      // filmCrawl = await shallow(<FilmCrawl />);

      expect(setFilmCrawl).toHaveBeenCalledTimes(1);
    });
  });

  describe('setFilmCrawl', () => {
    it('calls fetchFilmCrawl', async () => {
      await filmCrawl.instance().setFilmCrawl();

      expect(fetchFilmCrawl).toHaveBeenCalledTimes(1);
    });

    it('sets state.filmCrawl with fetched film crawl data,', async () => {
      fetchFilmCrawl.mockImplementation(() => mockData.cleanFilmData);
      await filmCrawl.instance().setFilmCrawl();

      expect(filmCrawl.state().filmCrawl).toEqual(mockData.cleanFilmData);
    });

    it('sets state.errorStatus with error if fetch fails,', async () => {
      const mockError = 'Network request failed. (error: mock)';
      fetchFilmCrawl.mockImplementation(() => {
        throw new Error(mockError);
      });
      await filmCrawl.instance().setFilmCrawl();

      expect(filmCrawl.state().errorStatus).toBe(mockError);
    });
  });

  describe('renderFilmCrawl', () => {
    it('returns error element if error set in state.errorStatus', () => {
      filmCrawl.setState({ errorStatus: 'mock error' });
      const renderFilmCrawl = filmCrawl.instance().renderFilmCrawl();

      expect(renderFilmCrawl).toEqual(<p>mock error</p>);
    });

    it('returns filmcrawl elements if filmcrawl set in state.filmCrawl', () => {
      filmCrawl.setState({ filmCrawl: mockData.cleanFilmData });
      const renderFilmCrawl = filmCrawl.instance().renderFilmCrawl();

      const results = (
        <div className="crawl-container">
          <div className="crawl-content">
            <p>Film Crawl</p>
            <p>Movie Title</p>
            <p>1982-09-18</p>
          </div>
        </div>
      );

      expect(renderFilmCrawl).toEqual(results);
    });

    it('returns loading element if state.filmCrawl is null', () => {
      const renderFilmCrawl = filmCrawl.instance().renderFilmCrawl();

      expect(renderFilmCrawl).toEqual(<p className="pretext">...loading</p>);
    });
  });
});
