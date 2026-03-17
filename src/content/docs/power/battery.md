---
title: Battery
description: LiPo batteries — the fuel for your FPV quad.
---

Lithium Polymer (LiPo) batteries are the standard power source for FPV quads. They're energy-dense, lightweight, and can discharge at extremely high rates — exactly what you need to spin four motors at full throttle.

## Key Specs

### Cell Count (S)

Cells wired in series determine voltage. Each cell is nominally 3.7V (4.2V fully charged, 3.0V empty).

| Config | Nominal Voltage | Full Charge | Common Use |
|--------|----------------|-------------|------------|
| 1S | 3.7V | 4.2V | Tiny whoops |
| 2S | 7.4V | 8.4V | Micro quads, larger whoops |
| 3S | 11.1V | 12.6V | Some micro builds |
| 4S | 14.8V | 16.8V | Standard 5" (with higher KV motors) |
| 6S | 22.2V | 25.2V | Standard 5" (modern default), long range |

**4S vs 6S for 5" quads:** 6S has become the standard. Higher voltage means lower current draw for the same power, which is more efficient, produces less heat in ESCs and motors, and gives smoother throttle response. 4S is still fine and cheaper, but 6S is what most new builds use.

### Capacity (mAh)

How much energy the pack holds. Higher capacity = longer flight time but heavier battery.

| Drone Size | Typical Capacity | Flight Time |
|-----------|-----------------|-------------|
| Tiny whoop (1S) | 300-450mAh | 3-5 min |
| 3" micro (2-4S) | 450-850mAh | 3-5 min |
| 5" freestyle (6S) | 1050-1300mAh | 3-5 min |
| 5" long flight (6S) | 1500-1800mAh | 5-7 min |
| 7" long range (6S) | 1500-2200mAh | 10-20 min |

For freestyle, 1050-1300mAh 6S is the sweet spot — enough for 3-5 minutes of aggressive flying without adding too much weight.

### C-Rating

The maximum continuous discharge rate, expressed as a multiple of capacity. A 1300mAh battery rated at 100C can theoretically deliver 130A continuously.

**Reality check:** C-ratings are heavily inflated by manufacturers. A battery labeled "100C" often can't actually deliver that. Look at brand reputation rather than the number:
- **Premium brands** (Tattu R-Line, GNB, CNHL): Actually deliver near-rated performance
- **Budget brands**: May be labeled 100C but perform like 40-50C

For 5" freestyle, 75C+ rated packs from a reputable brand are sufficient.

### Internal Resistance (IR)

A more honest measure of battery performance than C-rating. Lower IR = battery can deliver more current with less voltage sag. New quality packs typically read 1-3mΩ per cell. As batteries age, IR increases and performance drops.

Check IR with your charger (most balance chargers can measure it) or a dedicated battery checker.

### Connector

- **XT60**: Standard for 5" and larger. Rated for 60A continuous.
- **XT30**: Common on micro builds. Rated for 30A.
- **BT2.0 / GNB27 / PH2.0**: Tiny whoop connectors. BT2.0 and GNB27 have lower resistance than PH2.0.

## Choosing Batteries

### For Your First Build
Don't overthink it. Buy 4-6 packs of a mid-range brand in the right cell count and capacity for your build. You'll learn your preferences quickly.

**Solid starter choices (5" 6S):**
- CNHL 1100-1300mAh 6S — Best value
- GNB 1050-1300mAh 6S — Great performance/weight ratio
- Tattu R-Line 1050-1300mAh 6S — Premium, consistent quality

### Battery Weight Matters
Every gram of battery weight affects flight characteristics:
- **Lighter** (1050mAh): More agile, shorter flights, better for freestyle tricks
- **Heavier** (1500mAh+): More stable, longer flights, better for cruising and cinematic

## Battery Life and Care

A well-maintained LiPo lasts 100-300 charge cycles. What kills batteries:
1. **Over-discharging**: Never go below 3.5V per cell under load. Set OSD warnings.
2. **Leaving fully charged**: Storage voltage (3.80-3.85V/cell) when not flying within 24 hours.
3. **Physical damage**: Crashes dent cells. Inspect after hard impacts.
4. **Heat**: Don't charge hot batteries. Let them cool after flying first.
5. **High-current abuse**: Constantly flying at full throttle stresses cells more.

### Signs of a Dying Battery
- Reduced flight time (noticeably shorter than when new)
- High voltage sag under load (voltage drops rapidly when you punch throttle)
- Puffing/swelling
- One cell reading significantly different from others after flying
- Internal resistance increasing over time

### When to Retire a Battery
- Any puffing → retire immediately
- IR doubled from new → performance is degraded, consider retiring
- One cell consistently out of balance → potential safety issue

For full safety guidelines, see [LiPo Battery Safety](/safety/lipo-safety).

## Parallel vs. Series

→ See [Series vs. Parallel](/power/serial-vs-parallel) for the differences and when each applies.
