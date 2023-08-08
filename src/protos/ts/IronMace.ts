/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface IronMaceLogin {
  loginId: string;
  password: string;
}

export interface IronMaceLoginRes {
  result: number;
  errorMessage: string;
}

export enum IronMaceLoginRes_IronMaceLoginResult {
  NONE = 0,
  SUCCESS = 1,
  FAIL_NOT_FOUND_ACCOUNT = 100,
  FAIL_WRONG_PASSWORD = 101,
  UNRECOGNIZED = -1,
}

export function ironMaceLoginRes_IronMaceLoginResultFromJSON(object: any): IronMaceLoginRes_IronMaceLoginResult {
  switch (object) {
    case 0:
    case "NONE":
      return IronMaceLoginRes_IronMaceLoginResult.NONE;
    case 1:
    case "SUCCESS":
      return IronMaceLoginRes_IronMaceLoginResult.SUCCESS;
    case 100:
    case "FAIL_NOT_FOUND_ACCOUNT":
      return IronMaceLoginRes_IronMaceLoginResult.FAIL_NOT_FOUND_ACCOUNT;
    case 101:
    case "FAIL_WRONG_PASSWORD":
      return IronMaceLoginRes_IronMaceLoginResult.FAIL_WRONG_PASSWORD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IronMaceLoginRes_IronMaceLoginResult.UNRECOGNIZED;
  }
}

export function ironMaceLoginRes_IronMaceLoginResultToJSON(object: IronMaceLoginRes_IronMaceLoginResult): string {
  switch (object) {
    case IronMaceLoginRes_IronMaceLoginResult.NONE:
      return "NONE";
    case IronMaceLoginRes_IronMaceLoginResult.SUCCESS:
      return "SUCCESS";
    case IronMaceLoginRes_IronMaceLoginResult.FAIL_NOT_FOUND_ACCOUNT:
      return "FAIL_NOT_FOUND_ACCOUNT";
    case IronMaceLoginRes_IronMaceLoginResult.FAIL_WRONG_PASSWORD:
      return "FAIL_WRONG_PASSWORD";
    case IronMaceLoginRes_IronMaceLoginResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface IronMaceToken {
  loginId: string;
  password: string;
}

export interface IronMaceTokenRes {
  token: string;
}

function createBaseIronMaceLogin(): IronMaceLogin {
  return { loginId: "", password: "" };
}

export const IronMaceLogin = {
  encode(message: IronMaceLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loginId !== "") {
      writer.uint32(10).string(message.loginId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IronMaceLogin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIronMaceLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loginId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IronMaceLogin {
    return {
      loginId: isSet(object.loginId) ? String(object.loginId) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: IronMaceLogin): unknown {
    const obj: any = {};
    if (message.loginId !== "") {
      obj.loginId = message.loginId;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IronMaceLogin>, I>>(base?: I): IronMaceLogin {
    return IronMaceLogin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IronMaceLogin>, I>>(object: I): IronMaceLogin {
    const message = createBaseIronMaceLogin();
    message.loginId = object.loginId ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseIronMaceLoginRes(): IronMaceLoginRes {
  return { result: 0, errorMessage: "" };
}

export const IronMaceLoginRes = {
  encode(message: IronMaceLoginRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IronMaceLoginRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIronMaceLoginRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IronMaceLoginRes {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: IronMaceLoginRes): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = Math.round(message.result);
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IronMaceLoginRes>, I>>(base?: I): IronMaceLoginRes {
    return IronMaceLoginRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IronMaceLoginRes>, I>>(object: I): IronMaceLoginRes {
    const message = createBaseIronMaceLoginRes();
    message.result = object.result ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

function createBaseIronMaceToken(): IronMaceToken {
  return { loginId: "", password: "" };
}

export const IronMaceToken = {
  encode(message: IronMaceToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loginId !== "") {
      writer.uint32(10).string(message.loginId);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IronMaceToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIronMaceToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loginId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IronMaceToken {
    return {
      loginId: isSet(object.loginId) ? String(object.loginId) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: IronMaceToken): unknown {
    const obj: any = {};
    if (message.loginId !== "") {
      obj.loginId = message.loginId;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IronMaceToken>, I>>(base?: I): IronMaceToken {
    return IronMaceToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IronMaceToken>, I>>(object: I): IronMaceToken {
    const message = createBaseIronMaceToken();
    message.loginId = object.loginId ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseIronMaceTokenRes(): IronMaceTokenRes {
  return { token: "" };
}

export const IronMaceTokenRes = {
  encode(message: IronMaceTokenRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IronMaceTokenRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIronMaceTokenRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IronMaceTokenRes {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: IronMaceTokenRes): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IronMaceTokenRes>, I>>(base?: I): IronMaceTokenRes {
    return IronMaceTokenRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IronMaceTokenRes>, I>>(object: I): IronMaceTokenRes {
    const message = createBaseIronMaceTokenRes();
    message.token = object.token ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
