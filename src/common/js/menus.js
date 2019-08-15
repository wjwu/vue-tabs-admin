export const HOME = 'HOME';
export const USER = 'USER';
export const USER_LIST = 'USER_LIST';
export const USER_LIST1 = 'USER_LIST1';
export const USER_DETAIL = 'USER_DETAIL';

export default {
  [HOME]: {
    name: HOME,
    title: '首页',
    path: '/',
    isActive: true,
    loading: true
  },
  [USER_LIST]: {
    name: USER_LIST,
    title: '用户列表',
    path: '/user/list',
    isActive: false,
    loading: true
  },
  [USER_LIST1]: {
    name: USER_LIST1,
    title: '用户列表1',
    path: '/user/list1',
    isActive: false,
    loading: true
  },
  [USER_DETAIL](userId) {
    return {
      name: USER_DETAIL,
      title: '用户详情',
      path: `/user/detail/${userId}`,
      isActive: false,
      loading: true
    };
  },
  // [OPERATION_ARTICLE_ADD](mediaType, albumId, columnId) {
  //   let path = `/operation/article/add/${mediaType}`;
  //   if (albumId) {
  //     if (columnId) {
  //       path = `/operation/article/add/${albumId}/${mediaType}/${columnId}`;
  //     } else {
  //       path = `/operation/article/add/${albumId}/${mediaType}`;
  //     }
  //   } else {
  //     if (columnId) {
  //       path = `/operation/article/add/${mediaType}/${columnId}`;
  //     } else {
  //       path = `/operation/article/add/${mediaType}`;
  //     }
  //   }
  //   return {
  //     name: OPERATION_ARTICLE_ADD,
  //     title: '添加内容',
  //     path,
  //     isActive: false,
  //     loading: true
  //   };
  // },
  // [OPERATION_ARTICLE_EDIT](id, name, status) {
  //   let path = `/operation/article/edit/${id}`;
  //   if (status) {
  //     path = `/operation/article/edit/${id}/${status}`;
  //   }
  //   return {
  //     name: `${OPERATION_ARTICLE_EDIT}_${id}`,
  //     title: `修改内容-${name}`,
  //     path,
  //     isActive: false,
  //     loading: true
  //   };
  // },
  // [OPERATION_ALBUM_ADD]: {
  //   name: OPERATION_ALBUM_ADD,
  //   title: '添加专辑',
  //   path: '/operation/album/add',
  //   isActive: false,
  //   loading: true
  // },
  // [OPERATION_ALBUM_EDIT](id, name) {
  //   return {
  //     name: OPERATION_ALBUM_EDIT,
  //     title: `修改专辑-${name}`,
  //     path: `/operation/album/edit/${id}`,
  //     isActive: false,
  //     loading: true
  //   };
  // },
  // [OPERATION_ALBUM_DETAILS](id, name, mediaType, columnId) {
  //   return {
  //     name: OPERATION_ALBUM_DETAILS,
  //     title: `专辑内容-${name}`,
  //     path: `/operation/album/details/${id}/${name}/${mediaType}/${columnId}`,
  //     isActive: false,
  //     loading: true
  //   };
  // }
};
