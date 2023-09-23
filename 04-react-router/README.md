# React Router Project overview

- Replaced the standard component injection with react routing using <Outlet> and <Layout>

- used the top level element <Layout> to nest sub-elements and assign realtive paths

- creation of the <RouterProvider router={router}> wrapper and then using the 'router' variable to assign paths and subpaths of elements

- methods to creating router using [createBrowserRouter] and nesting using brackets or [createRoutesFromElements]

- dynamic values from the URL, {useParams} hook

- api call optimization: using loader instead of useEffect
