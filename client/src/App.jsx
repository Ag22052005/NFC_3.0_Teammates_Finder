import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import { SocketContextProvider } from './context/SocketContext.jsx';
import ProtectedRoute from "./components/Protectedroute.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard/Dashboard";
import CommunityChat from "./pages/CommunityChat.jsx";
import MatchMaking from './pages/MatchMaking'
import Tournament from './pages/Tournament'
import Session from './pages/Session'
import SessionPage from "./components/SessionPage.jsx";
import DashboardOtherUsers from "./pages/DashboardOtherUsers/DashboardOtherUsers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/game-sessions",
        element: (
          <ProtectedRoute>
            <Session />
          </ProtectedRoute>
        ),
      },
      {
        path:'/matchmaking',
        element:(
          <ProtectedRoute>
            <MatchMaking/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/community-chat",
        element: (
          <ProtectedRoute>
            <CommunityChat />
          </ProtectedRoute>
        ),
      },
      {
        path: "/upcoming-tournament",
        element: (
          <ProtectedRoute>
            <Tournament />
          </ProtectedRoute>
        ),
      },{
        path: "/session-chat",
        element: (
          <ProtectedRoute>
            <SessionPage />
           </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/other-users",
        element: (
          <ProtectedRoute>
            <DashboardOtherUsers />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <SocketContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </SocketContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;