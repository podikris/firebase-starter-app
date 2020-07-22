import React from "react";
import styled from "styled-components";
import { Button } from "../ui";
import { useHistory } from "react-router-dom";
import { SignOut } from "./SignOut";

export const StyledButton = styled(Button)`
  background-color: #ed0d25;
`;

/*
    This button allows users to sign out once they've
    been signed in with Firebase Auth
*/
export const SignOutButton = () => {
  const history = useHistory();
  const onClickSignOut = async () => {
    await SignOut();
    history.push("/sign-in");
  };

  return (
    <StyledButton onClick={onClickSignOut} style={{ float: "right" }}>
      Sign Out
    </StyledButton>
  );
};
