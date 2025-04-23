import { supabase } from "./client"
import { fetchAvailableLocations, fetchAvailableProperties } from "./utils"
import { LineChart } from "@mui/x-charts/LineChart"

const locations = fetchAvailableLocations()
const properties = fetchAvailableProperties()

export const getRealtimeDeviceData = async (device_id, limit = 100) => {
  //   console.log(device_id)
  try {
    const { data, error } = await supabase
      .from("RealtimeDataBlob")
      .select("payload, time_created")
      .eq("device_id", device_id)
      .order("id", { ascending: false })
      .limit(limit)
    if (error) throw error
    else return data
  } catch (e) {
    console.log("Error fetching device data: ", e)
    return null
  }
}

export const realtimeReportChannel = (onChange) => {
  return supabase
    .channel("custom-all-channel")
    .on("postgres_changes", { event: "*", schema: "public", table: "RealtimeDataBlob" }, (payload) => {
      onChange(payload)
    })
    .subscribe()
}

export const unsubToChannel = (channel) => {
  supabase.removeChannel(channel)
}

export const dataCleanup = (data, hoursFilter = 1) => {
  //   console.log("payload data: ", data[0].payload[0].value)
  const oneHourAgo = new Date(Date.now() - hoursFilter * 60 * 60 * 1000)
  return data
    .filter((e) => new Date(e.time_created) >= oneHourAgo)
    .map((e) => ({
      x: new Date(e.time_created),
      y: e.payload[0].value,
    }))
    .reverse()
}

export const IotLineGraph = ({ data = [], height = 300, ...rest }) => {
  return (
    <LineChart
      xAxis={[{ scaleType: "time", dataKey: "x" }]}
      series={[
        {
          dataKey: "y",
          color: "#B59837",
        },
      ]}
      dataset={data}
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
          fill: "white",
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fontFamily: "Inter",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: 0.5,
          fill: "white",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: "white",
          strokeWidth: 2,
        },
        // leftAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: "white",
          strokeWidth: 2,
        },
      }}
      height={height}
      {...rest}
    />
  )
}
