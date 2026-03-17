---
title: Installing the VTX
description: Mounting and wiring the video transmitter in your build.
---

The VTX (Video Transmitter) can be mounted in several ways depending on your build style and FPV system. Proper installation affects video quality, range, and heat management.

## Analog VTX Installation

### Stack Mounting
Many analog VTXs have 20x20mm or 30.5x30.5mm mounting holes and can sit on top of the FC in the stack:

1. Add standoffs on top of the FC
2. Mount the VTX on the standoffs
3. Secure with nuts or additional standoffs for the top plate

**Pros:** Clean, compact, protected by the top plate
**Cons:** Heat can be an issue in an enclosed stack

### External Mounting
Attach the VTX to the frame with double-sided tape, zip ties, or a TPU mount:

**Pros:** Better airflow for cooling, easy access
**Cons:** More exposed to crashes

### Wiring (Analog)

| Pad | Connect To | Notes |
|-----|-----------|-------|
| **VCC** | Power source | Check VTX voltage range. Many accept 7-26V (direct battery). Some need 5V. |
| **GND** | Ground | Common ground with FC |
| **Video In** | Camera video output | The analog video signal |
| **SmartAudio** or **Tramp** | FC UART TX pad | For remote VTX control via OSD |

#### SmartAudio / Tramp Setup
1. Wire the VTX's SmartAudio (or Tramp) pad to a UART TX pad on the FC
2. In Betaflight Ports tab, enable "TBS SmartAudio" (or "IRC Tramp") as a peripheral on that UART
3. You can now change VTX channel, power, and band from the Betaflight OSD

## Digital VTX (Air Unit) Installation

### DJI O3 / O4
The DJI air unit is a combined camera + VTX unit:
1. Mount the camera portion in the frame's camera mount
2. Mount the main board on the stack or externally with double-sided tape
3. Connect power wires (VBAT + GND from the FC or direct battery)
4. Connect the UART for OSD/MSP communication (FC TX → air unit RX)
5. Attach the antenna to the antenna connector

### Walksnail
Similar to DJI — camera connects to VTX via cable, VTX mounts on stack or externally. Power and UART connections to the FC.

### HDZero
Closest to analog in installation:
- Camera and VTX are separate (like analog)
- Camera connects to VTX via a coax or ribbon cable
- VTX mounts on the stack or externally
- Power from battery or FC
- UART for MSP/OSD

## Antenna Installation

### Connector Types
- **UFL/IPEX**: Tiny push-fit. Handle gently. Don't repeatedly unplug.
- **MMCX**: Slightly larger, more robust push-fit.
- **SMA**: Threaded metal. Most secure. Heaviest.

### Mounting the Antenna
1. **Connect antenna to VTX** before powering on (running without antenna damages the VTX)
2. **Route the antenna cable** to the rear of the frame
3. **Mount with a TPU holder** — angle the antenna upward (~90° from horizontal)
4. **Keep away from carbon fiber** — carbon blocks 5.8GHz signal
5. **Secure the UFL connector** with a small dab of hot glue to prevent it from vibrating loose

### Pigtails
If your VTX has UFL but you want to use an SMA antenna:
- Use a UFL-to-SMA pigtail (short coax cable with UFL on one end, SMA on the other)
- Mount the SMA connector to the frame's rear using a TPU SMA mount
- Keep the pigtail as short as possible (every cm of coax adds signal loss)

## Heat Management

VTXs generate significant heat, especially at higher power levels (600mW+):
- **Don't enclose in a sealed stack** without airflow
- **Consider a heatsink** on high-power VTXs
- **Use pit mode** when not flying (turns off RF output, reduces heat)
- **Don't run max power on the ground** for extended periods — no propwash airflow = overheating

## Pit Mode Setup

Pit mode disables the VTX's RF output while keeping everything else running. Essential at group events to avoid interfering with other pilots.

Setup via SmartAudio:
1. Configure a switch in Betaflight to toggle the VTX power level
2. Set power level 0 or "PIT" mode position
3. When not actively flying, switch to pit mode
4. Switch back to your desired power level before takeoff

Some VTXs also enter pit mode automatically on power-up (configurable in VTX settings), which prevents accidental transmission when plugging in batteries at events.
