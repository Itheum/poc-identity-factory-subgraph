import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AdditionalOwnerAction,
  IdentityDeployed
} from "../generated/IdentityFactory/IdentityFactory"

export function createAdditionalOwnerActionEvent(
  _contract: Address,
  originalOwner: Address,
  additionalOwner: Address,
  action: string
): AdditionalOwnerAction {
  let additionalOwnerActionEvent = changetype<AdditionalOwnerAction>(
    newMockEvent()
  )

  additionalOwnerActionEvent.parameters = new Array()

  additionalOwnerActionEvent.parameters.push(
    new ethereum.EventParam("_contract", ethereum.Value.fromAddress(_contract))
  )
  additionalOwnerActionEvent.parameters.push(
    new ethereum.EventParam(
      "originalOwner",
      ethereum.Value.fromAddress(originalOwner)
    )
  )
  additionalOwnerActionEvent.parameters.push(
    new ethereum.EventParam(
      "additionalOwner",
      ethereum.Value.fromAddress(additionalOwner)
    )
  )
  additionalOwnerActionEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromString(action))
  )

  return additionalOwnerActionEvent
}

export function createIdentityDeployedEvent(
  _contract: Address,
  _owner: Address
): IdentityDeployed {
  let identityDeployedEvent = changetype<IdentityDeployed>(newMockEvent())

  identityDeployedEvent.parameters = new Array()

  identityDeployedEvent.parameters.push(
    new ethereum.EventParam("_contract", ethereum.Value.fromAddress(_contract))
  )
  identityDeployedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )

  return identityDeployedEvent
}
