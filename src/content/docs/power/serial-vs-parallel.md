---
title: Series vs. Parallel
description: Understanding series and parallel battery configurations.
---

When people talk about "4S" or "6S" batteries, the "S" refers to cells wired in **series**. But batteries can also be wired in **parallel** (P). Understanding the difference helps you choose the right battery and safely charge multiple packs.

## Series (S)

Cells wired in series add their voltages together while capacity stays the same.

- 1 cell = 3.7V nominal
- 2S = 2 × 3.7V = 7.4V
- 4S = 4 × 3.7V = 14.8V
- 6S = 6 × 3.7V = 22.2V

**Higher voltage = higher top speed for the same motor KV**, and more efficient current delivery (same power at lower amps).

This is why the hobby has moved from 4S to 6S — same power with less current, meaning less heat in ESCs and wires.

## Parallel (P)

Cells wired in parallel add their capacities together while voltage stays the same.

- 1 cell of 1300mAh = 1300mAh
- 2P = 2 × 1300mAh = 2600mAh (same voltage)
- 3P = 3 × 1300mAh = 3900mAh

**Higher capacity = longer flight time** but heavier.

## Common Configurations

A battery described as "6S2P" means:
- 6 cells in series (22.2V nominal)
- 2 parallel groups (double the capacity of a single cell)
- Total: 12 individual cells

| Config | Voltage | Capacity Multiplier | Common Use |
|--------|---------|-------------------|------------|
| 1S1P | 3.7V | 1× | Tiny whoop |
| 4S1P | 14.8V | 1× | Standard 4S pack |
| 6S1P | 22.2V | 1× | Standard 6S pack |
| 6S2P | 22.2V | 2× | Long range (high capacity) |

Most FPV batteries are 1P (single parallel group). Multi-P packs are heavier but used for long range where flight time matters more than agility.

## Parallel Charging

Parallel charging connects multiple separate battery packs in parallel for charging. This is different from a parallel cell configuration inside a single pack.

When you connect four 6S 1300mAh packs in parallel:
- The charger sees one effective 6S 5200mAh pack
- You charge at 1C of the total (5.2A)
- All four packs charge simultaneously

**Critical rule:** All packs must be within 0.1V per cell of each other before connecting in parallel. Connecting packs with different voltages causes a high-current rush between them that can damage cells or cause fires.

→ See [Charging](/power/charging) for full parallel charging procedures and safety.

## Series Charging

Some chargers can charge packs in series — connecting them end-to-end to double the voltage. For example, two 6S packs in series = effectively 12S (50.4V fully charged).

This is less common in FPV because:
- Requires a charger that supports the higher voltage
- Any cell imbalance between packs can cause issues
- Parallel charging is simpler and more widely used

## Which Matters for You?

- **Choosing a battery**: Cell count (S) determines your voltage and must match your motor KV. More S = higher voltage = more speed. Capacity (mAh) determines flight time.
- **Charging**: Understanding parallel lets you charge multiple packs efficiently and safely.
- **Building**: 99% of FPV packs are 1P. You'll only encounter multi-P packs in specialized long-range builds.
