export type TimeType = {
    h: number;
    m: number;
    s: number;
    ms: number;
  }

export type BtnType = {
  start: ()=> void;
  status: number;
  stop: ()=> void;
  reset: ()=> void;
  resume: ()=> void;
}