---
title: Motors
description: Brushless motors — the muscles that make your drone fly.
---

Brushless motors convert electrical energy into rotation. Four of them spin propellers to generate thrust. Motor choice affects your drone's speed, efficiency, response, and overall flight character more than almost any other component.

## How Brushless Motors Work

A brushless motor has:
- **Stator**: The stationary inner part with copper wire coils (windings)
- **Rotor (Bell)**: The outer rotating part with permanent magnets
- **Shaft**: Connects the bell to the propeller
- **Bearings**: Allow the shaft to spin freely

The ESC sends current through the stator coils in a precise sequence, creating a rotating magnetic field that pushes against the permanent magnets in the bell, causing it to spin.

## Motor Specifications

### Size (Stator Diameter × Height)
Motor size is expressed as a four-digit number: **XXYY** where XX is stator diameter and YY is stator height in millimeters.

| Size | Stator | Common Use |
|------|--------|-----------|
| 0603 | 6mm × 3mm | 65mm tiny whoops |
| 0802 | 8mm × 2mm | 65-75mm whoops |
| 1103 | 11mm × 3mm | 2-2.5" micros |
| 1404 | 14mm × 4mm | 3" cinewhoops and micros |
| 1507 | 15mm × 7mm | 3-3.5" builds |
| 2207 | 22mm × 7mm | 5" (lighter option) |
| 2306 | 23mm × 6mm | 5" (balanced) |
| 2407 | 24mm × 7mm | 5" (more powerful) |
| 2507 | 25mm × 7mm | 5" (high power) |
| 2806 | 28mm × 6mm | 6-7" long range |

**Larger stator = more torque and power, but heavier.** For 5", 2306 is the balanced choice. 2207 saves weight. 2407/2507 add power for heavy builds.

### KV Rating
KV measures unloaded RPM per volt applied:
- **Higher KV**: Spins faster, less torque, pairs with smaller props and lower voltage
- **Lower KV**: Spins slower, more torque, pairs with larger props and higher voltage

| Build | Voltage | Typical KV Range |
|-------|---------|-----------------|
| 5" racing/freestyle | 6S | 1700-1950 KV |
| 5" racing/freestyle | 4S | 2400-2750 KV |
| 3" micro | 4S | 3000-4500 KV |
| 7" long range | 6S | 1100-1500 KV |
| Tiny whoop (1S) | 1S | 15000-25000 KV |

**The relationship:** Higher voltage × lower KV ≈ Lower voltage × higher KV. A 1750KV motor on 6S (25.2V × 1750 = ~44,000 RPM max) performs similarly to a 2550KV motor on 4S (16.8V × 2550 = ~42,800 RPM max).

6S with lower KV motors is preferred because the same power is delivered at lower current, meaning less heat and more efficiency.

### Magnet Count and Configuration
- **N-number**: Magnets in the bell (e.g., 14N)
- **P-number**: Stator poles (e.g., 12P)
- **14N12P**: Most common configuration for FPV motors
- More poles = smoother rotation but slightly less top-end RPM

### Weight
Lighter motors = lighter drone = better flight performance. Weight varies by size and construction:
- 2207: ~28-32g
- 2306: ~30-35g
- 2407: ~33-38g

A 5g difference per motor = 20g on the quad. It matters.

## Motor Quality Indicators

### Bearing Quality
Good bearings spin freely, smoothly, and quietly. Bad bearings grind, wobble, or have rough spots. Spin the motor by hand:
- Should spin freely for 2-3+ seconds from a flick
- No grinding, clicking, or gritty feeling
- No play (wobble) in the shaft

### Copper Quality
Better copper windings = lower resistance = more efficiency = less heat. You can't easily test this, so rely on brand reputation and reviews.

### Build Tolerance
Consistent gap between stator and magnets. Poor tolerance leads to uneven performance and potential rubbing. Premium brands have tighter quality control.

## Popular Motor Brands

| Brand | Tier | Known For |
|-------|------|----------|
| T-Motor | Premium | Excellent quality, smooth, reliable |
| BrotherHobby | Premium | Great performance, good value for quality |
| EMAX | Mid-High | ECO series is excellent value |
| iFlight | Mid | XING series, solid all-rounders |
| Flywoo | Mid | NIN series, competitive pricing |
| BetaFPV | Budget-Mid | Good for micros and whoops |

## Installation

### Mounting
- **4 screws** through the motor base into the frame arm
- **Screw length matters**: Too long and the screws hit the stator windings, causing a short. Too short and the motor loosens. Measure your arm thickness + motor base depth.
- **Loctite (blue/medium)**: Apply to motor screws. Vibration will loosen them otherwise.

### Motor Direction
Modern builds use **Props Out** (motors spin outward at the front of the quad):
- Motor 1 (rear right): Clockwise
- Motor 2 (front right): Counter-clockwise
- Motor 3 (rear left): Counter-clockwise
- Motor 4 (front left): Clockwise

Motor direction can be reversed in BLHeli Configurator software — no need to swap wires.

### Wiring
Each motor has 3 wires that connect to the ESC. The order of the three wires determines spin direction. With digital direction reversal available, the wire order doesn't matter — solder them in any order and fix direction in software.

## Maintenance

- **Check bearings**: Spin by hand before each session. Replace motors with gritty bearings.
- **Remove debris**: After crashing in grass or dirt, check inside the motor bell for trapped material. Pop the bell off (usually a C-clip or press-fit), clean, reassemble.
- **Check screws**: Motor screws loosen from vibration. Tighten regularly.
- **Bent shaft**: After a hard crash, roll the motor on a flat surface. If the shaft wobbles, it's bent. Replace the motor (some motors have replaceable shafts).
