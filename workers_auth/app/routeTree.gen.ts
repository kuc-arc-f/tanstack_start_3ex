/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as Todo11Import } from './routes/todo11'
import { Route as TodoImport } from './routes/todo'
import { Route as SignupImport } from './routes/signup'
import { Route as RedirectImport } from './routes/redirect'
import { Route as LogoutImport } from './routes/logout'
import { Route as LoginImport } from './routes/login'
import { Route as AuthedImport } from './routes/_authed'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users.index'
import { Route as UsersUserIdImport } from './routes/users.$userId'
import { Route as AuthedTest1Import } from './routes/_authed/test1'
import { Route as AuthedPostsImport } from './routes/_authed/posts'
import { Route as AuthedAboutImport } from './routes/_authed/about'
import { Route as AuthedPostsIndexImport } from './routes/_authed/posts.index'
import { Route as AuthedPostsPostIdImport } from './routes/_authed/posts.$postId'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const Todo11Route = Todo11Import.update({
  id: '/todo11',
  path: '/todo11',
  getParentRoute: () => rootRoute,
} as any)

const TodoRoute = TodoImport.update({
  id: '/todo',
  path: '/todo',
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

const AuthedTest1Route = AuthedTest1Import.update({
  id: '/test1',
  path: '/test1',
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
    '/todo': {
      id: '/todo'
      path: '/todo'
      fullPath: '/todo'
      preLoaderRoute: typeof TodoImport
      parentRoute: typeof rootRoute
    }
    '/todo11': {
      id: '/todo11'
      path: '/todo11'
      fullPath: '/todo11'
      preLoaderRoute: typeof Todo11Import
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
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
    '/_authed/test1': {
      id: '/_authed/test1'
      path: '/test1'
      fullPath: '/test1'
      preLoaderRoute: typeof AuthedTest1Import
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
  AuthedAboutRoute: typeof AuthedAboutRoute
  AuthedPostsRoute: typeof AuthedPostsRouteWithChildren
  AuthedTest1Route: typeof AuthedTest1Route
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedAboutRoute: AuthedAboutRoute,
  AuthedPostsRoute: AuthedPostsRouteWithChildren,
  AuthedTest1Route: AuthedTest1Route,
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
  '/todo': typeof TodoRoute
  '/todo11': typeof Todo11Route
  '/users': typeof UsersRouteWithChildren
  '/about': typeof AuthedAboutRoute
  '/posts': typeof AuthedPostsRouteWithChildren
  '/test1': typeof AuthedTest1Route
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
  '/todo': typeof TodoRoute
  '/todo11': typeof Todo11Route
  '/about': typeof AuthedAboutRoute
  '/test1': typeof AuthedTest1Route
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
  '/todo': typeof TodoRoute
  '/todo11': typeof Todo11Route
  '/users': typeof UsersRouteWithChildren
  '/_authed/about': typeof AuthedAboutRoute
  '/_authed/posts': typeof AuthedPostsRouteWithChildren
  '/_authed/test1': typeof AuthedTest1Route
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
    | '/todo'
    | '/todo11'
    | '/users'
    | '/about'
    | '/posts'
    | '/test1'
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
    | '/todo'
    | '/todo11'
    | '/about'
    | '/test1'
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
    | '/todo'
    | '/todo11'
    | '/users'
    | '/_authed/about'
    | '/_authed/posts'
    | '/_authed/test1'
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
  TodoRoute: typeof TodoRoute
  Todo11Route: typeof Todo11Route
  UsersRoute: typeof UsersRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  LoginRoute: LoginRoute,
  LogoutRoute: LogoutRoute,
  RedirectRoute: RedirectRoute,
  SignupRoute: SignupRoute,
  TodoRoute: TodoRoute,
  Todo11Route: Todo11Route,
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
        "/todo",
        "/todo11",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/about",
        "/_authed/posts",
        "/_authed/test1"
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
    "/todo": {
      "filePath": "todo.tsx"
    },
    "/todo11": {
      "filePath": "todo11.tsx"
    },
    "/users": {
      "filePath": "users.tsx",
      "children": [
        "/users/$userId",
        "/users/"
      ]
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
    "/_authed/test1": {
      "filePath": "_authed/test1.tsx",
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
