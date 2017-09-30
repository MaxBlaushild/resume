export interface Card {
  component: any;
  state: CardState;
};

export enum CardState {
  top,
  center,
  bottom
}
