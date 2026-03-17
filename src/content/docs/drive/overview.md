---
title: Drive Systems
description: ESCs, motors, and propellers — what makes your quad move.
---

The drive system converts electrical energy into thrust. It's the chain from the flight controller's commands to spinning propellers.

## The Chain

```
Flight Controller → ESC Signal → ESC → Motor → Propeller → Thrust
```

## Components

- **[ESCs](/drive/escs/)** — Electronic Speed Controllers. Translate FC commands into motor speed.
- **[Motors](/drive/motors/)** — [Brushless](/drive/brushed-vs-brushless/) for anything serious. Spin the props.
- **[Propellers](/drive/propellers/)** — Generate lift and thrust. Size, pitch, and blade count all matter.

## Signal Types

- **[PWM Signal](/drive/pwm-signal/)** — How ESCs interpret speed commands.
- **[PPM Signal](/drive/ppm-signal/)** — An older multi-channel signal format.
