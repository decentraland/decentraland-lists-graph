// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Add extends ethereum.Event {
  get params(): Add__Params {
    return new Add__Params(this);
  }
}

export class Add__Params {
  _event: Add;

  constructor(event: Add) {
    this._event = event;
  }

  get _caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _value(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Remove extends ethereum.Event {
  get params(): Remove__Params {
    return new Remove__Params(this);
  }
}

export class Remove__Params {
  _event: Remove;

  constructor(event: Remove) {
    this._event = event;
  }

  get _caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _value(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class List extends ethereum.SmartContract {
  static bind(address: Address): List {
    return new List("List", address);
  }

  ADD_ROLE(): Bytes {
    let result = super.call("ADD_ROLE", "ADD_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ADD_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ADD_ROLE", "ADD_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  REMOVE_ROLE(): Bytes {
    let result = super.call("REMOVE_ROLE", "REMOVE_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REMOVE_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("REMOVE_ROLE", "REMOVE_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  values(param0: BigInt): string {
    let result = super.call("values", "values(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_values(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("values", "values(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getTypeHash(): Bytes {
    let result = super.call("getTypeHash", "getTypeHash():(bytes32)", []);

    return result[0].toBytes();
  }

  try_getTypeHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getTypeHash", "getTypeHash():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  listType(): string {
    let result = super.call("listType", "listType():(string)", []);

    return result[0].toString();
  }

  try_listType(): ethereum.CallResult<string> {
    let result = super.tryCall("listType", "listType():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  size(): BigInt {
    let result = super.call("size", "size():(uint256)", []);

    return result[0].toBigInt();
  }

  try_size(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("size", "size():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  get(_index: BigInt): string {
    let result = super.call("get", "get(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);

    return result[0].toString();
  }

  try_get(_index: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("get", "get(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class RemoveCall extends ethereum.Call {
  get inputs(): RemoveCall__Inputs {
    return new RemoveCall__Inputs(this);
  }

  get outputs(): RemoveCall__Outputs {
    return new RemoveCall__Outputs(this);
  }
}

export class RemoveCall__Inputs {
  _call: RemoveCall;

  constructor(call: RemoveCall) {
    this._call = call;
  }

  get _value(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class RemoveCall__Outputs {
  _call: RemoveCall;

  constructor(call: RemoveCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _type(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get _value(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}