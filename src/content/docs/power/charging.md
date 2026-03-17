---
title: Charging
description: How to safely and efficiently charge LiPo batteries for FPV.
---

Charging is a critical part of FPV. You'll do it before every session, and doing it wrong can damage batteries or cause fires. This page covers chargers, techniques, and best practices.

## Charger Types

### Balance Charger (Essential)
A balance charger monitors and equalizes individual cell voltages during charging. This is the only type of charger you should use for LiPo batteries.

**Budget options ($25-50):**
- ISDT Q6 Nano — Compact, reliable, up to 200W
- ToolkitRC M6 — 150W, good display, affordable

**Mid-range ($50-100):**
- ISDT Q8 — 500W, fast charging, dual input
- ToolkitRC M8S — 400W, color screen, versatile
- HOTA D6 Pro — Dual channel, 325W per channel

**High-end ($100-200+):**
- ISDT D2 Mark II — Dual channel, 200W each, premium build
- HOTA D6 Pro Duo — Dual channel, compact

### Power Supply
Most chargers need an external DC power supply (12-24V). Some have built-in AC power supplies.

**If your charger needs external power:**
- A server power supply (HP DPS-1200FB) modded with an XT60 output is the cheapest high-wattage option (~750W for ~$15-25 used)
- Dedicated charger PSUs ($30-60) are cleaner but lower wattage
- A car battery works for field charging

## Charging Basics

### Charge Rate
The charge rate is expressed as a multiple of capacity (C):
- **1C** = capacity in amps. For a 1300mAh pack, 1C = 1.3A
- **1C is the standard safe charge rate**
- **2C** is acceptable for most quality packs — charges in ~30 minutes
- Higher rates (3C+) reduce battery lifespan but some packs are rated for it

### Balance Charging
Always balance charge. The charger monitors each cell individually and ensures they all reach 4.20V together. Unbalanced cells can lead to overcharging one cell — a fire risk.

The balance lead (small multi-pin connector) connects to your charger's balance port. The main lead (XT60) connects to the charger's output.

### Charge Settings
1. Select battery type: LiPo
2. Set cell count: Match your battery (4S, 6S, etc.)
3. Set charge current: 1C to start (e.g., 1.3A for a 1300mAh pack)
4. Verify the charger detected the correct cell count
5. Start charge
6. Monitor — stay in the room

### Storage Charging
When you won't fly within a day or two, use the charger's "Storage" mode. It brings each cell to 3.80-3.85V:
- If the battery is full, it discharges to storage voltage
- If the battery is depleted, it charges up to storage voltage
- Storing at the correct voltage extends battery life significantly

## Parallel Charging

Parallel charging lets you charge multiple batteries simultaneously, dramatically speeding up your charging workflow.

### How It Works
A parallel charging board connects multiple batteries' main leads (XT60) and balance leads together, making the charger see them as one large battery. Four 1300mAh 6S packs in parallel = one effective 5200mAh 6S pack to the charger.

### Rules for Parallel Charging
:::danger
Parallel charging is safe **only** when done correctly. Breaking these rules can cause fires.
:::

1. **Same cell count**: Never mix 4S and 6S on the same board
2. **Similar capacity**: Stay within 20% (e.g., don't mix 650mAh with 1500mAh)
3. **Similar voltage**: All packs should be within 0.1V per cell of each other before connecting. Check with a voltage checker first.
4. **Same chemistry**: All LiPo or all Li-Ion, never mix
5. **Fused parallel board**: Use a board with individual fuses per port (prevents short circuit chain reactions)

### Workflow
1. Check all pack voltages — they must be within 0.1V/cell of each other
2. Connect all packs to the parallel board (balance leads first, then main leads)
3. Set charger to the correct cell count
4. Set charge current to 1C × total capacity (4 × 1300mAh = 5.2A at 1C)
5. Charge
6. When complete, disconnect main leads first, then balance leads

## Field Charging

Charging at the flying field:
- **Car battery + charger**: Connect your charger to a car battery via alligator clips. Works well for a day of flying.
- **Portable power station**: Jackery, EcoFlow, etc. Convenient but expensive.
- **Generator**: Overkill for most pilots, but used at race events.
- **Solar + battery**: For the adventurous. Slow but free once set up.

## Tips

- **Label your batteries**: Number them (1, 2, 3...) so you can track individual pack health over time
- **Charge the day before**: Having packs ready means more flying time
- **Don't charge right after flying**: Let batteries cool to room temperature first (at least 15-20 minutes)
- **Voltage checker**: A $5 cell checker that plugs into the balance lead is invaluable for quick voltage checks
- **Log cycle count**: Some chargers track this. If not, keep a mental note. Batteries degrade after 100-300 cycles.
- **Never leave charging batteries unattended**: The most important rule. If you leave the room, unplug.
