import { TableOptions } from '@nocobase/database';

export default {
  name: 'users',
  title: '用户',
  developerMode: true,
  internal: true,
  fields: [
    {
      interface: 'string',
      type: 'string',
      name: 'username',
      title: '用户名',
      unique: true,
      required: true,
      component: {
        type: 'string',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'string',
      type: 'string',
      name: 'nickname',
      title: '昵称',
      required: true,
      component: {
        type: 'string',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'phone',
      type: 'string',
      name: 'phone',
      unique: true,
      title: '手机号',
      component: {
        type: 'string',
        showInTable: true,
        showInDetail: true,
        showInForm: true,
      },
    },
    {
      interface: 'password',
      type: 'password',
      name: 'password',
      title: '密码',
      required: true,
      hidden: true,
      component: {
        type: 'password',
        showInForm: true,
      },
    },
    {
      interface: 'string',
      type: 'string',
      name: 'token',
      title: 'Token',
      unique: true,
      hidden: true,
    },
  ],
  actions: [
    {
      type: 'list',
      name: 'list',
      title: '查看',
    },
    {
      type: 'create',
      name: 'create',
      title: '创建',
      viewName: 'form',
    },
    {
      type: 'update',
      name: 'update',
      title: '编辑',
      viewName: 'form',
    },
    {
      type: 'destroy',
      name: 'destroy',
      title: '删除',
    },
  ],
  views: [
    {
      type: 'form',
      name: 'form',
      title: '表单',
      template: 'DrawerForm',
      developerMode: true,
    },
    {
      type: 'form',
      name: 'login',
      title: '登录',
      template: 'Login',
      developerMode: true,
    },
    {
      type: 'form',
      name: 'register',
      title: '注册',
      template: 'Register',
      developerMode: true,
    },
    {
      type: 'details',
      name: 'details',
      title: '详情',
      template: 'Details',
      actionNames: ['update'],
      developerMode: true,
    },
    {
      type: 'simple',
      name: 'simple',
      title: '简易模式',
      template: 'SimpleTable',
      actionNames: ['create', 'destroy'],
      detailsViewName: 'details',
      updateViewName: 'form',
      default: true,
    },
    {
      type: 'table',
      name: 'table',
      title: '列表',
      template: 'Table',
      actionNames: ['create', 'destroy'],
    },
  ],
} as TableOptions;
