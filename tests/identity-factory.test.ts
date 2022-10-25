import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { AdditionalOwnerAction } from "../generated/IdentityFactory/IdentityFactory"
import { handleAdditionalOwnerAction } from "../src/identity-factory"
import { createAdditionalOwnerActionEvent } from "./identity-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _contract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let originalOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let additionalOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let action = "Example string value"
    let newAdditionalOwnerActionEvent = createAdditionalOwnerActionEvent(
      _contract,
      originalOwner,
      additionalOwner,
      action
    )
    handleAdditionalOwnerAction(newAdditionalOwnerActionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_contract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "originalOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "additionalOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "action",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
