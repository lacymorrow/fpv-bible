---
title: Control Protocols
description: RC link protocols — how your transmitter talks to your receiver.
---

Control protocols define how commands travel from your radio transmitter to the receiver on your quad. The protocol determines latency, range, reliability, and what features are available. This space has evolved rapidly, and what was standard two years ago may already be obsolete.

## Protocol Categories

There are two separate protocol layers to understand:

### 1. RF Protocol (Over the Air)
How the transmitter and receiver communicate wirelessly. This determines range, latency, frequency hopping behavior, and packet structure. Examples: ExpressLRS, Crossfire, FrSky ACCST, Flysky AFHDS.

### 2. Serial Protocol (On the Wire)
How the receiver passes decoded channel data to the flight controller over a UART connection. Examples: CRSF, SBUS, IBUS, FPORT.

You need both: an RF protocol to get signals to the quad, and a serial protocol to get those signals into the flight controller.

## RF Protocols

### ExpressLRS (ELRS)
Open-source, community-developed. Available in 2.4GHz and 900MHz variants. ELRS has become the dominant protocol for new builds since 2023.

Strengths:
- Extremely low latency (under 5ms at 500Hz)
- Excellent range (30km+ on 2.4GHz, 100km+ on 900MHz with proper antennas)
- Update rates from 25Hz to 1000Hz (configurable)
- Cheap hardware ($10-15 receivers, $25-40 TX modules)
- Active open-source development with frequent firmware updates
- Lua configuration script on EdgeTX radios

The 2.4GHz version is recommended for most pilots. 900MHz is for dedicated long-range builds where you need maximum penetration and distance.

### TBS Crossfire (CRSF)
Team BlackSheep's proprietary 900MHz protocol. Was the gold standard for long-range control before ELRS matured. Still widely used and very reliable.

- 900MHz only (better penetration through obstacles than 2.4GHz)
- ~7ms latency at 150Hz
- Range: 40km+ with standard antennas
- More expensive than ELRS ($25-40 receivers, $50-80 TX module)
- Proprietary but well-supported

### TBS Tracer
TBS's 2.4GHz protocol, designed for racing and proximity flying where range isn't the priority.
- ~4ms latency at 250Hz
- Range: 5km+ (shorter than ELRS 2.4GHz)
- Low latency focus

### FrSky
Once the dominant protocol in the hobby. FrSky radios (Taranis series) were the standard recommendation for years. The protocol has fallen behind on latency and features, and community relations deteriorated after firmware lockout controversies.

- **ACCST** (D8/D16): Legacy 2.4GHz protocol. Range limited to 1-2km. Latency around 15-20ms. Still works but no reason to choose it for new builds.
- **ACCESS**: Newer FrSky protocol. Requires FrSky-specific receivers. Limited third-party support.

If you already own FrSky gear, it works fine. For new purchases, ELRS or Crossfire are better investments.

### Flysky AFHDS
Budget protocol found on entry-level radios. Functional but limited range (500m-1km typical) and higher latency (~20ms). Fine for learning on a Tiny Whoop. Not recommended for anything you plan to fly beyond a park.

## Serial Protocols (Receiver to FC)

### CRSF (Crossfire Serial)
Originally developed by TBS for Crossfire but now the de facto standard serial protocol. ELRS also uses CRSF for receiver-to-FC communication. Fast, bidirectional (supports telemetry upstream), and uses a single UART.

### SBUS
FrSky's serial protocol. Inverted signal (requires hardware inverter on some flight controllers, though most modern F4/F7 FCs handle it natively). One-directional without additional wiring for telemetry.

### IBUS
Flysky's serial protocol. Simple, uninverted, one-directional. Works on all UARTs without hardware modification.

### FPORT
FrSky's combined SBUS + telemetry on a single wire. Reduces wiring complexity compared to separate SBUS and SmartPort connections.

## Choosing a Protocol

For a new setup in 2024+:

| Use Case | Recommendation |
|----------|---------------|
| General FPV (freestyle, casual racing) | ELRS 2.4GHz at 250-500Hz |
| Competitive racing | ELRS 2.4GHz at 500-1000Hz |
| Long range (7" builds, wings) | ELRS 900MHz at 100-200Hz |
| Already own Crossfire gear | Crossfire is still excellent, no need to switch |
| Absolute budget minimum | Flysky for a first Whoop, upgrade later |

The protocol debate has largely been settled. ELRS won on performance, price, and ecosystem. Crossfire remains a solid alternative with a proven track record. Everything else is either legacy or niche.
