import { LobbyUser } from "./LobbyUser";
import { SItem } from "@/protos/ts/_Item";

//
export class LobbyUserGameState {
  //
  lobbyUser: LobbyUser;

  //
  trading: LobbyUserTradingState;

  //
  constructor(lobbyUser: LobbyUser) {
    this.lobbyUser = lobbyUser;

    this.trading = new LobbyUserTradingState(this);
  }
}

class LobbyUserTradingState {
  //
  state: LobbyUserGameState;

  //
  isReady: number = 0;
  isConfirmed: number = 0;
  tradingWith: LobbyUser | null = null;
  tradingInventory: {
    [key: number]: SItem;
  } = {};

  //
  constructor(state: LobbyUserGameState) {
    this.state = state;
  }

  reset = () => {
    this.setTradingWith(null);
    this.setReady(0);
    this.setIsConfirmed(0);
    this.tradingInventory = {};
  };

  //
  setTradingWith = (value: LobbyUser | null) => {
    this.tradingWith = value;
  };

  setReady = (value: number) => {
    this.isReady = value;
  };

  setIsConfirmed = (value: number) => {
    this.isConfirmed = value;
  };

  addItem = (key: number, item: SItem) => {
    this.tradingInventory[key] = item;
  };

  removeItem = (key: number) => {
    delete this.tradingInventory[key];
  };

  removeItemByItemId = (itemId: number) => {
    for (const key in this.tradingInventory) {
      if (this.tradingInventory[key].itemUniqueId === itemId) {
        delete this.tradingInventory[key];
      }
    }
  };
}
