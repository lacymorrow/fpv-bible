---
title: Flight Controller
description: Installing the brain of your quad.
---

The flight controller (FC) is the brain of your drone. It reads sensor data (gyroscope, accelerometer), processes your stick inputs, runs PID loops, and sends commands to the ESCs. Every other component connects to or through the FC.

## Choosing an FC

### Processor
| Processor | Speed | Features | Price | Notes |
|-----------|-------|----------|-------|-------|
| **F4** | 168MHz | Basic, limited UARTs | Budget | Adequate for simple builds, being phased out |
| **F7** | 216MHz | More UARTs, faster processing | Mid | **The current standard.** Handles all modern features. |
| **H7** | 480MHz | Maximum performance, most UARTs | Premium | Overkill for most pilots. Future-proof. |

**F7 is the recommendation for new builds.** It handles everything modern Betaflight needs with room to spare.

### Form Factor
- **30.5x30.5mm**: Standard for 5" builds. Most options.
- **20x20mm**: Compact. For sub-250g, 3" builds, and tight frames.
- **AIO (All-in-One)**: FC + ESC on one board. For micro builds and whoops.

### Key Features to Look For
- **Barometer**: For altitude hold (useful with GPS)
- **Blackbox flash**: On-board flash memory for flight logging. 16MB+ preferred.
- **SD card slot**: For extended Blackbox logging
- **Current sensor**: For battery monitoring (often on the 4-in-1 ESC instead)
- **Number of UARTs**: Each UART connects a serial device (receiver, GPS, VTX control, Bluetooth, etc.). 4+ UARTs is comfortable. F7/H7 typically have 5-7.

### Popular FCs (2025-2026)
| FC | Processor | Size | Notes |
|----|-----------|------|-------|
| SpeedyBee F405 V4 | F4 | 30.5mm | Budget, feature-rich for F4 |
| SpeedyBee F7 V3 | F7 | 30.5mm | Great value F7 |
| Matek F722-SE | F7 | 30.5mm | Proven, reliable |
| Diatone Mamba F7 | F7 | 30.5mm | Good feature set |
| BetaFPV F722 AIO | F7 | 25.5/20mm | Whoop and micro |

## Installation

### Stack Mounting
The FC mounts on standoffs above the 4-in-1 ESC, forming a "stack":

1. **Bottom**: Frame bottom plate
2. **Standoffs** (usually M3, 5-8mm tall)
3. **4-in-1 ESC**: First board in the stack
4. **More standoffs**
5. **Flight Controller**: Second board
6. **Optional**: VTX on top (if stack-mounted)
7. **Top standoffs + top plate**

Use **rubber grommets** (soft-mounting) between the FC and the standoffs. This dampens vibration from reaching the gyro — critical for clean flight data and good PID performance.

### Orientation
The FC has an arrow marking (or a labeled "front" direction). This must match the drone's forward direction. If you mount it at a different angle (due to frame constraints), set the board alignment offset in Betaflight Configuration tab:
- **90° rotated clockwise**: Set yaw offset to 90°
- **180° rotated**: Set yaw offset to 180°
- etc.

### Wiring

The FC is the central hub. Everything connects to it:

| Connection | Pads | Notes |
|-----------|------|-------|
| **ESC** | Usually via stack connector or solder pads | Motor signals + power |
| **Receiver** | UART TX/RX + 5V + GND | Serial receiver (CRSF, SBUS) |
| **VTX** | Video pad + UART (SmartAudio) + power | Analog: video wire. Digital: ribbon/coax. |
| **Camera** | Video in (analog) or N/A (digital) | Analog cameras wire to VTX, not FC |
| **GPS** | UART TX/RX + 5V + GND | If using GPS module |
| **LED strip** | LED pad + 5V + GND | Addressable LEDs |
| **Buzzer** | BZ+ and BZ- | For lost drone beeper |
| **USB** | USB-C port | Configuration and firmware flashing |

### Soldering the FC
1. **Plan your wiring** before soldering anything. Know which UART each peripheral uses.
2. **Tin all pads** first — apply a small dome of solder to each pad you'll use.
3. **Use flux** on small pads (UARTs are tiny)
4. **Keep signal wires short** — longer wires pick up noise
5. **Route wires cleanly** — avoid crossing over the gyro chip (center of the FC)
6. **Don't bridge pads** — UART pads are close together. Use a fine-tip iron and thin solder.

## First-Time Setup

After mounting and wiring:

1. Connect USB (no battery, no props)
2. Open Betaflight Configurator
3. Flash the latest Betaflight firmware for your FC target
4. Configure Ports (which UART does what)
5. Configure receiver protocol
6. Configure motor protocol (DShot600)
7. Verify motor order and direction in the Motors tab (props off!)
8. Set up OSD
9. Configure failsafe
10. Set rates and modes

→ See [Betaflight Setup](/software/betaflight-setup) for the full step-by-step walkthrough.

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| FC not detected on USB | Driver issue | Install ImpulseRC Driver Fixer (Windows) or check cable |
| FC won't flash firmware | Wrong target selected | Check FC documentation for exact target name |
| Gyro not working | Bad soft mount or gyro damage | Check connections, try removing grommets to test |
| Random reboot in flight | Power brownout | Add capacitor, check BEC capacity |
| Smoke on power-up | Wiring short | Disconnect immediately. Use a smoke stopper next time. Check all connections. |
