import React from "react";
import * as S from "./styles";

type Props = {
  setView: (viewId: string) => unknown;
};

const MainMenu: React.FC<Props> = ({ setView }) => {
  return (
    <S.Container>
      <S.Title>Main Menu</S.Title>
      <S.Menu>
        <S.MenuItem disabled={true}>Play</S.MenuItem>
        <S.MenuItem onClick={() => setView?.("topscores")}>
          Top Scores
        </S.MenuItem>
      </S.Menu>
    </S.Container>
  );
};

export default MainMenu;
