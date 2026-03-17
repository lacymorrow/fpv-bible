---
title: Receiver
description: The radio receiver on your drone that receives commands from your transmitter.
---

The receiver (RX) is a small module on your drone that receives radio signals from your transmitter and passes the stick/switch data to the flight controller. It's the other half of your radio link.

## Receiver Protocols

The receiver communicates with the FC via a serial protocol:

| Protocol | Used By | Connection | Notes |
|----------|---------|------------|-------|
| **CRSF** | ELRS, Crossfire | UART (TX+RX) | Modern standard, fast, bidirectional |
| **SBUS** | FrSky | UART (inverted) | Older, still common on legacy gear |
| **IBUS** | FlySky | UART | Budget systems |
| **DSM** | Spektrum | UART | Less common in FPV now |
| **SPI** | Some built-in RX | Direct SPI bus | No external receiver needed |

**CRSF is the standard** for modern builds. If you're using ELRS or Crossfire, your receiver speaks CRSF to the FC.

## Choosing a Receiver

Match your receiver to your transmitter's protocol:
- **ELRS TX module → ELRS receiver**: Most popular combo. Open-source, cheap, excellent performance.
- **TBS Crossfire TX → Crossfire RX**: Proprietary but proven. Being overtaken by ELRS.
- **FrSky TX → FrSky RX (SBUS)**: Legacy. Still works but the ecosystem has stagnated.
- **Multi-protocol TX → Various**: If your radio has a multi-protocol module, you can use many receiver types.

→ See [ExpressLRS](/control/elrs) for details on the most popular system.
→ See [Protocols](/control/protocols) for the full protocol landscape.

## Receiver Sizing

| Size | Use | Examples |
|------|-----|---------|
| **Nano/EP** | Tiny whoops, micro builds | BetaFPV EP2, Happymodel EP2 |
| **Small** | Sub-250g, 3" builds | RadioMaster RP2, Matek R24-S |
| **Standard** | 5" and larger | RadioMaster RP3, Matek R24-D |

Nano receivers with ceramic antennas are smallest but have the shortest range. Standard receivers with dipole or T-antennas have the best range.

## Installation

### Wiring
Receivers typically need 3-4 connections to the FC:
- **5V**: Power (from FC's 5V pad)
- **GND**: Ground
- **TX**: Receiver transmit → FC UART RX pad
- **RX**: Receiver receive → FC UART TX pad (needed for CRSF bidirectional telemetry)

### Placement
- **Away from the VTX**: VTX RF output can interfere with the receiver
- **Away from ESCs and power wires**: Electrical noise reduces sensitivity
- **Antenna positioning**: Receiver antennas should be:
  - Extended away from the carbon fiber frame (carbon blocks RF)
  - At roughly 90° to each other (for diversity receivers with two antennas)
  - Secured with TPU tubes or zip ties so they don't get cut by props

### Antenna Routing
For best performance:
- Route antennas to the rear of the frame, pointing up and out
- Keep at least 1-2cm of antenna element past the carbon fiber frame
- Use heat shrink or TPU tubes to protect antenna wires
- Don't coil excess antenna wire — trim to the correct length or route straight

## Binding

Binding pairs your specific transmitter with your specific receiver. Methods:

### Binding Phrase (ELRS — Recommended)
Set the same binding phrase in both TX and RX firmware. They auto-connect on power-up. No manual binding process needed. Easiest method.

### Button Binding
1. Put the RX into bind mode (hold bind button during power-up, or 3 quick power cycles)
2. Put the TX into bind mode (via menu or Lua script)
3. They detect each other and pair
4. Power cycle both — they should reconnect automatically

### Troubleshooting Binding
- **Firmware mismatch**: TX and RX must be on compatible firmware versions (especially ELRS)
- **Wrong protocol**: Make sure the TX module protocol matches the receiver
- **Antenna issue**: If the RX antenna is damaged or disconnected, binding may fail at close range
- **Interference**: Try binding away from other RF sources (WiFi routers, other transmitters)

## Telemetry

Many protocols support telemetry — data sent back from the drone to your radio:
- Battery voltage
- Current draw
- GPS coordinates
- RSSI / Link Quality
- Flight mode

Telemetry appears on your radio's screen and can be configured as voice alerts (e.g., "battery low" spoken alert when voltage drops).

For CRSF (ELRS/Crossfire), telemetry is bidirectional by default. Configure telemetry sensors in EdgeTX under Model > Telemetry > Discover.
