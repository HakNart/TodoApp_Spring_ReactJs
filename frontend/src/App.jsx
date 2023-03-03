import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";
import AuthProvide, { useAuth } from "./security/AuthContext";

function App() {
  return (
    <AuthProvide>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Authenticated Route to all notes page */}
          <Route path="/:userName/notes" element={
          <AuthenticatedRoute>
            <Notes />
          </AuthenticatedRoute>
          } />
          {/* Authenticated Route to welcome page */}
          <Route
            path="/welcome/:userName"
            element={
            <AuthenticatedRoute>
              <WelcomeComponent />
            </AuthenticatedRoute>
            }
          />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Layout>
      </BrowserRouter>
    </AuthProvide>
    
  );
}

export default App;

function AuthenticatedRoute({children}) {
  const AuthContext = useAuth();
  if(AuthContext.isAuthenticated) {
    return children
  }
  return <Navigate to="/login" />
}

function WelcomeComponent() {
  const { userName } = useParams();
  const navigate = useNavigate();
  function navigateToNotes() {
    navigate(`/${userName}/notes`);
  }
  return (
    <div className="WelcomeComponent hero min-h-[calc(100vh-4rem)] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello {userName}</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum enim delectus tempore suscipit ipsa magnam
            tenetur, laborum, consequuntur distinctio impedit
            placeat minus atque veritatis unde, dolorem voluptatem
            nihil cum debitis.
          </p>
          <button
            className="text-succcess-content btn-success btn"
            onClick={navigateToNotes}
          >
            View Notes
          </button>
        </div>
      </div>
    </div>
  );
}


