/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as SignupImport } from './routes/signup'
import { Route as RedirectImport } from './routes/redirect'
import { Route as LogoutImport } from './routes/logout'
import { Route as LoginImport } from './routes/login'
import { Route as AuthedImport } from './routes/_authed'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users.index'
import { Route as UsersUserIdImport } from './routes/users.$userId'
import { Route as AuthedTodo11Import } from './routes/_authed/todo11'
import { Route as AuthedTodoImport } from './routes/_authed/todo'
import { Route as AuthedTest1Import } from './routes/_authed/test1'
import { Route as AuthedRoute1showImport } from './routes/_authed/route_1show'
import { Route as AuthedRoute1Import } from './routes/_authed/route_1'
import { Route as AuthedPostsImport } from './routes/_authed/posts'
import { Route as AuthedAboutImport } from './routes/_authed/about'
import { Route as AuthedTaskProjectShowImport } from './routes/_authed/TaskProjectShow'
import { Route as AuthedTaskProjectExportImport } from './routes/_authed/TaskProjectExport'
import { Route as AuthedTaskProjectCreateImport } from './routes/_authed/TaskProjectCreate'
import { Route as AuthedTaskProjectImport } from './routes/_authed/TaskProject'
import { Route as AuthedTaskItemEditImport } from './routes/_authed/TaskItemEdit'
import { Route as AuthedTaskItemCreateImport } from './routes/_authed/TaskItemCreate'
import { Route as AuthedPostsIndexImport } from './routes/_authed/posts.index'
import { Route as AuthedPostsPostIdImport } from './routes/_authed/posts.$postId'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const RedirectRoute = RedirectImport.update({
  id: '/redirect',
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const LogoutRoute = LogoutImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => UsersRoute,
} as any)

const UsersUserIdRoute = UsersUserIdImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => UsersRoute,
} as any)

const AuthedTodo11Route = AuthedTodo11Import.update({
  id: '/todo11',
  path: '/todo11',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTodoRoute = AuthedTodoImport.update({
  id: '/todo',
  path: '/todo',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTest1Route = AuthedTest1Import.update({
  id: '/test1',
  path: '/test1',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedRoute1showRoute = AuthedRoute1showImport.update({
  id: '/route_1show',
  path: '/route_1show',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedRoute1Route = AuthedRoute1Import.update({
  id: '/route_1',
  path: '/route_1',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedPostsRoute = AuthedPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedAboutRoute = AuthedAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTaskProjectShowRoute = AuthedTaskProjectShowImport.update({
  id: '/TaskProjectShow',
  path: '/TaskProjectShow',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTaskProjectExportRoute = AuthedTaskProjectExportImport.update({
  id: '/TaskProjectExport',
  path: '/TaskProjectExport',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTaskProjectCreateRoute = AuthedTaskProjectCreateImport.update({
  id: '/TaskProjectCreate',
  path: '/TaskProjectCreate',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTaskProjectRoute = AuthedTaskProjectImport.update({
  id: '/TaskProject',
  path: '/TaskProject',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTaskItemEditRoute = AuthedTaskItemEditImport.update({
  id: '/TaskItemEdit',
  path: '/TaskItemEdit',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedTaskItemCreateRoute = AuthedTaskItemCreateImport.update({
  id: '/TaskItemCreate',
  path: '/TaskItemCreate',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedPostsIndexRoute = AuthedPostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthedPostsRoute,
} as any)

const AuthedPostsPostIdRoute = AuthedPostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => AuthedPostsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/logout': {
      id: '/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof LogoutImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/_authed/TaskItemCreate': {
      id: '/_authed/TaskItemCreate'
      path: '/TaskItemCreate'
      fullPath: '/TaskItemCreate'
      preLoaderRoute: typeof AuthedTaskItemCreateImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/TaskItemEdit': {
      id: '/_authed/TaskItemEdit'
      path: '/TaskItemEdit'
      fullPath: '/TaskItemEdit'
      preLoaderRoute: typeof AuthedTaskItemEditImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/TaskProject': {
      id: '/_authed/TaskProject'
      path: '/TaskProject'
      fullPath: '/TaskProject'
      preLoaderRoute: typeof AuthedTaskProjectImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/TaskProjectCreate': {
      id: '/_authed/TaskProjectCreate'
      path: '/TaskProjectCreate'
      fullPath: '/TaskProjectCreate'
      preLoaderRoute: typeof AuthedTaskProjectCreateImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/TaskProjectExport': {
      id: '/_authed/TaskProjectExport'
      path: '/TaskProjectExport'
      fullPath: '/TaskProjectExport'
      preLoaderRoute: typeof AuthedTaskProjectExportImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/TaskProjectShow': {
      id: '/_authed/TaskProjectShow'
      path: '/TaskProjectShow'
      fullPath: '/TaskProjectShow'
      preLoaderRoute: typeof AuthedTaskProjectShowImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/about': {
      id: '/_authed/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AuthedAboutImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/posts': {
      id: '/_authed/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof AuthedPostsImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/route_1': {
      id: '/_authed/route_1'
      path: '/route_1'
      fullPath: '/route_1'
      preLoaderRoute: typeof AuthedRoute1Import
      parentRoute: typeof AuthedImport
    }
    '/_authed/route_1show': {
      id: '/_authed/route_1show'
      path: '/route_1show'
      fullPath: '/route_1show'
      preLoaderRoute: typeof AuthedRoute1showImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/test1': {
      id: '/_authed/test1'
      path: '/test1'
      fullPath: '/test1'
      preLoaderRoute: typeof AuthedTest1Import
      parentRoute: typeof AuthedImport
    }
    '/_authed/todo': {
      id: '/_authed/todo'
      path: '/todo'
      fullPath: '/todo'
      preLoaderRoute: typeof AuthedTodoImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/todo11': {
      id: '/_authed/todo11'
      path: '/todo11'
      fullPath: '/todo11'
      preLoaderRoute: typeof AuthedTodo11Import
      parentRoute: typeof AuthedImport
    }
    '/users/$userId': {
      id: '/users/$userId'
      path: '/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof UsersImport
    }
    '/users/': {
      id: '/users/'
      path: '/'
      fullPath: '/users/'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof UsersImport
    }
    '/_authed/posts/$postId': {
      id: '/_authed/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof AuthedPostsPostIdImport
      parentRoute: typeof AuthedPostsImport
    }
    '/_authed/posts/': {
      id: '/_authed/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof AuthedPostsIndexImport
      parentRoute: typeof AuthedPostsImport
    }
  }
}

// Create and export the route tree

interface AuthedPostsRouteChildren {
  AuthedPostsPostIdRoute: typeof AuthedPostsPostIdRoute
  AuthedPostsIndexRoute: typeof AuthedPostsIndexRoute
}

const AuthedPostsRouteChildren: AuthedPostsRouteChildren = {
  AuthedPostsPostIdRoute: AuthedPostsPostIdRoute,
  AuthedPostsIndexRoute: AuthedPostsIndexRoute,
}

const AuthedPostsRouteWithChildren = AuthedPostsRoute._addFileChildren(
  AuthedPostsRouteChildren,
)

interface AuthedRouteChildren {
  AuthedTaskItemCreateRoute: typeof AuthedTaskItemCreateRoute
  AuthedTaskItemEditRoute: typeof AuthedTaskItemEditRoute
  AuthedTaskProjectRoute: typeof AuthedTaskProjectRoute
  AuthedTaskProjectCreateRoute: typeof AuthedTaskProjectCreateRoute
  AuthedTaskProjectExportRoute: typeof AuthedTaskProjectExportRoute
  AuthedTaskProjectShowRoute: typeof AuthedTaskProjectShowRoute
  AuthedAboutRoute: typeof AuthedAboutRoute
  AuthedPostsRoute: typeof AuthedPostsRouteWithChildren
  AuthedRoute1Route: typeof AuthedRoute1Route
  AuthedRoute1showRoute: typeof AuthedRoute1showRoute
  AuthedTest1Route: typeof AuthedTest1Route
  AuthedTodoRoute: typeof AuthedTodoRoute
  AuthedTodo11Route: typeof AuthedTodo11Route
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedTaskItemCreateRoute: AuthedTaskItemCreateRoute,
  AuthedTaskItemEditRoute: AuthedTaskItemEditRoute,
  AuthedTaskProjectRoute: AuthedTaskProjectRoute,
  AuthedTaskProjectCreateRoute: AuthedTaskProjectCreateRoute,
  AuthedTaskProjectExportRoute: AuthedTaskProjectExportRoute,
  AuthedTaskProjectShowRoute: AuthedTaskProjectShowRoute,
  AuthedAboutRoute: AuthedAboutRoute,
  AuthedPostsRoute: AuthedPostsRouteWithChildren,
  AuthedRoute1Route: AuthedRoute1Route,
  AuthedRoute1showRoute: AuthedRoute1showRoute,
  AuthedTest1Route: AuthedTest1Route,
  AuthedTodoRoute: AuthedTodoRoute,
  AuthedTodo11Route: AuthedTodo11Route,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

interface UsersRouteChildren {
  UsersUserIdRoute: typeof UsersUserIdRoute
  UsersIndexRoute: typeof UsersIndexRoute
}

const UsersRouteChildren: UsersRouteChildren = {
  UsersUserIdRoute: UsersUserIdRoute,
  UsersIndexRoute: UsersIndexRoute,
}

const UsersRouteWithChildren = UsersRoute._addFileChildren(UsersRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/redirect': typeof RedirectRoute
  '/signup': typeof SignupRoute
  '/users': typeof UsersRouteWithChildren
  '/TaskItemCreate': typeof AuthedTaskItemCreateRoute
  '/TaskItemEdit': typeof AuthedTaskItemEditRoute
  '/TaskProject': typeof AuthedTaskProjectRoute
  '/TaskProjectCreate': typeof AuthedTaskProjectCreateRoute
  '/TaskProjectExport': typeof AuthedTaskProjectExportRoute
  '/TaskProjectShow': typeof AuthedTaskProjectShowRoute
  '/about': typeof AuthedAboutRoute
  '/posts': typeof AuthedPostsRouteWithChildren
  '/route_1': typeof AuthedRoute1Route
  '/route_1show': typeof AuthedRoute1showRoute
  '/test1': typeof AuthedTest1Route
  '/todo': typeof AuthedTodoRoute
  '/todo11': typeof AuthedTodo11Route
  '/users/$userId': typeof UsersUserIdRoute
  '/users/': typeof UsersIndexRoute
  '/posts/$postId': typeof AuthedPostsPostIdRoute
  '/posts/': typeof AuthedPostsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/redirect': typeof RedirectRoute
  '/signup': typeof SignupRoute
  '/TaskItemCreate': typeof AuthedTaskItemCreateRoute
  '/TaskItemEdit': typeof AuthedTaskItemEditRoute
  '/TaskProject': typeof AuthedTaskProjectRoute
  '/TaskProjectCreate': typeof AuthedTaskProjectCreateRoute
  '/TaskProjectExport': typeof AuthedTaskProjectExportRoute
  '/TaskProjectShow': typeof AuthedTaskProjectShowRoute
  '/about': typeof AuthedAboutRoute
  '/route_1': typeof AuthedRoute1Route
  '/route_1show': typeof AuthedRoute1showRoute
  '/test1': typeof AuthedTest1Route
  '/todo': typeof AuthedTodoRoute
  '/todo11': typeof AuthedTodo11Route
  '/users/$userId': typeof UsersUserIdRoute
  '/users': typeof UsersIndexRoute
  '/posts/$postId': typeof AuthedPostsPostIdRoute
  '/posts': typeof AuthedPostsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/redirect': typeof RedirectRoute
  '/signup': typeof SignupRoute
  '/users': typeof UsersRouteWithChildren
  '/_authed/TaskItemCreate': typeof AuthedTaskItemCreateRoute
  '/_authed/TaskItemEdit': typeof AuthedTaskItemEditRoute
  '/_authed/TaskProject': typeof AuthedTaskProjectRoute
  '/_authed/TaskProjectCreate': typeof AuthedTaskProjectCreateRoute
  '/_authed/TaskProjectExport': typeof AuthedTaskProjectExportRoute
  '/_authed/TaskProjectShow': typeof AuthedTaskProjectShowRoute
  '/_authed/about': typeof AuthedAboutRoute
  '/_authed/posts': typeof AuthedPostsRouteWithChildren
  '/_authed/route_1': typeof AuthedRoute1Route
  '/_authed/route_1show': typeof AuthedRoute1showRoute
  '/_authed/test1': typeof AuthedTest1Route
  '/_authed/todo': typeof AuthedTodoRoute
  '/_authed/todo11': typeof AuthedTodo11Route
  '/users/$userId': typeof UsersUserIdRoute
  '/users/': typeof UsersIndexRoute
  '/_authed/posts/$postId': typeof AuthedPostsPostIdRoute
  '/_authed/posts/': typeof AuthedPostsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/logout'
    | '/redirect'
    | '/signup'
    | '/users'
    | '/TaskItemCreate'
    | '/TaskItemEdit'
    | '/TaskProject'
    | '/TaskProjectCreate'
    | '/TaskProjectExport'
    | '/TaskProjectShow'
    | '/about'
    | '/posts'
    | '/route_1'
    | '/route_1show'
    | '/test1'
    | '/todo'
    | '/todo11'
    | '/users/$userId'
    | '/users/'
    | '/posts/$postId'
    | '/posts/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/logout'
    | '/redirect'
    | '/signup'
    | '/TaskItemCreate'
    | '/TaskItemEdit'
    | '/TaskProject'
    | '/TaskProjectCreate'
    | '/TaskProjectExport'
    | '/TaskProjectShow'
    | '/about'
    | '/route_1'
    | '/route_1show'
    | '/test1'
    | '/todo'
    | '/todo11'
    | '/users/$userId'
    | '/users'
    | '/posts/$postId'
    | '/posts'
  id:
    | '__root__'
    | '/'
    | '/_authed'
    | '/login'
    | '/logout'
    | '/redirect'
    | '/signup'
    | '/users'
    | '/_authed/TaskItemCreate'
    | '/_authed/TaskItemEdit'
    | '/_authed/TaskProject'
    | '/_authed/TaskProjectCreate'
    | '/_authed/TaskProjectExport'
    | '/_authed/TaskProjectShow'
    | '/_authed/about'
    | '/_authed/posts'
    | '/_authed/route_1'
    | '/_authed/route_1show'
    | '/_authed/test1'
    | '/_authed/todo'
    | '/_authed/todo11'
    | '/users/$userId'
    | '/users/'
    | '/_authed/posts/$postId'
    | '/_authed/posts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthedRoute: typeof AuthedRouteWithChildren
  LoginRoute: typeof LoginRoute
  LogoutRoute: typeof LogoutRoute
  RedirectRoute: typeof RedirectRoute
  SignupRoute: typeof SignupRoute
  UsersRoute: typeof UsersRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  LoginRoute: LoginRoute,
  LogoutRoute: LogoutRoute,
  RedirectRoute: RedirectRoute,
  SignupRoute: SignupRoute,
  UsersRoute: UsersRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authed",
        "/login",
        "/logout",
        "/redirect",
        "/signup",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/TaskItemCreate",
        "/_authed/TaskItemEdit",
        "/_authed/TaskProject",
        "/_authed/TaskProjectCreate",
        "/_authed/TaskProjectExport",
        "/_authed/TaskProjectShow",
        "/_authed/about",
        "/_authed/posts",
        "/_authed/route_1",
        "/_authed/route_1show",
        "/_authed/test1",
        "/_authed/todo",
        "/_authed/todo11"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/users": {
      "filePath": "users.tsx",
      "children": [
        "/users/$userId",
        "/users/"
      ]
    },
    "/_authed/TaskItemCreate": {
      "filePath": "_authed/TaskItemCreate.tsx",
      "parent": "/_authed"
    },
    "/_authed/TaskItemEdit": {
      "filePath": "_authed/TaskItemEdit.tsx",
      "parent": "/_authed"
    },
    "/_authed/TaskProject": {
      "filePath": "_authed/TaskProject.tsx",
      "parent": "/_authed"
    },
    "/_authed/TaskProjectCreate": {
      "filePath": "_authed/TaskProjectCreate.tsx",
      "parent": "/_authed"
    },
    "/_authed/TaskProjectExport": {
      "filePath": "_authed/TaskProjectExport.tsx",
      "parent": "/_authed"
    },
    "/_authed/TaskProjectShow": {
      "filePath": "_authed/TaskProjectShow.tsx",
      "parent": "/_authed"
    },
    "/_authed/about": {
      "filePath": "_authed/about.tsx",
      "parent": "/_authed"
    },
    "/_authed/posts": {
      "filePath": "_authed/posts.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/posts/$postId",
        "/_authed/posts/"
      ]
    },
    "/_authed/route_1": {
      "filePath": "_authed/route_1.tsx",
      "parent": "/_authed"
    },
    "/_authed/route_1show": {
      "filePath": "_authed/route_1show.tsx",
      "parent": "/_authed"
    },
    "/_authed/test1": {
      "filePath": "_authed/test1.tsx",
      "parent": "/_authed"
    },
    "/_authed/todo": {
      "filePath": "_authed/todo.tsx",
      "parent": "/_authed"
    },
    "/_authed/todo11": {
      "filePath": "_authed/todo11.tsx",
      "parent": "/_authed"
    },
    "/users/$userId": {
      "filePath": "users.$userId.tsx",
      "parent": "/users"
    },
    "/users/": {
      "filePath": "users.index.tsx",
      "parent": "/users"
    },
    "/_authed/posts/$postId": {
      "filePath": "_authed/posts.$postId.tsx",
      "parent": "/_authed/posts"
    },
    "/_authed/posts/": {
      "filePath": "_authed/posts.index.tsx",
      "parent": "/_authed/posts"
    }
  }
}
ROUTE_MANIFEST_END */
