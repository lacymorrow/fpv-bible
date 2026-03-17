---
title: Brushed vs. Brushless Motors
description: The difference between brushed and brushless motors, and why FPV uses brushless.
---

Every motor on an FPV quad is brushless. This wasn't always the case (early Tiny Whoops used brushed motors), but brushless has won completely. Understanding why helps you appreciate what your motors are doing and why they're built the way they are.

## How Brushed Motors Work

A brushed motor has copper wire windings on a rotating armature (the rotor) surrounded by fixed permanent magnets (the stator). Carbon "brushes" press against a commutator on the rotor shaft to deliver electrical current to the windings. As current flows through each winding, it creates a magnetic field that interacts with the permanent magnets, generating rotation. The commutator switches which winding is energized as the motor spins, keeping it turning.

This mechanical switching system (brushes rubbing against the commutator) is the fundamental weakness. The brushes wear down over time, create friction, generate electrical noise, and limit the motor's maximum speed and efficiency.

## How Brushless Motors Work

A brushless motor flips the design. The permanent magnets are on the rotor (the spinning bell), and the copper windings are on the stator (the fixed center). There are no brushes or commutator. Instead, an electronic speed controller (ESC) handles the switching, energizing the stator windings in sequence to pull the magnets around.

This electronic commutation eliminates mechanical contact between the electrical and moving parts. The result: less friction, less wear, less noise, more speed, and more efficiency.

## Why Brushless Wins

### Efficiency
Brushless motors convert 85-90% of electrical energy into rotational force. Brushed motors manage 75-80%. That 10-15% difference means longer flight times or more power from the same battery.

### Power Density
Brushless motors produce significantly more torque and RPM for their size and weight. A 2306 brushless motor (23mm diameter, 6mm stator height) weighing 30g produces thrust that would require a brushed motor several times its size.

### Lifespan
Brushed motor brushes wear down through friction, typically lasting 50-200 hours of use. Brushless motors have only bearings as wear components, lasting thousands of hours with minimal degradation. For FPV, where motors take constant high-load abuse, this matters.

### Heat Management
Brushed motors generate heat through brush friction in addition to resistive losses in the windings. Brushless motors only generate heat from winding resistance and eddy currents. Less heat means the motor can sustain higher power without thermal throttling or damage.

### Precision Control
ESCs can control brushless motors with extreme precision through digital protocols like DShot. The ESC knows the exact rotor position and can adjust speed thousands of times per second. This precision is what allows flight controllers to stabilize a quad at 8kHz PID loop rates. Brushed motors can't be controlled with this level of accuracy due to the mechanical commutation lag.

### Bidirectional RPM Feedback
With bidirectional DShot, brushless motors report their actual RPM back to the flight controller. This enables RPM filtering in Betaflight, which removes motor-frequency noise from the gyro signal. This is impossible with brushed motors.

## Where You Still Find Brushed

Brushed motors persist in a few areas:
- **Very cheap toy drones**: Sub-$30 toy quads use brushed motors because they don't need an ESC (the motor can be driven directly from a simple transistor circuit)
- **Some legacy Tiny Whoop frames**: Early Whoop designs used brushed 6mm or 7mm motors. These have been almost entirely replaced by brushless 0802 and 1102 motors.

If you're buying any FPV quad in 2024+, it will have brushless motors.

## Brushless Motor Specifications

When shopping for brushless motors, you'll see specs like "2306 1750KV":

- **2306**: Stator dimensions. 23mm diameter, 6mm height. Larger stators produce more torque.
- **1750KV**: RPM per volt with no load. A 1750KV motor on a 6S battery (25.2V fully charged) spins at approximately 44,100 RPM with no propeller. Under load, actual RPM is lower.

Higher KV = faster spinning, less torque per revolution. Lower KV = slower spinning, more torque. For the same prop:
- **High KV on lower voltage** (e.g., 2400KV on 4S): Higher current draw, hotter motors, similar performance
- **Low KV on higher voltage** (e.g., 1750KV on 6S): Lower current draw, cooler running, same or better performance

This is why the hobby has shifted from 4S to 6S. Lower KV motors on higher voltage achieve the same power with less current, which means less stress on ESCs, motors, and battery.
