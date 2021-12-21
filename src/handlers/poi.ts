import { Add, Remove } from '../entities/Name/List'
import { POI } from '../entities/schema'
import { buildCountFromPOIs } from '../modules/Count'

export function handleAddName(event: Add): void {
  let poi = new POI(event.params._value)

  poi.coordinates = event.params._value
  poi.isActive = true

  poi.save()


  let count = buildCountFromPOIs(true)
  count.save()
}


export function handleThirdPartyUpdated(event: Remove): void {
  let poi = POI.load(event.params._value)

  if (!poi) {
    return
  }

  poi.isActive = false

  poi.save()

  let count = buildCountFromPOIs(false)
  count.save()
}