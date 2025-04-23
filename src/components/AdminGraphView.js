import React, { useEffect, useState } from "react"
import { dataCleanup, getRealtimeDeviceData, IotLineGraph, realtimeReportChannel, unsubToChannel } from "../api/iot"
import { fetchAvailableLocations, fetchAvailableProperties } from "../api/utils"

export default function AdminGraphView() {
  const [availableProperties, setAvailableProperties] = useState([])
  const [availableDevices, setAvailableDevices] = useState([])

  const [filterHours, setFilterHours] = useState(1)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [selectedDevice, setSelectedDevice] = useState(null)

  const [dataset, setDataset] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // const locations = await fetchAvailableLocations()
      const properties = await fetchAvailableProperties()
      // if (locations) setAvailableLocations(locations)
      if (properties) setAvailableProperties(properties)
    }
    fetchData()
    // console.log("Available locations: ", availableLocations)
    console.log("Available properties: ", availableProperties)
  }, [])

  useEffect(() => {
    onRealtimeChange()
    const channel = realtimeReportChannel(onRealtimeChange)
    return () => unsubToChannel(channel)
  }, [])

  useEffect(() => {
    onRealtimeChange()
  }, [selectedDevice])

  const onRealtimeChange = async () => {
    const raw_data = await getRealtimeDeviceData("91ab3057-ec43-42d6-b2f2-ff6e32f7bfe3")
    const data = dataCleanup(raw_data)
    setDataset(data)
    console.log(data)
  }

  return (
    <div style={{ backgroundColor: "#222", borderRadius: "10px", padding: "20px" }}>
      <select value={selectedProperty} onChange={(e) => setSelectedProperty(e.target.value)}>
        <option value="">Select Property</option>
        {availableProperties.map((property) => {
          return (
            <option value={property.property_id} key={property.property_id}>
              {property.property_name}
            </option>
          )
        })}
      </select>
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IotLineGraph data={dataset} />
      </div>
      <div style={{ gap: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button onClick={() => setFilterHours(1)}>1 hour</button>
        <button onClick={() => setFilterHours(6)}>6 hours</button>
        <button onClick={() => setFilterHours(24)}>24 hours</button>
      </div>
    </div>
  )
}
