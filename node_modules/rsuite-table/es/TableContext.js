import createContext from './utils/createContext';
import translateDOMPositionXY from './utils/translateDOMPositionXY';
import isRTL from './utils/isRTL';
var TableContext = createContext({
  rlt: isRTL(),
  hasCustomTreeCol: false,
  translateDOMPositionXY: translateDOMPositionXY
});
export default TableContext;