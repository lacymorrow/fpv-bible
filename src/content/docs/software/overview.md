---
title: Software Overview
description: Flight controller firmware, configurators, and ESC software for FPV drones.
---

Your drone's brain is only as good as the software running on it. This section covers the firmware and configurators you'll use to set up, tune, and maintain your FPV drone.

## Flight Controller Firmware

The flight controller (FC) runs firmware that reads sensor data (gyroscope, accelerometer) and translates your stick inputs into motor commands. The firmware you choose determines what features are available and how your drone flies.

### Betaflight

The most popular FC firmware in FPV by a wide margin. Betaflight is open-source, actively developed, and supported by nearly every FC manufacturer. It powers the vast majority of freestyle and racing quads.

Key features:
- **Acro/Rate mode** with highly tunable PID controller
- **GPS Rescue** and **Position Hold** (as of 2025+)
- **RPM filtering** for clean motor signals
- **Dynamic idle** for better low-throttle control
- **OSD** (On-Screen Display) configuration
- **Blackbox logging** for flight data analysis
- Hundreds of tunable parameters

Configuration is done through **Betaflight Configurator**, a Chrome-based or standalone app that connects to your FC over USB.

→ See [Betaflight Setup](/software/betaflight-setup) for a walkthrough.

### iNav

A Betaflight fork focused on autonomous flight. iNav adds full GPS navigation, waypoint missions, and return-to-home. Popular for long-range builds, fixed-wing FPV, and anyone who wants GPS features beyond what Betaflight offers.

Best for: long-range cruisers, GPS-dependent builds, fixed-wing drones.

### ArduPilot

A mature, full-featured autopilot system used in professional and hobbyist drones. ArduPilot supports multirotors, fixed-wing, helicopters, and rovers. It's more complex than Betaflight but far more capable for autonomous missions.

Best for: professional work, research, complex autonomous flight.

### KISS (Keep It Super Simple)

A closed-source firmware that ships on KISS hardware. Known for its simplicity and out-of-the-box tune quality. Fewer parameters to tweak, which some pilots prefer. Smaller community than Betaflight.

## ESC Firmware

ESCs (Electronic Speed Controllers) also run firmware that determines how they communicate with the FC and drive the motors.

### BLHeli_32

The most common ESC firmware for 32-bit ESCs. Supports:
- **DShot** digital protocols (DShot150/300/600)
- **Bidirectional DShot** for RPM telemetry
- **Active braking** for snappier response
- Configurable motor timing, startup power, and demag compensation

Configured through the **BLHeli_32 Configurator** or passthrough via Betaflight.

### BLHeli_S

Older 8-bit ESC firmware. Still found on budget ESCs and some micro builds. Fewer features than BLHeli_32, no bidirectional DShot. Can be flashed with third-party firmware like **Bluejay** for RPM filtering support.

### Bluejay

An open-source replacement for BLHeli_S that adds bidirectional DShot support (enabling RPM filtering on budget ESCs). Free and community-maintained.

### AM32

Open-source firmware for 32-bit ESCs. An alternative to BLHeli_32 with no licensing fees. Growing in popularity.

## Radio Firmware

### EdgeTX / OpenTX

Open-source firmware for radio transmitters. EdgeTX is the actively developed fork of OpenTX and runs on most Radiomaster, Jumper, and other popular transmitters. Provides:
- Full model configuration and mixing
- Lua scripts for telemetry and configuration
- Multi-protocol module support
- Trainer/buddy-box mode

### ExpressLRS (ELRS)

An open-source radio control link protocol. Not exactly "radio firmware" but a critical piece of the software stack. ELRS runs on both the transmitter module and the receiver, providing:
- Ultra-low latency (as low as ~2ms)
- Long range (100km+ demonstrated)
- High packet rates (up to 1000Hz)
- WiFi-based configuration

→ See [Radio Protocols](/control/protocols) for more on ELRS, Crossfire, and others.

## Configurator Software

| Software | Purpose |
|----------|---------|
| **Betaflight Configurator** | Configure FC settings, flash firmware, tune PIDs, set up OSD |
| **BLHeli Configurator** | Configure ESC settings via USB passthrough |
| **ELRS Configurator** | Flash and configure ExpressLRS receivers and TX modules |
| **EdgeTX Companion** | Configure radio models on your computer, backup/restore |
| **Blackbox Explorer** | Analyze flight logs for tuning and debugging |
| **Speedy Bee App** | Mobile Betaflight configurator (Bluetooth or WiFi) |

## What to Learn First

If you're new, focus on Betaflight. It's what 90%+ of FPV pilots use, and understanding it is essential for setting up any custom build.

1. [Betaflight Setup](/software/betaflight-setup) — first-time FC configuration
2. [PID Tuning](/software/pid-tuning) — making your drone fly well
3. [Betaflight OSD](/fpv/osd) — configuring your on-screen display
