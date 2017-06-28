export interface Card {
  component: any;
  state: CardState;
};

export enum CardState {
  outLeft,
  left,
  center,
  right,
  outRight
}
