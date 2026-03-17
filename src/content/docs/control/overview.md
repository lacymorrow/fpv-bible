---
title: Control Systems
description: How you control your quad — radios, receivers, and protocols.
---

The control system is how your inputs on the ground translate to movement in the air.

## The Chain

```
Your Hands → Radio Transmitter (TX) → Radio Signal → Receiver (RX) → Flight Controller → ESCs → Motors
```

## Key Components

- **Radio Transmitter (TX)** — The controller you hold. Sends stick inputs wirelessly.
- **Receiver (RX)** — Mounted on the quad. Receives commands from your TX.
- **Protocols** — The language TX and RX speak. SBUS, CRSF, etc.
- **Telemetry** — Data sent back from the quad to your TX (battery voltage, RSSI, GPS).
- **Failsafe** — What happens when the radio link is lost.

## Sections

- [Radio Transmitter](/control/radio-transmitter/)
- [Protocols](/control/protocols/)
- [Telemetry](/control/telemetry/)
- [Receiver](/control/receiver/)
- [Failsafe](/control/failsafe/)
