import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import {
  Home,
  News,
  // Community,
  Authentificate,
  Register,
  Login,
  ErrorPage,
  Dashboard,
  ModifyArticles,
  AddArticle,
  // AddSubject,
  EditArticle,
  // EditSubject,
  ContentArticle,
} from "./pages";
import SharedLayout from "./pages/SharedLayout.jsx";

// loaders
import { loader as sharedLayoutLoader } from "./pages/SharedLayout";
// import { loader as subjectLoader } from "./pages/Community";
import { loader as articleLoader } from "./pages/News";
import { loader as addArticleLoader } from "./pages/AddArticle";
import { loader as editArticleLoader } from "./pages/EditArticle";
// import { loader as editSubjectLoader } from "./pages/EditSubject";
import { loader as contentArticleLoader } from "./pages/ContentArticle";
import { loader as dashboardArticleLoader } from "./pages/ModifyArticles";

// actions
import { action as registerAction } from "./pages/Register.jsx";
import { action as loginAction } from "./pages/Login.jsx";
import { action as addArticleAction } from "./pages/AddArticle";
// import { action as addSubjectAction } from "./pages/SubjectsForm";
import { action as deleteArticleAction } from "./pages/DeleteArticle";
// import { action as deleteSubjectAction } from "./pages/DeleteSubject";
import { action as editArticleAction } from "./pages/EditArticle";
// import { action as editSubjectAction } from "./pages/EditSubject";
import DashboardLayout from "./layouts/DashboardLayout";
import Home2 from "./pages/Home2";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark-theme") === "true";
  if (isDarkTheme) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
  }
  return isDarkTheme;
};
const isDarkThemeEnabled = checkDefaultTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
    loader: sharedLayoutLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
        loader: articleLoader,
      },

      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "authentificate",
        element: <Authentificate />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "modifyArticles",
            element: <ModifyArticles />,
            loader: dashboardArticleLoader,
          },
        ],
      },

      {
        path: "articles/content/:id",
        element: <ContentArticle />,
        loader: contentArticleLoader,
      },
      // {
      //   path: "addSubject",
      //   element: <AddSubject />,
      //   action: addSubjectAction,
      // },
      {
        path: "addArticle",
        element: <AddArticle />,
        action: addArticleAction,
        loader: addArticleLoader,
      },
      // {
      //   path: "subjects/editSubject/:id",
      //   element: <EditSubject />,
      //   loader: editSubjectLoader,
      //   action: editSubjectAction,
      // },
      {
        path: "articles/editArticle/:id",
        element: <EditArticle />,
        action: editArticleAction,
        loader: editArticleLoader,
      },
      {
        path: "articles/delete/:id",
        element: <News />,
        action: deleteArticleAction,
      },
      // {
      //   path: "subjects/delete/:id",
      //   element: <Community />,
      //   action: deleteSubjectAction,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
