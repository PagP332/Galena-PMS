import React, { useEffect, useState } from "react"
import { useSession } from "../context/sessionContext"
import { useNavigate } from "react-router-dom"
import Test from "../pages/test_page"
import { addNewLocation, addNewProperty, deleteLocation, fetchAvailableLocations, fetchAvailableProperties } from "../api/utils"
import Loading from "./Loading"

export default function TestDashboard() {
  const { userRole, session } = useSession()
  const navigate = useNavigate()

  const [newLocation, setNewLocation] = useState("")
  const [delLocation, setDelLocation] = useState("")
  const [newProperty, setNewProperty] = useState("")
  const [newPropertyLocation, setNewPropertyLocation] = useState("")
  const [newPropertyAddress, setNewPropertyAddress] = useState("")
  const [newDeviceName, setNewDeviceName] = useState("")
  const [newDeviceType, setNewDeviceType] = useState("")
  const [newDeviceProperty, setNewDeviceProperty] = useState("")
  const [newDeviceLocation, setNewDeviceLocation] = useState("")

  const [availableLocations, setAvailableLocations] = useState([])
  const [availableProperties, setAvailableProperties] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const locations = await fetchAvailableLocations()
      const properties = await fetchAvailableProperties()
      if (locations) setAvailableLocations(locations)
      if (properties) setAvailableProperties(properties)
    }
    fetchData()
    console.log("Available locations: ", availableLocations)
    console.log("Available properties: ", availableProperties)
  }, [])

  if (loading) {
    return <Loading />
  }

  const handleAddNewLocation = (newLocation) => {
    console.log("Requested new location added: ", newLocation)
    addNewLocation(newLocation)
  }

  const handleDeleteLocation = (delLocation) => {
    console.log("Requested delete location: ", delLocation)
    deleteLocation(delLocation)
  }
  const handleAddNewProperty = (newProperty, newPropertyLocation) => {
    console.log("Requested new property added: ", newProperty, newPropertyLocation)
    addNewProperty(newProperty, newPropertyLocation, newPropertyAddress)
  }

  const handleAddNewDataDevice = (newDeviceName, newDeviceType, newDeviceProperty, newDeviceLocation) => {
    console.log(newDeviceName, newDeviceType, newDeviceProperty, newDeviceLocation)
  }

  if (userRole !== "ADMIN") {
    console.log(session, " ", userRole)
    try {
      navigate("/")
    } catch (e) {
      console.log("Unauthorized access on admin dashboard page: ", e)
      return <div>Forbidden page access</div>
    }
  }

  return (
    <div
      style={{ padding: 20, paddingRight: 200, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridTempalateRows: "repeat(11,1fr)", gap: 3 }}
    >
      <h1 style={{ gridColumn: "span 2 / span 2" }}>Locations</h1>
      <h3 style={{ gridRowStart: 2 }}>Add New Location</h3>
      <input style={{ gridRowStart: 3 }} value={newLocation} onChange={(e) => setNewLocation(e.target.value)} placeholder={"Location Name"} />
      <button style={{ gridRowStart: 3, padding: 5 }} onClick={() => handleAddNewLocation(newLocation)}>
        Add New Location
      </button>
      <h3 style={{ gridRowStart: 4 }}>Delete Location</h3>
      <select style={{ gridRowStart: 5 }} value={delLocation} onChange={(e) => setDelLocation(e.target.value)}>
        <option value="">Select Location</option>
        {availableLocations.map((location) => {
          return (
            <option value={location.location_id} key={location.location_id}>
              {location.name}
            </option>
          )
        })}
      </select>
      <button style={{ gridRowStart: 5, padding: 5 }} onClick={() => handleDeleteLocation(delLocation)}>
        Delete Location
      </button>

      <h1 style={{ marginTop: 50, gridRowStart: 6, gridColumn: "span 2 / span 2" }}>Properties</h1>
      <h3 style={{ gridRowStart: 7 }}>Add New Property</h3>
      <input style={{ gridRowStart: 8 }} value={newProperty} onChange={(e) => setNewProperty(e.target.value)} placeholder={"Property Name"} />
      <select style={{ gridRowStart: 8 }} value={newPropertyLocation} onChange={(e) => setNewPropertyLocation(e.target.value)}>
        <option value="">Select Location</option>
        {availableLocations.map((location) => {
          return (
            <option value={location.location_id} key={location.location_id}>
              {location.name}
            </option>
          )
        })}
      </select>
      <input
        style={{ gridRowStart: 8 }}
        value={newPropertyAddress}
        onChange={(e) => setNewPropertyAddress(e.target.value)}
        placeholder={"Property Address"}
      />
      <button
        style={{ gridRowStart: 8, padding: 5 }}
        onClick={() => (newPropertyLocation === "" ? null : handleAddNewProperty(newProperty, newPropertyLocation))}
      >
        Add New Property
      </button>
      <h1 style={{ marginTop: 50, gridRowStart: 9, gridColumn: "span 2 / span 2" }}>Data Devices</h1>
      <h3 style={{ gridRowStart: 10 }}>Add New Data Device</h3>
      <input style={{ gridRowStart: 11 }} value={newDeviceName} onChange={(e) => setNewDeviceName(e.target.value)} placeholder={"Device Name"} />
      <input style={{ gridRowStart: 11 }} value={newDeviceType} onChange={(e) => setNewDeviceType(e.target.value)} placeholder={"Device Type"} />
      <select style={{ gridRowStart: 11 }} value={newDeviceProperty} onChange={(e) => setNewDeviceProperty(e.target.value)}>
        <option value="">Select Property</option>
        {availableProperties.map((property) => {
          return (
            <option value={property.property_id} key={property.property_id}>
              {property.property_name}
            </option>
          )
        })}
      </select>
      <input
        style={{ gridRowStart: 11 }}
        value={newDeviceLocation}
        onChange={(e) => setNewDeviceLocation(e.target.value)}
        placeholder={"Device Location"}
      />
      <button
        style={{ gridRowStart: 11, padding: 5 }}
        onClick={() => (newDeviceProperty === "" ? null : handleAddNewDataDevice(newDeviceName, newDeviceType, newDeviceProperty, newDeviceLocation))}
      >
        Add New Data Device
      </button>
    </div>
  )
}
