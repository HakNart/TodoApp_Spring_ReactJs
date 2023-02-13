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
          <Route path="/welcome/:userName" element={<WelcomeComponent />} />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum enim
            delectus tempore suscipit ipsa magnam tenetur, laborum, consequuntur
            distinctio impedit placeat minus atque veritatis unde, dolorem
            voluptatem nihil cum debitis.
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
    <div className="container mx-auto mt-2">
      
      <form className="card flex-shrink-0 w-full max-w-md mx-auto">
        <h1 className="text-center text-2xl">Create New Note</h1>
        <div className="form-control">
          <label className="input-group w-md">
            <span className="bg-neutral text-neutral-content">Title</span>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
