import { createContext } from '../utils';
var ListContext = createContext({
  bordered: false,
  size: 'md',
  manager: null
});
export default ListContext;