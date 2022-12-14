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

export class IdentityDeployed extends ethereum.Event {
  get params(): IdentityDeployed__Params {
    return new IdentityDeployed__Params(this);
  }
}

export class IdentityDeployed__Params {
  _event: IdentityDeployed;

  constructor(event: IdentityDeployed) {
    this._event = event;
  }

  get _contract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerAction extends ethereum.Event {
  get params(): OwnerAction__Params {
    return new OwnerAction__Params(this);
  }
}

export class OwnerAction__Params {
  _event: OwnerAction;

  constructor(event: OwnerAction) {
    this._event = event;
  }

  get _contract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _actionBy(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _actionType(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class IdentityFactory extends ethereum.SmartContract {
  static bind(address: Address): IdentityFactory {
    return new IdentityFactory("IdentityFactory", address);
  }

  deployIdentity(): Address {
    let result = super.call("deployIdentity", "deployIdentity():(address)", []);

    return result[0].toAddress();
  }

  try_deployIdentity(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployIdentity",
      "deployIdentity():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  throwOwnerActionEvent(_owner: Address, action: string): boolean {
    let result = super.call(
      "throwOwnerActionEvent",
      "throwOwnerActionEvent(address,string):(bool)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromString(action)]
    );

    return result[0].toBoolean();
  }

  try_throwOwnerActionEvent(
    _owner: Address,
    action: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "throwOwnerActionEvent",
      "throwOwnerActionEvent(address,string):(bool)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromString(action)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class DeployIdentityCall extends ethereum.Call {
  get inputs(): DeployIdentityCall__Inputs {
    return new DeployIdentityCall__Inputs(this);
  }

  get outputs(): DeployIdentityCall__Outputs {
    return new DeployIdentityCall__Outputs(this);
  }
}

export class DeployIdentityCall__Inputs {
  _call: DeployIdentityCall;

  constructor(call: DeployIdentityCall) {
    this._call = call;
  }
}

export class DeployIdentityCall__Outputs {
  _call: DeployIdentityCall;

  constructor(call: DeployIdentityCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ThrowOwnerActionEventCall extends ethereum.Call {
  get inputs(): ThrowOwnerActionEventCall__Inputs {
    return new ThrowOwnerActionEventCall__Inputs(this);
  }

  get outputs(): ThrowOwnerActionEventCall__Outputs {
    return new ThrowOwnerActionEventCall__Outputs(this);
  }
}

export class ThrowOwnerActionEventCall__Inputs {
  _call: ThrowOwnerActionEventCall;

  constructor(call: ThrowOwnerActionEventCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get action(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ThrowOwnerActionEventCall__Outputs {
  _call: ThrowOwnerActionEventCall;

  constructor(call: ThrowOwnerActionEventCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
