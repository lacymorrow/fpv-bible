---
title: Rates
description: Understanding and configuring stick rates for FPV drone flying.
---

Rates control how your stick movements translate into drone rotation. They're one of the most personal settings in FPV — what feels perfect for one pilot can feel terrible for another.

## What Rates Control

When you move your stick, your drone rotates. Rates determine:
- **How fast** the drone rotates at any given stick position
- **How sensitive** the center of the stick is (where you make small corrections)
- **How fast** the drone rotates at full stick deflection (for flips, rolls, and fast maneuvers)

## The Three Rate Parameters

Betaflight (and most firmware) uses three numbers per axis to define the rate curve:

### RC Rate
The base sensitivity. Affects the entire stick range but has the most impact near the center. Higher RC Rate = more responsive center stick.

### Super Rate
Adds extra rotation speed toward the ends of the stick travel. It "bends" the curve so you get precision at center but speed at full deflection. Higher Super Rate = faster max rotation without affecting center feel as much.

### RC Expo
Flattens the center of the stick. With expo, small movements around center produce less rotation, giving you more precision for smooth flying. The tradeoff: the transition to faster rates at the edges becomes more abrupt.

## Rate Curve Visualization

Think of the rate curve as a graph:
- X-axis = stick position (center to full deflection)
- Y-axis = rotation speed in degrees per second

Without expo, the curve is more linear. With expo, the center flattens out and the edges steepen.

## Practical Rate Examples

### Beginner Rates
| Parameter | Roll/Pitch | Yaw |
|-----------|-----------|-----|
| RC Rate | 1.0 | 1.0 |
| Super Rate | 0.70 | 0.70 |
| RC Expo | 0.20 | 0.00 |
| **Max deg/s** | ~600 | ~600 |

Slower max speed, some expo for forgiveness. Easy to control while learning.

### Intermediate Freestyle
| Parameter | Roll/Pitch | Yaw |
|-----------|-----------|-----|
| RC Rate | 1.0 | 1.0 |
| Super Rate | 0.80 | 0.75 |
| RC Expo | 0.10 | 0.00 |
| **Max deg/s** | ~750 | ~670 |

Faster for flips and rolls, less expo so response feels more connected.

### Fast Freestyle / Racing
| Parameter | Roll/Pitch | Yaw |
|-----------|-----------|-----|
| RC Rate | 1.20 | 1.10 |
| Super Rate | 0.85 | 0.80 |
| RC Expo | 0.05 | 0.00 |
| **Max deg/s** | ~900 | ~800 |

High max rotation for fast tricks. Minimal expo — these pilots want direct control.

### Cinematic / Smooth
| Parameter | Roll/Pitch | Yaw |
|-----------|-----------|-----|
| RC Rate | 0.80 | 0.80 |
| Super Rate | 0.60 | 0.55 |
| RC Expo | 0.30 | 0.10 |
| **Max deg/s** | ~450 | ~400 |

Slow, smooth, and very forgiving at center stick. Designed for cinematic footage where jerky movements ruin shots.

## Actual Rates View

Modern Betaflight has an **Actual Rates** view that displays your rates in real, meaningful numbers:
- **Center Sensitivity** (deg/s at center stick)
- **Max Rate** (deg/s at full stick)
- **Expo** (curve shape)

This is much more intuitive than the abstract RC Rate/Super Rate/Expo numbers. Use the "Actual" rate type in the PID Tuning tab to set rates directly in deg/s.

## Finding Your Rates

1. **Start conservative** — 600 deg/s max, some expo
2. **Fly for a few packs** — notice what feels wrong:
   - Can't complete flips fast enough → raise max rate
   - Small corrections feel twitchy → add expo or lower center sensitivity
   - Feels sluggish → raise center sensitivity or lower expo
3. **Adjust one thing at a time**, fly a pack, repeat
4. **Don't copy someone else's rates blindly** — their muscle memory isn't yours

## Rate Profiles

Betaflight supports multiple rate profiles (usually 3). You can switch between them via an AUX channel:
- **Profile 1**: Normal freestyle
- **Profile 2**: Cinematic (slower, smoother)
- **Profile 3**: Racing (faster, more responsive)

Set up a 3-position switch on your radio to cycle between them.

## Common Mistakes

- **Too much expo**: Makes the stick feel "dead" at center, then suddenly fast. Hard to build muscle memory.
- **Max rate too high**: If you never use full stick, extra max rate just makes the curve steeper near the edges, reducing control.
- **Copying pro rates**: Professional pilots have thousands of hours of muscle memory. Their rates may feel completely wrong to you.
- **Never adjusting**: Your ideal rates will evolve as your skills improve. Revisit them periodically.
