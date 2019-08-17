export const HOME = 'HOME';
export const USER = 'USER';
export const USER_LIST = 'USER_LIST';
export const USER_DETAIL = 'USER_DETAIL';

const menu = (name, title, path, isActive = true, loading = true) => {
  return {
    name,
    title,
    path,
    isActive,
    loading
  };
};

export default {
  [HOME]: menu(HOME, '首页', '/'),
  [USER_LIST]: menu(USER_LIST, '用户列表', '/user/list'),
  [USER_DETAIL](userId) {
    return menu(`${USER_DETAIL}_${userId}`, '用户详情', `/user/detail/${userId}`);
  }
};
