---
title: Transmitter Protocols
description: Communication protocols between transmitter and receiver.
---

Protocols define how your transmitter talks to your receiver. The choice of protocol affects latency, range, and features.

## Signal Protocols

- **PWM** — Pulse Width Modulation. One wire per channel. Old school, rarely used for RC link anymore.
- **PPM** — Pulse Position Modulation. Multiple channels on one wire. Legacy but still seen on older gear.
- **SBUS** — Serial Bus. Digital protocol, faster than PPM and PWM. Was the common choice for FPV racing. Developed by Futaba/FrSky.

## Modern Link Protocols

- **ELRS (ExpressLRS)** — Open-source, low-latency, long-range. The current community favorite.
- **Crossfire (CRSF)** — TBS's long-range protocol. Reliable, battle-tested.
- **FrSky** — ACCESS/ACCST protocols. Proprietary, large install base.
- **Ghost** — ImmersionRC's low-latency protocol.

## What to Choose

For new builds in 2024+, **ELRS** is the default recommendation. Open-source, cheap, fast, and long-range. Hard to beat.
