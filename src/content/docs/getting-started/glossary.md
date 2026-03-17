---
title: Glossary
description: FPV drone terminology from A to Z.
---

FPV has a lot of jargon. This glossary covers the terms you'll encounter as you learn the hobby.

## A

- **Acro Mode** (also Rate Mode, Manual Mode): Flight mode with no self-leveling. The drone stays at whatever angle you put it. This is how most FPV pilots fly.
- **AIO (All-in-One)**: A board that combines multiple components (usually FC + ESC, or camera + VTX).
- **Angle Mode**: Self-leveling flight mode. Release the sticks and the drone returns to level. Training wheels for beginners.
- **Arm**: Enabling the motors so the drone can fly. Done via a switch on your radio.
- **AUW (All-Up Weight)**: Total weight of the drone ready to fly, including battery and camera.

## B

- **Backpack**: Some FPV systems (ELRS, HDZero) use a "backpack" module for wireless configuration — a small WiFi-enabled board on the VTX or goggles.
- **Betaflight**: The most popular open-source flight controller firmware for FPV drones.
- **Bidirectional DShot**: A motor protocol that sends data both ways — FC to ESC (speed commands) and ESC to FC (RPM telemetry). Enables RPM filtering.
- **BLHeli**: Firmware that runs on ESCs. BLHeli_32 (32-bit) and BLHeli_S (8-bit) are common versions.
- **BNF (Bind-and-Fly)**: A pre-built drone that comes ready to fly — just bind your receiver.
- **Blackbox**: Betaflight's flight data logger. Records gyro, PID, motor output, and RC input for analysis.

## C

- **Cinelifter**: A large drone (7-10"+) built to carry a cinema camera.
- **Cinewhoop**: A ducted drone designed for safe, smooth cinematic footage.
- **CRSF (Crossfire)**: TBS's proprietary long-range radio protocol.
- **Crossfire**: TBS radio system for long-range control. Uses the CRSF protocol.

## D

- **D-term (Derivative)**: The part of the PID controller that dampens overshooting. See [PID Tuning](/software/pid-tuning).
- **Deadcat**: A frame geometry where the rear motors are angled inward so props don't appear in the camera view.
- **Demag (Demagnetization) Compensation**: ESC setting that prevents motor sync issues caused by back-EMF.
- **Desync**: When an ESC loses sync with the motor, causing it to stutter or stop. Often happens at low throttle.
- **DShot**: A digital protocol between FC and ESC. DShot150/300/600 — higher numbers are faster.
- **DVR (Digital Video Recording)**: Recording of your FPV feed. On digital systems it's built-in; on analog you need an external DVR module.
- **Dynamic Idle**: Betaflight feature that adjusts idle speed dynamically to prevent desync at low throttle.

## E

- **EdgeTX**: Open-source firmware for radio transmitters. The actively developed fork of OpenTX.
- **ELRS (ExpressLRS)**: Open-source radio control protocol. Extremely low latency and long range.
- **ESC (Electronic Speed Controller)**: Drives a motor based on commands from the flight controller.
- **Expo (Exponential)**: A rate curve modifier that softens stick response near center.

## F

- **F4/F7/H7**: Flight controller processor types. F4 is older/budget, F7 is standard, H7 is high-end. Higher = faster, more features.
- **Failsafe**: What the drone does when it loses radio signal. Should be configured before flying.
- **FC (Flight Controller)**: The brain of the drone. Reads sensors and controls motors.
- **FF (Feedforward)**: A PID controller component that reacts to stick movement speed rather than error.
- **Freestyle**: Acrobatic FPV flying focused on creative tricks and flowing lines.
- **FRIA (FAA-Recognized Identification Area)**: Designated areas where Remote ID is not required.

## G

- **GPS Rescue**: Betaflight feature that uses GPS to fly the drone home if signal is lost.
- **Gyro (Gyroscope)**: Sensor on the FC that measures rotation rate. The most critical sensor for flight.

## H

- **HDZero**: A low-latency digital FPV system popular for racing.
- **Horizon Mode**: A blend of Angle and Acro — self-levels at small stick inputs, allows flips at full stick.

## I

- **I-term (Integral)**: The part of the PID controller that corrects persistent drift. See [PID Tuning](/software/pid-tuning).
- **iNav**: A Betaflight fork focused on GPS navigation and autonomous flight.

## J

- **Jello**: Vibration artifacts visible in video footage. Usually caused by vibrations transferring from motors to the camera. Fix with soft-mounting or balanced props.

## K

- **KV (RPM per Volt)**: Motor rating indicating how fast it spins per volt applied, with no load. Higher KV = faster spin, lower torque. Lower KV = slower spin, higher torque. Pair high KV with small props, low KV with large props.

## L

- **LAANC**: FAA system for getting near-instant airspace authorization near airports.
- **Li-Ion (Lithium-Ion)**: Battery chemistry with higher energy density than LiPo but lower discharge rate. Used for long-range builds.
- **LiPo (Lithium Polymer)**: The standard battery chemistry for FPV drones. High discharge rate, good energy density.
- **Long Range**: FPV builds optimized for maximum distance and flight time.
- **LQ (Link Quality)**: A metric showing radio link reliability. 100% = all packets received.
- **LRC (Long Range Configuration)**: Lower packet rates on ELRS for maximum range.

## M

- **mAh (Milliamp Hours)**: Battery capacity. Higher mAh = more energy = longer flight (but heavier).
- **MSP (MultiWii Serial Protocol)**: Communication protocol between Betaflight and configurator software.
- **MultiGP**: The largest FPV drone racing league.
- **Mulligan**: Getting a re-do after a crash in a race (depends on race rules).

## N

- **Naked GoPro**: A GoPro with the housing removed to save weight. Common in freestyle builds.
- **ND Filter (Neutral Density)**: An optical filter that reduces light, allowing slower shutter speeds for cinematic motion blur.

## O

- **OSD (On-Screen Display)**: Information overlaid on your FPV video feed — battery voltage, RSSI, flight time, etc.
- **OpenTX**: Open-source radio firmware. EdgeTX is the current actively-developed fork.

## P

- **P-term (Proportional)**: The main PID correction force. Higher P = snappier response. See [PID Tuning](/software/pid-tuning).
- **Part 107**: FAA certification required for commercial drone operations in the US.
- **PDB (Power Distribution Board)**: Distributes battery power to ESCs and other components. Largely replaced by integrated designs.
- **PID**: Proportional-Integral-Derivative controller. The algorithm that makes your drone fly stable.
- **Props In/Out**: Motor rotation direction. Props Out (motors spin outward at front) is the modern default.
- **Propwash**: Turbulent air created by spinning propellers. Causes oscillation when a drone descends through its own wake.
- **PNP (Plug-and-Play)**: A pre-built drone sold without a receiver (you add your own).

## R

- **Rate**: How fast the drone rotates in degrees per second at a given stick position.
- **Remote ID**: FAA requirement for drones to broadcast identification and location.
- **RPM Filtering**: Betaflight feature that uses motor RPM data to precisely filter out motor-frequency noise.
- **RSSI (Received Signal Strength Indicator)**: A measure of radio signal strength. Monitor in OSD.
- **RTF (Ready-to-Fly)**: A package that includes everything needed to fly — drone, radio, goggles.

## S

- **SBUS**: A serial protocol from FrSky for connecting receiver to FC. Being replaced by CRSF/ELRS.
- **Smoke Stopper**: An inline current limiter used during first power-up to prevent damage from wiring mistakes.
- **Stack**: FC and ESC mounted together on standoffs. Most builds use a "stack" configuration.
- **Sub-250**: A drone build under 250g total weight, which avoids FAA registration requirements.

## T

- **Tiny Whoop**: A small ducted FPV drone (65-85mm) designed for indoor flying.
- **Toothpick**: An ultralight 2.5-3" outdoor drone on a minimal frame.
- **TPU (Thermoplastic Polyurethane)**: A flexible 3D printing material used for camera mounts, antenna holders, and other FPV accessories.
- **TRUST**: The Recreational UAS Safety Test. Required for recreational drone flyers in the US.
- **Turtle Mode**: "Flip over after crash" — a Betaflight mode that reverses motors to flip the drone upright.

## U

- **UART (Universal Asynchronous Receiver/Transmitter)**: Serial communication ports on an FC, used to connect receivers, GPS, VTX control, etc.
- **UFL**: A tiny coaxial connector used to attach antennas to VTXs.

## V

- **VLOS (Visual Line of Sight)**: The legal requirement to see your drone with unaided eyes while flying.
- **VTX (Video Transmitter)**: Transmits the FPV camera's video signal to the goggles.
- **VRX (Video Receiver)**: Receives the VTX signal. Usually built into goggles, or a separate module.

## W

- **Walksnail**: A digital FPV system by Caddx. Also known as Avatar.
- **Whoop**: Short for Tiny Whoop. Any small ducted FPV drone.
