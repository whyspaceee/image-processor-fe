import { ReactNode, createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import useUpload from "../hooks/useUpload";
import { UseMutationResult } from "react-query";

export const AuthContext = createContext({
  authTokens: {},
  setAuthTokens: (data: any) => {},
  uploadMutation: {} as UseMutationResult<any, unknown, File, unknown>,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [authTokens, setAuthTokens] = useState({});
  const uploadMutation = useUpload(authTokens, setAuthTokens);


  useEffect(() => {
    setAuthTokens({...localStorage});
  }, []);

  useEffect(() => {
    console.log(authTokens)
  }, [authTokens])
  
  const contextData = {
    authTokens,
    setAuthTokens,
    uploadMutation,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
