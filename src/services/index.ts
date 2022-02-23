/**
 * NÃO MODIFIQUE ESTE ARQUIVO!
 */

export interface Score {
  name: string;
  points: number;
  id: string;
}

export const _SCORES = [
  {
    name: "Ryu",
    points: 1200,
    id: "312089123914"
  },
  {
    name: "Ken",
    points: 900,
    id: "9dlksdjalkdj"
  },
  {
    name: "Chun-li",
    points: 920,
    id: "f9jl2j309djlks"
  },
  {
    name: "Sagat",
    points: 934,
    id: "d9djlk2d0c9ij3"
  },
  {
    name: "Dictator",
    points: 1199,
    id: "2x94jd090123"
  },
  {
    name: "Guile",
    points: 943,
    id: "d9094891hjdlsk"
  },
  {
    name: "Dan",
    points: 99999999,
    id: "NOT_A_HACKER"
  }
];

export const downloadScores = async (): Promise<Score[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(_SCORES);
    }, 3000);
  });
};

type Return = {
  success: boolean;
  message: string;
};
type ReportScore = { (id: string): Promise<Return> };

export const reportScore: ReportScore = async (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const index = _SCORES?.findIndex((s) => s.id === id);
      if (index >= 0) {
        _SCORES.splice(index, 1);
        res({
          success: true,
          message: "SCORE REMOVED"
        });
      } else {
        rej(new Error("INVALID ID"));
      }
    }, 1200);
  });
};
export default reportScore;
