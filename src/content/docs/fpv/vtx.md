---
title: Video Transmitter (VTX)
description: The VTX broadcasts your FPV camera feed to your goggles.
---

The Video Transmitter (VTX) takes the video signal from your FPV camera and broadcasts it wirelessly to your goggles. It's a critical link in the FPV chain — VTX quality, power level, and antenna choice directly affect your video range and quality.

## Analog VTX

An analog VTX broadcasts the camera's composite video signal on a specific frequency in the 5.8GHz band (most common) or 2.4GHz/1.3GHz (for long range).

### Power Levels
| Power | Range (typical) | Use Case |
|-------|----------------|----------|
| 25mW | 200-500m | Indoor, close range, pit mode |
| 100-200mW | 500m-1km | Park flying, small area |
| 400-600mW | 1-2km | Freestyle, open area |
| 800mW-1W+ | 2-5km+ | Long range, behind obstacles |

**Start at 200-400mW** for most flying. Higher power generates more heat and can interfere with other pilots if you're at a group fly.

### Frequency Bands
5.8GHz analog VTXs operate across several bands:
- **Band A, B, E**: Standard bands
- **Raceband (R)**: 8 channels designed to minimize interference when multiple pilots fly simultaneously. The standard for group flying and racing.
- **Low band (L)**: Used by some VTXs for additional channels

When flying with others, coordinate channels to avoid interference. Raceband is designed for this — use it at group events.

### Smart Audio / Tramp
Most modern VTXs support remote control via a serial protocol:
- **TBS SmartAudio**: Change VTX power, channel, and band from your OSD or Betaflight without touching the VTX
- **IRC Tramp**: Similar functionality, different protocol
- Connect to a UART on the FC and configure in Betaflight's Ports tab

This lets you switch channels and power levels from your goggles using the Betaflight OSD — essential for race events where you need to switch quickly.

### Popular Analog VTXs
| VTX | Power | Size | Notes |
|-----|-------|------|-------|
| TBS Unify Pro32 | 25-800mW | Standard | Rock-solid reliability |
| Rush Tank Ultimate | 25-800mW | 20x20/30x30 | Popular, affordable |
| Foxeer Reaper | 25-800mW | Multiple | Good feature set |
| BetaFPV A03 | 25-400mW | Micro | For whoops/micros |

## Digital VTX (Air Unit)

Digital VTXs encode video digitally before transmission, providing much higher image quality than analog.

### DJI O3 / O4 Air Unit
- Integrated camera + VTX (one unit)
- 1080p video feed to DJI goggles
- Built-in DVR recording on the air unit itself
- ~30ms latency
- O4 is the latest generation with improved performance
- Heaviest option (~36g for O3)

### Walksnail Avatar
- Camera + VTX available as separate or integrated units
- Multiple size options (full, Mini, Nano)
- Good image quality, improving with firmware updates
- Lighter options than DJI available

### HDZero
- Camera and VTX are separate components (like analog)
- Multiple VTX options from full-power to whoop-size
- ~12ms latency (lowest of any digital system)
- VTX options: Freestyle V2 (25-800mW), Race V3 (25-400mW), Whoop Lite

→ See [Digital FPV Systems](/fpv/digital-systems) for full comparison.

## Antenna Connection

VTXs connect to antennas via:
- **UFL/IPEX**: Tiny push-fit connector. Common on lightweight VTXs. Fragile — handle carefully, don't repeatedly unplug.
- **MMCX**: Small but more robust than UFL. Growing in popularity.
- **SMA**: Threaded metal connector. Most durable but heaviest. Common on standalone VTXs.

Always connect the antenna **before** powering on the VTX. Running a VTX without an antenna can instantly damage it — the RF energy has nowhere to go and burns out the transmitter.

→ See [Antennas](/fpv/antenna) for antenna types and selection.

## VTX Installation

### Mounting
- Mount on the FC stack using standoffs (20x20 or 30x30 mounting pattern)
- Or mount externally with double-sided tape or zip ties
- Keep away from the FC gyro to minimize electrical interference
- Route the antenna wire so it exits cleanly at the rear of the frame

### Wiring (Analog)
- **VCC**: Power input. Check the VTX's voltage range — some accept battery voltage directly (e.g., 7-26V), others need regulated 5V or 9V.
- **GND**: Ground
- **Video In**: From the camera's video output
- **Smart Audio/Tramp**: To a UART TX pad on the FC (for remote control via OSD)

### Heat Management
VTXs generate heat, especially at higher power levels. Tips:
- Don't enclose the VTX with no airflow
- Some pilots add small heatsinks
- Power down (pit mode) when not flying
- Don't run maximum power for extended periods on the ground
