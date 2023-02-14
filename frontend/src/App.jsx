import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:userName/notes" element={<Notes />} />
          <Route
            path="/welcome/:userName"
            element={<WelcomeComponent />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

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

function LoginPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="link-hover label-text-alt link"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

