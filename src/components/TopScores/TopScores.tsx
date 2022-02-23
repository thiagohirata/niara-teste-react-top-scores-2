import React from "react";
import * as S from "./styles";
import Line from "./Line";
import { downloadScores, Score } from "../../services";

type Props = {
  setView: (viewId: string) => unknown;
};
const TopScores: React.FC<Props> = ({ setView }) => {
  React.useEffect(() => {
    downloadScores().then((scores) => {
      // Exemplo de retorno:
      // [
      //   {
      //     name: "Guile",
      //     points: 943,
      //     id: "d9094891hjdlsk"
      //   },
      //   {
      //     name: "Luke",
      //     points: 400,
      //     id: "s094lkf0cjlk32"
      //   }
      // ];
      console.log("Resultados carregados: ");
      console.log(scores);
    });
  }, []);

  return (
    <S.Container>
      <S.BackButton onClick={() => setView("mainmenu")}>
        {"< Voltar"}
      </S.BackButton>
      <S.Title>Top Scores</S.Title>
      {/* <S.LoadingMessage>Loading...</S.LoadingMessage> */}
      <S.Grid>
        <Line name="Ryu" points={1400} id="DELETEME" />
        <Line name="Dictator" points={1300} id="DELETEME" />
        <Line name="Guile" points={1200} id="DELETEME" />
        <Line name="Ken" points={1100} id="DELETEME" />
        <Line name="Chun-li" points={1000} id="DELETEME" />
      </S.Grid>
    </S.Container>
  );
};

export default TopScores;
