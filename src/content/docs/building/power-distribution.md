---
title: Power Distribution
description: Wiring the power system in your FPV build.
---

Power distribution is how battery power reaches every component in your drone. Getting it right means clean power delivery; getting it wrong means smoke, fire, or strange electrical issues.

## Power Flow

Battery → XT60 connector → 4-in-1 ESC → Motors (direct battery voltage)  
Battery → XT60 → 4-in-1 ESC → FC (via stack connector, regulated) → Peripherals (5V/9V)

On a modern build with a 4-in-1 ESC, the ESC board serves as the power distribution hub. The battery connects directly to the ESC, which distributes power to the motors and passes voltage up to the FC through the stack connector.

## The Battery Lead

### XT60 Connector
The XT60 pigtail (a short wire with an XT60 socket) connects to the ESC's battery pads. This is the highest-current connection in the entire build.

**Wiring:**
1. Use **12-14 AWG** silicone wire (thick enough for high current)
2. Keep the pigtail **short** (5-8cm) — longer wires waste energy and add weight
3. **Solder to the battery pads** on the ESC with plenty of solder — these joints carry 30-100A+
4. Use a **hot iron** (380-400°C) — the large pads act as heat sinks and need more heat than signal pads

### Capacitor
Solder a low-ESR electrolytic capacitor across the battery pads:
- **4S**: 25V 1000µF
- **6S**: 35V 1000µF (or 50V for extra margin)
- Keep the capacitor leads **short** (under 2cm)
- Polarity matters — the negative stripe on the capacitor body goes to the negative pad

The capacitor absorbs voltage spikes from motor braking and reduces electrical noise. It protects your ESC, FC, and VTX from transients.

## Stack Connector

Most 4-in-1 ESCs pass power to the FC through a **stack connector** — an 8-pin header or solder pads that align when the boards are stacked:

Typical pinout:
- Battery voltage (VBAT)
- 5V regulated
- Ground (GND)
- Motor signals (M1-M4)
- Current sensor

Some stacks use a plug connector; others require soldering header pins. Check your specific FC and ESC compatibility — most modern stacks from the same brand are designed to work together.

## Powering Peripherals

### From the FC
The FC provides regulated voltage to peripherals:

| Pad | Voltage | Powers |
|-----|---------|--------|
| 5V | 5V regulated | Receiver, GPS, LEDs |
| 9V / VOUT | 9V or configurable | Analog camera, some VTXs |
| VBAT | Battery voltage (unregulated) | VTXs that accept raw battery voltage |

### Current Budget
Check your FC's 5V BEC rating. A typical FC provides 1-2A on the 5V rail. Devices drawing from it:

| Device | Draw |
|--------|------|
| Receiver | 50-100mA |
| GPS | 50-100mA |
| LED strip (8 LEDs) | 100-400mA |
| Buzzer | 30-50mA |
| **Total** | **230-650mA** |

This is usually within the 1-2A budget. If you're adding lots of LEDs or a high-draw VTX, consider an external BEC.

## Wiring Best Practices

### Wire Gauge
| Connection | Recommended Gauge |
|-----------|------------------|
| Battery to ESC | 12-14 AWG |
| Motor wires | 18-20 AWG (usually pre-attached) |
| Signal wires (receiver, VTX control) | 26-28 AWG |
| Camera, LED power | 24-26 AWG |

### Routing
- **Keep power wires away from signal wires** — especially away from the receiver and GPS antenna
- **Twist positive and negative wires together** where possible — reduces radiated noise
- **Secure wires** with zip ties or tape — loose wires get cut by props
- **Leave service loops** — enough slack to disassemble the stack without desoldering

### Insulation
- **Heat shrink** all exposed solder joints
- **Electrical tape** for quick fixes in the field
- **Conformal coating** on the FC and ESC protects against moisture and short circuits from grass/debris

## Common Power Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| Brownout (FC reboots) | BEC overloaded or voltage sag | Add capacitor, reduce peripheral load, use quality battery |
| Video noise (lines in analog feed) | Electrical noise from ESC/motors | Add LC filter on camera power, twist wires, add capacitor |
| Smoke on first power-up | Wiring short | Always use a smoke stopper for first power-up |
| Battery connector sparks on plug-in | Normal for high-capacitance circuits | The initial capacitor charge causes a spark. Alarming but harmless. An anti-spark connector can reduce this. |
