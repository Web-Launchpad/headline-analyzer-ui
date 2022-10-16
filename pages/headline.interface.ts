export interface HeadlineAnalytics {
  headline: string;
  tokens: Array<string[]>;
  stats: Stats;
  inference: Inference;
  percentage: Percentage;
}

export interface Inference {
  word_count_message: string;
  word_count_inference: string;
}

export interface Percentage {
  [key: string]: number;
}

export interface Stats {
  word_count: number;
  character_count: number;
}
