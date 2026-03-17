---
title: Voltage Regulators
description: BECs and voltage regulators that power your FPV electronics.
---

Your battery outputs 14.8-25.2V (4S-6S), but most electronics on your quad need 5V or 9-12V. Voltage regulators (also called BECs) step the voltage down to usable levels.

## What is a BEC?

BEC stands for **Battery Eliminator Circuit** — originally named because it "eliminated" the need for a separate battery to power the receiver in RC aircraft. Today, BEC and "voltage regulator" are used interchangeably in FPV.

## Types of Regulators

### Linear Regulator
Drops voltage by converting excess energy to heat. Simple but inefficient — the bigger the voltage difference, the more heat generated.

**Pros:** Clean output (low noise), simple, cheap
**Cons:** Inefficient (wastes energy as heat), can overheat at high current draw or voltage drop
**Used for:** Low-current applications, some analog camera power

### Switching Regulator (Buck Converter)
Uses a switching circuit to efficiently convert voltage. Much less heat waste.

**Pros:** Efficient (85-95%), stays cool, handles high current
**Cons:** Can introduce electrical noise (ripple), slightly more complex
**Used for:** Most FPV applications — FC power, VTX, LEDs

Most modern FCs and ESCs use switching regulators.

## Common Voltage Rails

| Voltage | What It Powers | Current Needed |
|---------|---------------|----------------|
| **5V** | Flight controller, receiver, GPS, LEDs, digital VTX systems | 1-3A |
| **9V** | Analog FPV cameras, some VTXs | 0.5-1A |
| **10V/12V** | Some VTXs, legacy cameras | 0.5-1.5A |
| **3.3V** | Some sensors, internal FC components | Usually regulated on-board the FC |

## Where Regulators Live

### On the Flight Controller
Most FCs have built-in 5V and sometimes 9V/10V regulators. The 5V rail powers:
- The FC's own processor
- Receiver
- GPS module
- LED strips
- Other 5V peripherals

Check your FC's documentation for the maximum current output on each rail. Exceeding it can cause brownouts or damage.

### On the 4-in-1 ESC
Many 4-in-1 ESCs include a 5V BEC that feeds up to the FC through the stack connector. This supplements or replaces the FC's own regulator.

### External BEC
Sometimes you need a separate BEC:
- **VTX power**: High-power VTXs (1W+) can draw enough current to strain the FC's BEC
- **Servos**: If using servos (camera tilt, fixed-wing control surfaces), a dedicated BEC prevents servo noise from affecting the FC
- **LED strips**: Large LED arrays may need their own 5V source

External BECs are small, cheap modules ($3-8) that wire directly to battery voltage and output regulated power.

## Noise and Filtering

Switching regulators create electrical noise (ripple). This can appear as:
- **Lines in analog FPV video**: Horizontal rolling lines
- **OSD flickering**: On sensitive setups
- **GPS interference**: Noisy power can affect GPS lock time

### Noise Mitigation
1. **LC filter**: A small inductor + capacitor circuit between the power source and sensitive components (especially analog cameras). Many FCs have these built in.
2. **Capacitors**: Adding a capacitor near the VTX or camera input smooths voltage ripple
3. **Separate power path**: Run camera/VTX power from a different BEC than the FC
4. **Twisted wires**: Twist positive and negative wires together to reduce radiated noise
5. **Ferrite rings**: Clipping a ferrite ring around power wires can suppress high-frequency noise

## Brownouts

A brownout occurs when the voltage drops below what a component needs to operate. Common causes:
- **Aggressive throttle punch**: Battery voltage sags, BEC can't maintain output
- **Too many peripherals**: Exceeding the BEC's current capacity
- **Weak battery**: Old or low-quality batteries sag more under load

Symptoms: FC reboots mid-flight (often a flip/crash), OSD disappears momentarily, GPS drops out.

**Solutions:**
- Use a higher-rated BEC
- Add a large capacitor on the battery input
- Reduce peripheral current draw (fewer LEDs, lower VTX power during launch)
- Use quality batteries with low internal resistance
