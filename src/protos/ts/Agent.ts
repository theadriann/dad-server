/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "DC.Packet";

export interface AgentServiceList {
  ipAddress: string;
  port: number;
  processId: number;
  userCount: number;
}

function createBaseAgentServiceList(): AgentServiceList {
  return { ipAddress: "", port: 0, processId: 0, userCount: 0 };
}

export const AgentServiceList = {
  encode(message: AgentServiceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipAddress !== "") {
      writer.uint32(10).string(message.ipAddress);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.processId !== 0) {
      writer.uint32(24).uint32(message.processId);
    }
    if (message.userCount !== 0) {
      writer.uint32(32).uint32(message.userCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AgentServiceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgentServiceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.processId = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.userCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AgentServiceList {
    return {
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      processId: isSet(object.processId) ? Number(object.processId) : 0,
      userCount: isSet(object.userCount) ? Number(object.userCount) : 0,
    };
  },

  toJSON(message: AgentServiceList): unknown {
    const obj: any = {};
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.processId !== 0) {
      obj.processId = Math.round(message.processId);
    }
    if (message.userCount !== 0) {
      obj.userCount = Math.round(message.userCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AgentServiceList>, I>>(base?: I): AgentServiceList {
    return AgentServiceList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AgentServiceList>, I>>(object: I): AgentServiceList {
    const message = createBaseAgentServiceList();
    message.ipAddress = object.ipAddress ?? "";
    message.port = object.port ?? 0;
    message.processId = object.processId ?? 0;
    message.userCount = object.userCount ?? 0;
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
