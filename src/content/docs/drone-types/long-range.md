---
title: Long Range FPV
description: Building and flying FPV drones for maximum range and flight time.
---

Long-range FPV is about efficiency: maximizing flight time and distance on a single battery. Where freestyle pilots fly for 3-4 minutes of intensity, long-range pilots cruise for 15-30+ minutes, covering kilometers of terrain.

## What Makes a Build "Long Range"

Every design decision favors efficiency over agility:

- **Larger propellers** (6-7"): Larger props move more air at lower RPM, which is more efficient
- **Lower KV motors**: Match the larger props for efficiency at lower throttle
- **Streamlined frames**: Less drag, longer flight times
- **Efficient FPV system**: Lower power VTX with high-gain antennas
- **GPS**: Essential for return-to-home and position awareness
- **Higher capacity batteries**: 4S or 6S 1300-2200mAh
- **ExpressLRS or Crossfire**: Long-range radio links

## Key Components

### Frame (6-7 inch)
Long-range frames are typically:
- Lightweight carbon fiber
- Designed to minimize drag (some use "deadcat" geometry to keep props out of camera view)
- Room for GPS module mounting
- 6" or 7" prop clearance

Popular frames: TBS Source One 7", Flywoo Explorer, GEPRC Mark5 LR, iFlight Chimera7.

### Motors
Lower KV than freestyle builds:
- **6"**: 1700-1900 KV on 4S, or 1300-1500 KV on 6S
- **7"**: 1500-1700 KV on 4S, or 1100-1350 KV on 6S

Efficiency motors: T-Motor Velox, BrotherHobby Returner, EMAX ECO II.

### Propellers
- **6"** or **7"** bi-blade props are most efficient
- Tri-blade available for more thrust at the cost of efficiency
- Lightweight props preferred (less rotational inertia)
- HQProp, Gemfan, and DALProp all make long-range specific props

### Radio Link
Range depends on your radio link more than anything else:

| Protocol | Typical Range | Notes |
|----------|--------------|-------|
| **ExpressLRS (ELRS)** | 30-100km+ | Best range-to-cost ratio, open source |
| **TBS Crossfire** | 30-40km+ | Proven, reliable, proprietary |
| **TBS Tracer** | 5-10km | Lower latency, shorter range |
| **DJI** | 10-15km | Integrated with DJI FPV system |

For serious long range, ELRS at 250Hz or lower packet rates provides the most reliable link at extreme distances.

### FPV System
- **Analog** with high-gain antennas: Lightweight, simple, proven range
- **DJI O3/O4**: Excellent range, heavier
- **HDZero**: Lightweight, good range with directional antennas

Antenna choice matters enormously for range:
- **Patch antenna** on goggles for directional reception
- **Omni antenna** paired with a patch for the best of both
- **Antenna tracker**: Automatically points a directional antenna at your drone (serious setups)

### GPS Module
Not optional for long range. Provides:
- **GPS Rescue (Betaflight)**: Emergency return-to-home if you lose signal
- **Position hold**: Hover in place
- **Coordinates in OSD**: Know where your drone is
- **Return-to-home**: Navigate back to launch point

Mount the GPS module on a mast above the frame, away from electrical interference. Connect to a UART and configure in Betaflight or iNav.

### Battery
Efficiency builds stretch battery life:
- **4S 1300-1500mAh**: 15-20 min cruise on a 7" build
- **6S 1100-1300mAh**: Similar flight times, more power headroom
- **4S 2200mAh**: 25-30 min on an efficient 7" build (heavy)
- **Li-Ion cells**: Maximum endurance (30-45 min+) but lower burst current — only suitable for cruising, not aggressive flying

Li-Ion packs (e.g., Samsung 21700 cells) provide dramatically more energy density than LiPo, but can't deliver the same peak current. Great for slow cruising, bad for punchy freestyle.

## Firmware

### Betaflight
Works for long range, especially with GPS Rescue. Most pilots start here since they're already familiar with it. GPS Rescue can bring your drone home if you lose radio link.

### iNav
Purpose-built for navigation. Offers:
- Full waypoint missions
- More robust return-to-home
- Position hold, altitude hold
- Automatic landing
- Better GPS integration than Betaflight

If you're building specifically for long range and want reliable autonomous features, iNav is worth learning.

## Safety and Legal

Long-range FPV raises specific concerns:

- **Visual line of sight (VLOS)**: In most countries, you're legally required to maintain visual contact with your drone. Long-range flying typically violates this. Know your local regulations.
- **Failsafe**: Configure GPS Rescue or return-to-home. If you lose signal at 5km out, you need the drone to come back on its own.
- **Battery monitoring**: Watch voltage closely. Running a battery to zero far from home means losing the drone.
- **Airspace**: At the distances long-range drones cover, you may enter controlled airspace. Check before flying.
- **Spotter**: Flying with a spotter (someone watching the drone visually) can help with safety and may be legally required.

## Flight Tips

- **Cruise, don't thrash**: Fly at 40-60% throttle for maximum efficiency
- **Use the OSD**: Monitor battery voltage, mAh consumed, GPS coordinates, and distance from home constantly
- **Set a turnaround point**: Plan to use less than half your battery on the outbound leg
- **Test GPS Rescue**: Before your first long-range flight, test GPS Rescue close to home to make sure it works
- **Wind matters**: A headwind on the way back can dramatically reduce your range. Plan for it.
- **Fly higher**: Higher altitude = less ground-level turbulence and better radio signal
