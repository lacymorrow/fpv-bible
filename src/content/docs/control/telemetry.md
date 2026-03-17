---
title: Telemetry
description: Real-time data sent from your drone back to your radio.
---

Telemetry is data sent back from the drone to your radio transmitter, giving you real-time information without looking at the OSD. It's a second layer of awareness beyond what's displayed on your FPV feed.

## What Telemetry Provides

| Data | Source | Why It Matters |
|------|--------|---------------|
| **Battery voltage** | FC/ESC current sensor | Know when to land |
| **Current draw** | FC/ESC current sensor | Monitor power consumption |
| **mAh consumed** | FC/ESC current sensor | Most accurate "fuel gauge" |
| **RSSI / Link Quality** | Receiver | Know your radio link health |
| **GPS coordinates** | GPS module | Find your drone after a crash |
| **GPS speed** | GPS module | Speed awareness |
| **Altitude** | GPS / barometer | Height awareness |
| **Flight mode** | FC | Confirm what mode you're in |
| **Satellite count** | GPS module | GPS reliability indicator |

## How Telemetry Works

### CRSF (ELRS / Crossfire)
CRSF is a bidirectional protocol — the same serial link that sends stick data to the drone also sends telemetry back. Telemetry is built into the protocol with no extra wiring.

Telemetry data is interleaved with control packets. The telemetry ratio setting determines how often telemetry is sent relative to control packets:
- **1:2**: One telemetry packet for every 2 control packets (fastest telemetry updates, slight control overhead)
- **1:4**: Default. Good balance.
- **1:8**: Less frequent updates, maximum control bandwidth
- **1:16**: Minimal telemetry. Maximizes control link reliability at extreme range.

### SBUS + SmartPort (FrSky)
Older FrSky systems use separate wires for control (SBUS) and telemetry (SmartPort/S.Port). Requires an additional UART connection on the FC.

## Setting Up Telemetry

### In Betaflight
1. Telemetry is generally enabled by default for CRSF
2. In the **Configuration** tab, ensure Telemetry is enabled
3. Specific sensors can be enabled/disabled in the CLI if needed

### In EdgeTX
1. Go to **Model > Telemetry**
2. Click **Discover Sensors** — the radio scans for available telemetry streams
3. Sensors will appear as they're received (Battery, RSSI, GPS, etc.)
4. Name and organize sensors as desired

### Voice Alerts
EdgeTX can speak telemetry values aloud — extremely useful since you can't look at the radio screen while wearing goggles.

**Common voice alerts:**
- **"Battery low"**: When voltage drops below a threshold
- **Voltage readout on button press**: Press a button, radio speaks current battery voltage
- **Timer announcements**: Periodic alerts (e.g., every 30 seconds) to track flight time

To configure:
1. Go to **Model > Special Functions** (or **Global Functions**)
2. Create a function: Switch = button/logical switch
3. Action = "Play Value" or "Play Sound"
4. Source = the telemetry sensor you want to announce

### Telemetry Screens
EdgeTX supports custom telemetry screens on the radio's display:
- Bar graphs for voltage
- Numeric readouts for multiple sensors
- GPS coordinates for finding a crashed drone

Configure under **Model > Telemetry > Screens**.

## Practical Uses

### Finding a Crashed Drone
If your drone crashes in tall grass or woods:
1. Note the last GPS coordinates from telemetry
2. Enter them in your phone's maps app
3. Walk to the location
4. Combine with the drone's beeper for audio location

This is one of the best reasons to have GPS + telemetry even on freestyle builds.

### Battery Management
Voice alerts for battery voltage let you fly by feel without constantly checking the OSD:
- Set an alert at your landing voltage (e.g., 21.0V for 6S)
- Set a critical alert 1V below (e.g., 20.0V)
- Train yourself to land at the first alert

### Link Quality Monitoring
LQ (Link Quality) telemetry tells you how healthy your radio link is:
- **100%**: Perfect — all packets received
- **80-99%**: Good — minor dropouts
- **50-80%**: Warning — start heading back
- **Below 50%**: Critical — return immediately or expect failsafe

## Telemetry Sensors Reference (CRSF)

| Sensor Name | Unit | Description |
|------------|------|-------------|
| RxBt | V | Receiver battery voltage (from FC) |
| Curr | A | Current draw |
| Capa | mAh | Cumulative energy consumed |
| GPS | lat/lon | GPS coordinates |
| GSpd | km/h | Ground speed |
| Alt | m | Altitude |
| Sats | count | GPS satellite count |
| RSSI | dBm | Signal strength |
| RQly | % | Link quality (ELRS) |
| RSNR | dB | Signal-to-noise ratio |
| FM | text | Flight mode string |
