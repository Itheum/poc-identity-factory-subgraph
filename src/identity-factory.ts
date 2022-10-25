import {
  OwnerAction,
  IdentityDeployed
} from "../generated/IdentityFactory/IdentityFactory"
import { IdentityDeployedEntity, OwnerActionEntity } from "../generated/schema"

export function handleOwnerActionEvent(
  event: OwnerAction
): void {
  const ownerActionEntity = new OwnerActionEntity(event.transaction.hash.toHex())

  ownerActionEntity.contract = event.params._contract
  ownerActionEntity.owner = event.params._owner
  ownerActionEntity.actionBy = event.params._actionBy
  ownerActionEntity.actionType = event.params._actionType
  ownerActionEntity.unixTimestamp = event.block.timestamp

  ownerActionEntity.save()
}

export function handleIdentityDeployedEvent(event: IdentityDeployed): void {
  const identityDeployedEntity = new IdentityDeployedEntity(event.transaction.hash.toHex())

  identityDeployedEntity.contract = event.params._contract
  identityDeployedEntity.owner = event.params._owner
  identityDeployedEntity.unixTimestamp = event.block.timestamp

  identityDeployedEntity.save()
}
