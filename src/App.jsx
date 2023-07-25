import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { authOperations, authSelectors } from "./redux/auth";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute";
import { PublicRoute } from "./components/Routes/PublicRoute";
import { Container } from "./components/Container/Container";

const SignUp = lazy(() =>
  import("./views/SignUpView" /* webpackChunkName: "sign-up" */),
);
const SignIn = lazy(() =>
  import("./views/SignInView" /* webpackChunkName: "sign-in" */),
);
const UserView = lazy(() =>
  import("./views/UserView" /* webpackChunkName: "user" */),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <div>Loading...</div>
      ) : (
        <>
          <Suspense fallback={<p>Download...</p>}>
            <Routes>
              <Route
                path="/signup"
                element={
                  <PublicRoute redirectPath={"/user"}>
                    <SignUp />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectPath={"/user"}>
                    <SignIn />
                  </PublicRoute>
                }
              />
              <Route
                path="/user"
                element={
                  <ProtectedRoute redirectPath={"/login"}>
                    <UserView />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/signup" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
};
