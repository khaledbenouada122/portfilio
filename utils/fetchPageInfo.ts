import { PageInfo } from './../typings.d';
import {server} from '../config/index'


export const fetchPageInfo = async () => {
    try {
      const res = await fetch(`${server}/api/getPageInfo`);
  
      if (!res.ok) {
        throw new Error(`Fetch failed with status ${res.status}`);
      }
  
      const data = await res.json();
      const pageInfo: PageInfo = data.pageInfo;
      return pageInfo;
    } catch (error) {
      console.error('An error occurred during fetchPageInfo:', error);
      throw error;
    }
  };
  