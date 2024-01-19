export interface IResult {
  // 5 sets of percentages
  percentages: { name: string; score: number }[];
  // 3 paths
  paths: { name: string; score: number }[];
}

export const mockResults: IResult = {
  percentages: [
    { name: "Communicative", score: 0.04 },
    { name: "Communicative", score: 0.38 },
    { name: "Communicative", score: 0.55 },
    { name: "Communicative", score: 0.71 },
    { name: "Communicative", score: 1.0 },
  ],
  paths: [
    { name: "Web developer", score: 0.98 },
    { name: "Web designer", score: 0.85 },
    { name: "Web marketer", score: 0.80 },
  ],
};
