import session from './session';

const operator = session.getObject('operator');
const menus = [];
let resources = [];
try {
  operator.moduleDtoList.forEach(menu => {
    menus.push(menu.id);
    resources = resources.concat(
      menu.resourceDtoList.map(resource => resource.code)
    );
  });
} catch (e) {
  window.location.href = './login.html';
}

export default {
  install(Vue) {
    Vue.prototype.$validate = code => {
      if (typeof code === 'string') {
        return menus.indexOf(code) >= 0 || resources.indexOf(code) >= 0;
      } else if (code instanceof Array) {
        let result = false;
        for (let item of code) {
          if (menus.indexOf(item) >= 0 || resources.indexOf(item) >= 0) {
            result = true;
            break;
          }
        }
        return result;
      }
      throw new TypeError(code);
    };
  }
};
