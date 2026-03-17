---
title: Power Systems
description: How power works in an FPV quad — from battery to components.
---

The power system is the lifeblood of your quad. It delivers energy from the battery to every component — motors, flight controller, VTX, camera, receiver, and LEDs.

## Key Concepts

- **Voltage (V)** — The "pressure" of electricity. Higher voltage = more power potential.
- **Current (A)** — The "flow" of electricity. Motors draw the most current.
- **Capacity (mAh)** — How much energy the battery holds. More capacity = longer flights but more weight.
- **C-Rating** — How fast a battery can safely discharge. Racing packs need high C-ratings.

## Power Path

```
Battery → Power Distribution Board (PDB) → ESCs → Motors
                                        → Flight Controller
                                        → VTX (via regulator)
                                        → Camera
                                        → Receiver
                                        → LEDs
```

## Sections

- [Serial vs. Parallel](/power/serial-vs-parallel/) — How batteries connect
- [Power Distribution Board](/power/pdb/) — Splitting power to all components
- [Regulators](/power/regulators/) — Stepping voltage down for sensitive components
- [Battery](/power/battery/) — LiPo packs, cell counts, and what to buy
- [Charging](/power/charging/) — Safe charging practices
- [LEDs](/power/leds/) — Lighting up your quad
