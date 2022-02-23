import React from "react";
import * as S from "./styles";
import { reportScore } from "../../services";
interface Props {
  name: string;
  points: number;
  id: string;
}

const Line: React.FC<Props> = ({ name, points, id }) => {
  return (
    <S.GridLine>
      <S.GridCell>{name}</S.GridCell>
      <S.GridCell className="points">{points}</S.GridCell>
      <S.GridCell className="actions">
        <S.ReportButton
          onClick={() => {
            reportScore(id);
          }}
        >
          Report
        </S.ReportButton>
        {/* <S.ReportButton disabled={true}>Reporting...</S.ReportButton> */}
      </S.GridCell>
    </S.GridLine>
  );
};

export default Line;
