---
title: Control System
description: Radio transmitters, receivers, and the protocols that connect pilot to quad.
---

The control system is your link to the quad. A radio transmitter in your hands sends stick inputs to a receiver on the drone, which passes those commands to the flight controller. Every millisecond of latency, every dropped packet, and every range limitation in this chain directly affects how your quad responds.

## Components

### [Radio Transmitter (TX)](/control/radio-transmitter/)
The controller you hold. Modern FPV transmitters use hall-effect gimbals (no potentiometer wear), run EdgeTX or OpenTX firmware, and support multiple RF protocols through external or internal modules. Common form factors:
- **Full-size**: RadioMaster TX16S, Jumper T-Pro, TBS Tango 2
- **Compact/gamepad**: RadioMaster Pocket, BetaFPV LiteRadio 3

Most pilots choose based on ergonomics and whether they prefer a traditional radio grip or a gamepad style.

### [Receiver (RX)](/control/receiver/)
A small module on the quad that receives commands from your transmitter. Receivers are protocol-specific, meaning your RX must match your TX's RF protocol. Modern receivers are tiny (some ELRS receivers weigh under 1 gram) and mount directly to the flight controller via UART.

### [ExpressLRS (ELRS)](/control/elrs/)
The dominant open-source control link protocol. ELRS operates on 2.4GHz or 900MHz and offers extremely low latency, long range, and high update rates. It has largely replaced proprietary systems like FrSky and Crossfire for new builds due to its performance, open development, and low cost.

## Protocols

The [protocols page](/control/protocols/) covers the technical details, but here's the practical summary:

| Protocol | Frequency | Range | Latency | Status |
|----------|-----------|-------|---------|--------|
| **ELRS 2.4GHz** | 2.4GHz | 10-30km+ | < 5ms | Current standard |
| **ELRS 900MHz** | 900MHz | 40-100km+ | < 5ms | Long range |
| **TBS Crossfire** | 900MHz | 40km+ | ~7ms | Established, proprietary |
| **TBS Tracer** | 2.4GHz | 5km+ | ~4ms | Proprietary alternative |
| **FrSky** | 2.4GHz | 1-2km | ~15-20ms | Legacy, declining |
| **Flysky** | 2.4GHz | 500m-1km | ~20ms | Budget, limited |

For new builds, **ELRS 2.4GHz** is the clear recommendation. It's fast, reliable, cheap ($10-15 for a receiver), and the community keeps improving it.

## Key Concepts

### Update Rate
How many times per second the transmitter sends a command packet to the receiver. Higher rates mean more responsive control:
- **50Hz**: Old standard. Noticeable input lag.
- **150Hz**: Minimum for smooth FPV flying.
- **250-500Hz**: Standard for ELRS and Crossfire. Good for most pilots.
- **1000Hz**: Maximum ELRS rate at close range. Competitive racers may notice the difference.

Higher update rates reduce range because the receiver has less time to listen for each packet. Most pilots run 250Hz or 500Hz as a balance between responsiveness and range.

### [Failsafe](/control/failsafe/)
What the quad does when it loses the control link. This is critical safety configuration. Common failsafe behaviors:
- **Drop**: Motors cut immediately. Safest for populated areas (quad falls straight down).
- **GPS Return to Home**: Quad flies back to launch point autonomously. Requires GPS module.
- **Hold position**: Maintains altitude and position (requires GPS). Gives time for signal to reconnect.

Configure your failsafe before your first flight. The default on many flight controllers is "do nothing," which means the quad keeps flying on its last commands if signal is lost.

### [Telemetry](/control/telemetry/)
Data sent back from the quad to your transmitter. Battery voltage, RSSI (signal strength), GPS coordinates, flight mode, and other values can display on your transmitter screen or announce via voice alerts. Telemetry helps you monitor battery levels and signal quality without looking away from your goggles.

## Stick Modes

Radio transmitters can be configured with different stick assignments:

- **Mode 2** (most common worldwide): Left stick = throttle/yaw, right stick = pitch/roll
- **Mode 1**: Left stick = pitch/yaw, right stick = throttle/roll
- **Mode 3/4**: Less common variants

Mode 2 is the overwhelming default in the FPV community. Unless you learned on Mode 1 and are comfortable with it, start with Mode 2 so that tutorials, buddy-boxing, and advice from other pilots all translate directly.
