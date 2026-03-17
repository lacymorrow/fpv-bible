---
title: ExpressLRS (ELRS)
description: The open-source radio control system taking over FPV.
---

ExpressLRS (ELRS) is an open-source, long-range, low-latency radio control link for RC aircraft. In just a few years, it has become the most popular RC link protocol in FPV, overtaking proprietary systems like FrSky, Crossfire, and even DJI's built-in radio.

## Why ELRS Won

- **Open source**: No licensing fees, community-driven development
- **Extremely low latency**: As low as ~2ms at 1000Hz packet rate
- **Extremely long range**: 100km+ demonstrated at lower packet rates
- **Dirt cheap**: TX modules and receivers start under $15
- **Built into radios**: Most new Radiomaster and other transmitters ship with ELRS built in
- **WiFi configuration**: Update firmware and change settings over WiFi from your phone
- **Community**: Massive, active community constantly improving the protocol

## How It Works

ELRS uses the **2.4GHz** (most common) or **900MHz** frequency band to send control data from your radio transmitter to a receiver on the drone.

The transmitter has an **ELRS TX module** (internal or external) that sends packets. The drone has an **ELRS receiver** that receives packets and sends channel data to the flight controller over CRSF protocol.

### Packet Rate and Range

ELRS lets you choose your packet rate, which trades latency for range:

| Packet Rate | Latency | Range | Best For |
|-------------|---------|-------|----------|
| **1000Hz** | ~2ms | Short-medium | Racing (lowest latency) |
| **500Hz** | ~4ms | Medium | Freestyle (great balance) |
| **250Hz** | ~8ms | Long | Long range, general flying |
| **150Hz** | ~13ms | Very long | Long range cruising |
| **100Hz** | ~20ms | Maximum | Extreme long range |
| **50Hz** | ~40ms | Maximum+ | Extreme long range |

For most FPV flying, **500Hz is the sweet spot** — imperceptible latency with excellent range. Racing pilots may prefer 1000Hz. Long-range pilots drop to 250Hz or lower.

### 2.4GHz vs 900MHz

| Band | Pros | Cons |
|------|------|------|
| **2.4GHz** | Tiny antennas, more channels available, most popular | Slightly less penetration through obstacles |
| **900MHz** | Better range and penetration through trees/buildings | Larger antennas, fewer channels, less common |

2.4GHz is the default recommendation for most pilots.

## Hardware

### Transmitter (TX) Side
- **Internal TX module**: Built into the radio. Radiomaster Pocket, Zorro, Boxer, TX16S all have ELRS internal module options.
- **External TX module**: Plugs into the JR bay on the back of your radio. BetaFPV Micro TX, Happymodel ES24TX, RadioMaster Ranger.
- Most new radios ship with ELRS. If yours doesn't, an external module is $15-30.

### Receiver (RX) Side
ELRS receivers are tiny and cheap:

| Receiver | Size | Antenna | Price |
|----------|------|---------|-------|
| **BetaFPV EP1/EP2** | Tiny | Ceramic | ~$8-12 |
| **Happymodel EP1/EP2** | Tiny | Wire/ceramic | ~$8-12 |
| **RadioMaster RP series** | Small | Dipole/T-antenna | ~$10-15 |
| **Matek R24-D** | Standard | Dipole | ~$12-15 |

**Diversity receivers** (two antennas) provide better signal reliability. Recommended for long range. Most receivers have a single antenna, which is fine for normal flying.

### Antenna Types
- **Ceramic**: Smallest, lowest performance. Fine for whoops and close range.
- **Wire dipole**: Good all-around. Standard for most builds.
- **T-antenna**: Best range in a small form factor. Recommended for 5" builds.
- **Immortal-T**: A popular DIY antenna design with excellent performance.

## Setup

### Binding
Connecting your TX and RX for the first time:

**Binding Phrase (recommended):**
1. In ELRS Configurator, set a binding phrase when flashing TX and RX firmware
2. TX and RX with the same binding phrase will automatically connect on power-up
3. No manual binding procedure needed

**Manual Binding:**
1. Put the RX into bind mode (usually: power on while holding the bind button, or 3 quick power cycles)
2. Put the TX into bind mode (through EdgeTX ELRS Lua script)
3. They'll connect and remember each other

### Betaflight Configuration
1. **Ports tab**: Enable "Serial Rx" on the UART your ELRS receiver is connected to
2. **Configuration tab**: 
   - Receiver Mode: Serial
   - Serial Receiver Provider: CRSF
3. **Receiver tab**: Verify channels respond correctly. ELRS uses AETR channel order by default.

### ELRS Lua Script
EdgeTX radios can run the ELRS Lua script to configure settings from the radio:
- Packet rate
- TX power
- Switch mode (hybrid 8-channel, wide 16-channel)
- Telemetry ratio
- Dynamic power (auto-adjusts TX power based on link quality)

Access via: System > Discover > ELRS (or bind the Lua script to a model)

## Firmware Updates

ELRS firmware is updated frequently. Update via:

1. **WiFi**: ELRS receivers and TX modules can expose a WiFi hotspot. Connect from your phone/laptop and upload new firmware through the web UI. This is the easiest method.
2. **ELRS Configurator**: Desktop app to build and flash firmware with custom options.
3. **Betaflight Passthrough**: Flash the receiver through the FC's USB connection.

**Keep TX and RX on the same firmware version.** Mismatched versions can cause connection issues.

## Telemetry

ELRS supports telemetry — data sent back from the drone to your radio:
- Battery voltage
- Current draw
- RSSI / Link Quality
- GPS coordinates
- Flight mode

Telemetry rate is configurable. Higher telemetry ratio = more frequent updates but slightly less headroom for control packets.

Set up telemetry sensors in EdgeTX: Model > Telemetry > Discover Sensors.

## Tips

- **Use a binding phrase**: Much easier than manual binding, and you never have to rebind
- **500Hz is the default recommendation**: Switch to 250Hz only if you need extra range
- **Dynamic Power**: Enable this — it reduces TX power when you're close (saves battery, reduces interference) and increases when you fly out
- **Link Quality (LQ) over RSSI**: LQ in OSD is more useful than RSSI for monitoring ELRS link health. LQ of 100% means every packet arrived. Below 80%, start heading back.
- **WiFi for updates**: Way easier than USB flashing for receivers
