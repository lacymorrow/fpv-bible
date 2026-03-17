---
title: Antennas
description: FPV antennas for your VTX and goggles.
---

Antennas are the most underrated component in FPV. A great VTX with a bad antenna will perform worse than a budget VTX with a good antenna. Getting antennas right — type, polarization, placement, and matching between VTX and goggles — has a massive impact on range and signal quality.

## Antenna Basics

### Frequency
Most FPV operates on **5.8GHz**. Your antennas must be designed for 5.8GHz. Using the wrong frequency antenna drastically reduces performance.

Some long-range setups use **2.4GHz** or **1.3GHz** for video — these require appropriately sized antennas (larger for lower frequencies).

### Polarization
Antennas emit and receive radio waves in a specific pattern:

**Circular Polarized (CP):**
- **RHCP (Right-Hand Circular Polarization)**: The standard in FPV. Most antennas sold for FPV are RHCP.
- **LHCP (Left-Hand Circular Polarization)**: Works identically, just opposite rotation.
- **VTX and VRX antennas must match** — both RHCP or both LHCP. Mismatched polarization costs ~3dB (roughly halves your range).
- CP antennas reject multipath interference (signal bouncing off buildings/ground), making them superior to linear polarized antennas in most environments.

**Linear Polarized:**
- Simpler, cheaper, lighter
- More susceptible to multipath interference
- Orientation-sensitive (if the TX and RX antennas aren't aligned, signal drops)
- Common on cheap whoop VTXs and dipole antennas

### Gain
Antenna gain measures how much the antenna focuses signal in a particular direction:
- **0 dBi** (isotropic): Radiates equally in all directions (theoretical)
- **2-3 dBi**: Typical omni-directional FPV antenna. Good coverage in all directions.
- **8-14 dBi**: Directional antenna (patch, helical). Strong signal in one direction, weak in others.

Higher gain doesn't mean "better" — it means more focused. A high-gain patch antenna pointed the wrong way gives you nothing.

## Antenna Types

### Omni-Directional (For VTX and Goggles)

**Pagoda / Lollipop / Stubby:**
- Circular polarized (RHCP/LHCP)
- ~2-3 dBi gain
- Radiates in a donut pattern (good coverage in all directions except directly above/below)
- The default choice for VTX antennas on a drone
- Lollipop-style antennas are durable with a rounded protective shell

**Dipole:**
- Linear polarized
- Simple, lightweight, cheap
- Common on budget receivers and tiny whoops
- Less ideal for range due to linear polarization and orientation sensitivity

### Directional (For Goggles)

**Patch Antenna:**
- Flat panel shape
- 8-12 dBi gain
- Wide beam angle (~60-90°)
- Point it toward your flying area for extended range
- Common as the second antenna on diversity goggles

**Helical Antenna:**
- Spiral/helix shape
- 10-14 dBi gain
- Narrower beam angle than patch
- Higher gain but needs to be pointed more precisely
- Used for long-range setups

**Crosshair Antenna:**
- Hybrid design with moderate gain and wide beam
- Good balance between omni and directional
- Popular for FPV diversity setups

## VTX Antenna Setup

On the drone, you typically use one omni-directional antenna:
- Mount at the rear of the frame, pointing upward
- Use a TPU antenna mount to protect the connector and set the angle
- Keep the antenna away from carbon fiber (which blocks signal)
- Avoid running the antenna alongside power wires (interference)

### Connectors
- **UFL/IPEX**: Tiny, lightweight. Most common on modern VTXs. Fragile — don't repeatedly unplug.
- **MMCX**: Slightly larger, more robust. Growing in popularity.
- **SMA/RP-SMA**: Threaded connector. Most durable but heaviest. Check if your connector is SMA or RP-SMA (they look similar but aren't compatible without an adapter).

### Pigtails
If your VTX has a UFL connector but you want to use an SMA antenna, use a **pigtail** — a short cable with UFL on one end and SMA on the other. Keep pigtails short (signal loss increases with cable length).

## Goggle Antenna Setup

### Standard Diversity Setup
Most analog pilots use two antennas on their goggles:
1. **Omni** (pagoda/lollipop): Primary antenna for general coverage
2. **Patch or crosshair**: Secondary antenna for extended range in one direction

The diversity receiver automatically switches to whichever antenna has the stronger signal.

### Digital Goggles
Digital goggles come with matched antennas. DJI goggles use proprietary antennas. HDZero and Walksnail goggles use standard SMA antennas that can be upgraded.

## Antenna Placement Tips

- **Keep antennas away from carbon fiber**: Carbon fiber blocks 5.8GHz signal. Mount antennas so they're not behind carbon plates.
- **Don't coil excess antenna wire**: This creates interference patterns. Trim pigtails or route excess cleanly.
- **Protect UFL connectors**: They're fragile. Use a dab of hot glue to prevent the connector from pulling loose in crashes.
- **Angle matters**: An omni antenna radiates best perpendicular to its axis. Mounting straight up gives best coverage when the drone is level.

## Common Mistakes

1. **Flying without an antenna on the VTX**: Instant VTX damage. Always connect the antenna before powering on.
2. **Mismatched polarization**: RHCP on one end, LHCP on the other = ~50% range loss.
3. **Antenna behind carbon fiber**: The frame blocks the signal in that direction.
4. **Damaged antenna**: A bent or crushed antenna radiates poorly. Replace after crashes if the antenna looks damaged.
5. **Wrong frequency antenna**: Using a 2.4GHz antenna on a 5.8GHz VTX = no signal.
