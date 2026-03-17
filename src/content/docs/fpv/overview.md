---
title: FPV Video System
description: Cameras, transmitters, receivers, and goggles — everything that lets you see through your drone.
---

The FPV (First Person View) video system is what separates an FPV drone from a regular drone. Instead of watching your quad from the ground, you see what it sees through goggles or a monitor. A camera on the quad feeds video to a transmitter, which broadcasts it to a receiver connected to your display. The result is an immersive flying experience that feels like sitting in the cockpit.

## System Components

Every FPV video system has four parts:

### [Camera](/fpv/camera/)
Mounted at the front of the quad, angled upward to match your flying speed. FPV cameras are optimized for low latency rather than image quality. They need to handle rapid light changes (flying from sun into shadow) without washing out, and deliver frames with minimal delay.

### [Video Transmitter (VTX)](/fpv/vtx/)
Takes the camera signal and broadcasts it wirelessly. Power output (measured in milliwatts) determines range. Typical power levels: 25mW (pit mode / indoor), 200-400mW (park flying), 600-800mW (open field), 1W+ (long range).

### [Video Receiver (VRX)](/fpv/vrx/)
Receives the broadcast signal. Can be built into goggles or connected as an external module. Receiver quality and antenna choice significantly affect video range and clarity.

### [Goggles](/fpv/goggles/)
Your display. FPV goggles range from $50 box-style units to $650+ slim goggles with OLED screens. They're the most personal piece of gear since comfort and display quality directly affect your flying experience.

## Analog vs. Digital

The biggest decision in your FPV video system is analog or digital.

### Analog
The original FPV technology. Camera outputs a composite video signal, VTX broadcasts on one of many 5.8GHz channels, any compatible receiver picks it up.

**Pros:**
- Cheapest entry point ($30-50 for camera + VTX)
- Lowest latency (~10-20ms total system delay)
- Universal compatibility (any analog camera works with any analog VTX/VRX)
- Easy to troubleshoot (fewer failure modes)
- Can share video with multiple receivers simultaneously

**Cons:**
- Low resolution (roughly equivalent to 480p)
- Susceptible to interference (static, lines, multipath)
- Image quality degrades with distance rather than cutting out cleanly

### Digital Systems
Modern FPV digital systems encode video digitally and transmit at much higher quality. See the [digital systems guide](/fpv/digital-systems/) for detailed comparisons.

**Current digital options:**
- **DJI O3/O4**: Best image quality, highest latency (~30-40ms). Dominant market share. Expensive ($180+ for VTX alone).
- **HDZero**: Lowest latency digital system (~15-20ms). Open ecosystem, community-driven firmware. Image quality improving with each generation.
- **Walksnail Avatar**: Good balance of quality and latency. Backed by Caddx/FatShark.

**Digital pros:**
- HD image quality (720p-1080p in goggles)
- Clean signal up to max range, then sudden cutoff (no gradual degradation)
- Built-in OSD rendering
- Firmware updates improving performance over time

**Digital cons:**
- More expensive than analog
- Higher latency than analog (varies by system)
- Less interoperability (DJI goggles only work with DJI VTX, etc.)

## Antennas

[Antennas](/fpv/antenna/) have an outsized impact on video performance. A mediocre VTX with a great antenna outperforms a powerful VTX with a bad antenna.

Key concepts:
- **Polarization**: FPV uses circular polarization (RHCP or LHCP). Both TX and RX antennas must match.
- **Directional vs. omnidirectional**: Omni antennas receive from all directions (standard for quads). Directional antennas (patches, helicals) focus reception in one direction for more range.
- **Diversity**: Many goggles support two antennas (one omni, one directional) and automatically use whichever has the stronger signal.

## Etiquette

[FPV etiquette](/fpv/etiquette/) matters when flying with others. Multiple pilots on the same video channel cause interference. Analog pilots need to coordinate channel assignments before flying. Digital systems handle this automatically with their own protocols.

## [OSD (On-Screen Display)](/fpv/osd/)

The OSD overlays flight data on your video feed: battery voltage, current draw, flight time, RSSI, GPS coordinates, warnings, and more. It's configured in Betaflight and is your primary instrument panel during flight. At minimum, always display battery voltage so you know when to land.
