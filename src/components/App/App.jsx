import Header from "../Header/Header";
import UserContext from "../../context/UserContext.jsx";
import Footer from "../Footer/Footer";
import Roller from "../Roller/Roller.jsx";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import InfoModal from "../InfoModal/InfoModal";
import getNews from "../../utils/newsApi.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { signUp, signIn, checkToken } from "../../utils/auth.jsx";
import { getArticles, saveArticles } from "../../utils/api.jsx";

const App = () => {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [newsArticles, setNewsArticles] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleArticles, setVisableArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSignUp = async (email, password) => {
    console.log("Starting registration...");
    signUp({ email, password })
      .then((res) => {
        console.log("Registration response:", res);
        setActiveModal("success");
        console.log("Current activeModal value:", activeModal);
      })
      .catch((err) => {
        setServerError({
          ...serverError,
          regError: "A user with this email already exists",
        });
        console.error("Failed to register", err);
      });
    return await signUp();
  };

  const handleSignIn = async (email, password) => {
    try {
      const response = await signIn();
      if (response.token) {
        localStorage.setItem("token", response.token);
        handleCheckToken();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoggout = () => {
    console.log("crash?");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
    setSavedArticles({});
  };

  const handleCheckToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await checkToken(token);
      if (response.data) {
        setIsLoggedIn(true);
        const { name, email, _id } = response.data;
        setCurrentUser({ name, email, _id });
        fetchArticles();
      }
    } catch (err) {
      console.error("Error checking token:", err);
    }
  };

  const fetchArticles = async () => {
    const articles = await getArticles();
    setSavedArticles(articles);
  };

  const handleSaveArticle = async ({ _id, isSaved, article }) => {
    try {
      const updatedArticles = await saveArticles({
        _id,
        isSaved,
        article,
        savedArticles,
      });

      setSavedArticles(updatedArticles);
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

  const handleCardRender = () => {
    if (visibleArticles > newsArticles.length) {
      setVisableArticles(newsArticles.length);
    }
    setVisableArticles((prevCount) => prevCount + 3);
  };

  const handleSearch = async (keyword) => {
    setIsLoading(true);

    try {
      const articleData = await getNews(keyword);
      ("");

      const articleObj = articleData.map((article) => ({
        _id: crypto.randomUUID(),
        isSaved: false,
        ...article,
        keyword,
      }));

      if (!hasSearched) {
        setHasSearched(true);
      }

      setNewsArticles(articleObj);
      setVisableArticles(0);
      handleCardRender();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRollerOpen = () => {
    setActiveModal("roller");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    handleCheckToken();
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ currentUser, isLoggedIn }}>
        <div className="page">
          <Header
            handleOpenLoginModal={handleOpenLoginModal}
            handleOpenRegisterModal={handleOpenRegisterModal}
            handleSearch={handleSearch}
            handleRollerOpen={handleRollerOpen}
            handleOnLoggout={handleLoggout}
            savedArticles={savedArticles}
          />
          <Outlet
            context={{
              visibleArticles,
              newsArticles,
              savedArticles,
              handleCardRender,
              isLoading,
              hasSearched,
              handleSaveArticle,
            }}
          />
          <Footer />
        </div>
        {activeModal === "roller" && (
          <Roller
            handleCloseModal={handleCloseModal}
            handleOpenLoginModal={handleOpenLoginModal}
            isLoggedIn={isLoggedIn}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            title="Sign in"
            buttonText="Sign In"
            secondaryBtnText="Sign up"
            onSecondaryBtnClick={handleOpenRegisterModal}
            onClose={handleCloseModal}
            onSubmit={handleSignIn}
          />
        )}

        {activeModal === "register" && (
          <RegisterModal
            title="Sign in"
            buttonText="Sign up"
            secondaryBtnText="Login in"
            onSecondaryBtnClick={handleOpenLoginModal}
            onSubmit={handleSignUp}
            onClose={handleCloseModal}
          />
        )}
        {activeModal === "success" && (
          <InfoModal
            title="Registration successfully completed!"
            buttonText="Sign in"
            onClose={handleCloseModal}
            onSecondaryBtnClick={handleOpenLoginModal}
            isOpen={activeModal === "success"}
          />
        )}
      </UserContext.Provider>
    </div>
  );
};

export default App;
