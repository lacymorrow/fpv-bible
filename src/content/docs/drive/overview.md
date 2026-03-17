---
title: Drive System
description: Motors, ESCs, and propellers — the components that make your quad move.
---

The drive system converts electrical energy from your battery into thrust. It consists of three main components working together: motors spin propellers to generate lift and thrust, while Electronic Speed Controllers (ESCs) regulate how fast each motor spins based on commands from the flight controller.

## Components

### [Motors](/drive/motors/)
Brushless motors are the standard for FPV quads. They're rated by size (e.g., 2306 means 23mm stator diameter, 6mm stator height) and KV (RPM per volt). Higher KV motors spin faster on the same voltage but produce less torque. Lower KV motors spin slower but push bigger propellers more efficiently.

Common motor sizes by quad class:
- **5" quads**: 2207, 2306, 2307 (1700-2600KV on 6S, 2400-2700KV on 4S)
- **3" quads**: 1404, 1507 (3000-3800KV on 4S)
- **Tiny Whoops**: 0802, 1102 (19000-25000KV on 1S)

### [Electronic Speed Controllers (ESCs)](/drive/escs/)
ESCs sit between the flight controller and the motors. They receive a digital signal (typically [DShot](/drive/pwm-signal/)) telling them how fast to spin each motor, then switch battery power to the motor windings in the correct sequence and timing to achieve that speed.

Modern quads use either a 4-in-1 ESC (single board controlling all four motors) or individual ESCs wired to each motor. 4-in-1 ESCs are more common because they simplify wiring and save weight.

Key ESC specs:
- **Current rating**: Must handle peak motor draw. 35A-55A per motor is typical for 5" builds.
- **Firmware**: BLHeli_32 or AM32 are the current standards. Both support bidirectional DShot for RPM filtering.
- **Voltage rating**: Must match your battery (4S = 16.8V, 6S = 25.2V).

### [Propellers](/drive/propellers/)
Propellers convert motor rotation into thrust. They're described by diameter, pitch, and blade count (e.g., 5143 = 5.1" diameter, 4.3" pitch, 3 blades). Higher pitch means more aggressive bite and higher top speed but also more current draw. More blades increase grip and responsiveness at the cost of efficiency.

For freestyle flying, tri-blade (3-blade) props are the most popular. Racing setups sometimes use bi-blade props for efficiency.

## Signal Protocols

The flight controller communicates with ESCs using digital signal protocols. The current standard is **DShot**, which replaced older analog protocols like PWM and OneShot.

- **[PWM Signal](/drive/pwm-signal/)**: The original analog protocol. Slow (50Hz), requires calibration, no error checking. Obsolete for motor control but still used for servos.
- **[PPM Signal](/drive/ppm-signal/)**: Multiplexes multiple PWM channels onto a single wire. Also obsolete for ESC control.
- **DShot300/600**: Digital protocol. No calibration needed, includes CRC error checking, and supports bidirectional communication for RPM data. Use DShot300 as a safe default.

### [Brushed vs. Brushless](/drive/brushed-vs-brushless/)
Toy-grade drones use brushed motors. Everything in the FPV hobby uses brushless. Brushless motors are more efficient (85-90% vs 75-80%), produce more power for their size, last longer, and can be driven with precise digital protocols. The only place you might encounter brushed motors is in very cheap micro quads, and even those have largely moved to brushless.

## Choosing Your Drive System

For a first 5" freestyle build, a solid starting point:
- **Motors**: 2306 or 2207, 1750-1950KV for 6S (or 2400-2550KV for 4S)
- **ESC**: 4-in-1, 50A+ rated, BLHeli_32 or AM32 firmware
- **Props**: 5" tri-blade (Gemfan 51466 or HQProp 5.1x3.1x3 are popular choices)
- **Protocol**: DShot300 with bidirectional DShot enabled

This combination gives you enough power for aggressive freestyle while remaining efficient enough for 3-5 minute flight times on a 1300-1500mAh 6S battery.
