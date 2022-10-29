import {
  IdentityDeployed
} from "../generated/IdentityFactory/IdentityFactory"
import { IdentityDeployedEntity } from "../generated/schema"

export function handleIdentityDeployedEvent(event: IdentityDeployed): void {
  const identityDeployedEntity = new IdentityDeployedEntity(event.transaction.hash.toHex())

  identityDeployedEntity.contract = event.params._contract
  identityDeployedEntity.owner = event.params._owner
  identityDeployedEntity.unixTimestamp = event.block.timestamp

  identityDeployedEntity.save()
}
