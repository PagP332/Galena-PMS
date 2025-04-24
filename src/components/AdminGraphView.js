import React, { useEffect, useRef, useState } from "react"
import { dataCleanup, getRealtimeDeviceData, IotLineGraph, realtimeReportChannel, unsubToChannel } from "../api/iot"
import { fetchAvailableDevices, fetchAvailableLocations, fetchAvailableProperties } from "../api/utils"

function AdminGraphView() {
  const [availableProperties, setAvailableProperties] = useState([])
  const [availableDevices, setAvailableDevices] = useState([])

  const [filterHours, setFilterHours] = useState(1)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [selectedDevice, setSelectedDevice] = useState("")

  const [isSelectDisabled, setSelectDisabled] = useState(true)
  const [isFilterDisabled, setFilterDisabled] = useState(true)

  const [dataset, setDataset] = useState([])

  const selectedDeviceRef = useRef(selectedDevice)

  useEffect(() => {
    const fetchData = async () => {
      // const locations = await fetchAvailableLocations()
      const properties = await fetchAvailableProperties()
      // if (locations) setAvailableLocations(locations)
      if (properties) setAvailableProperties(properties)
    }
    fetchData()
    // console.log("Available locations: ", availableLocations)
    // console.log("Available properties: ", availableProperties)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      // console.log("selected property ", selectedProperty)
      const devices = await fetchAvailableDevices(selectedProperty)
      if (devices) setAvailableDevices(devices)
    }
    if (selectedProperty) {
      // console.log("select property changed")
      fetchData()
      setDataset([])
      setSelectedDevice(null)
      setSelectDisabled(false)
    }
  }, [selectedProperty])

  useEffect(() => {
    onRealtimeChange()
    const channel = realtimeReportChannel(() => onRealtimeChange())
    return () => unsubToChannel(channel)
  }, [])

  useEffect(() => {
    if (selectedDevice) selectedDeviceRef.current = selectedDevice
    onRealtimeChange()
  }, [selectedDevice, filterHours])

  const onRealtimeChange = async () => {
    // if (payload && [payload.new.device_id !== selectedDevice]) return
    if (!selectedDeviceRef.current) return
    console.log(selectedDeviceRef.current)
    const raw_data = await getRealtimeDeviceData(selectedDeviceRef.current)
    // const raw_data = await getRealtimeDeviceData("15c3174f-48ae-4d2d-b802-9d7ae39e730b")
    const data = dataCleanup(raw_data, filterHours)
    setDataset(data)
    setFilterDisabled(false)
    // console.log(data[0])
  }

  return (
    <div style={{ backgroundColor: "#222", borderRadius: "10px", padding: "20px" }}>
      <div style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "center" }}>
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
        <select value={selectedDevice} onChange={(e) => setSelectedDevice(e.target.value)} disabled={isSelectDisabled}>
          <option value="">Select Device</option>
          {availableDevices.map((device) => (
            <option value={device.device_id} key={device.device_id}>
              {device.device_name}
            </option>
          ))}
        </select>
      </div>
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
        <button style={button} onClick={() => setFilterHours(1)} disabled={isFilterDisabled || filterHours === 1}>
          1 hour
        </button>
        <button style={button} onClick={() => setFilterHours(6)} disabled={isFilterDisabled || filterHours === 6}>
          6 hours
        </button>
        <button style={button} onClick={() => setFilterHours(24)} disabled={isFilterDisabled || filterHours === 24}>
          24 hours
        </button>
        <button style={button} onClick={() => setFilterHours(0)} disabled={isFilterDisabled || filterHours === 0}>
          All
        </button>
      </div>
    </div>
  )
}

const button = {
  padding: 5,
  borderRadius: 10,
}

export default React.memo(AdminGraphView)
