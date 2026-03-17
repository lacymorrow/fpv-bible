---
title: Anatomy of a Quad
description: Every component on an FPV quadcopter, explained.
---

An FPV quadcopter is made up of several systems working together. Understanding what each part does and how they connect helps you build, repair, and troubleshoot your quad. Here's every major component, roughly in the order you'd assemble them.

## The Frame

The [frame](/frame/overview/) is the skeleton. Carbon fiber plates bolted together with aluminum standoffs. It holds everything, takes the hits, and determines your quad's size class. Frames are measured diagonally motor-to-motor. A 5" quad typically has a 220-250mm frame.

## Power System

### Battery
A [LiPo battery](/power/battery/) provides all the power. Most 5" quads run 6S (22.2V nominal). The battery mounts on top or bottom of the frame, secured with a strap. It's the heaviest single component on the quad.

### Power Distribution
Battery power reaches the ESCs through a [power distribution board (PDB)](/power/pdb/) or, more commonly on modern builds, through the 4-in-1 ESC which handles distribution internally. The ESC or PDB also provides regulated lower voltages (5V, 9V) for the flight controller and other electronics.

## Drive System

### Electronic Speed Controllers (ESCs)
[ESCs](/drive/escs/) control motor speed. They receive digital commands ([DShot](/drive/pwm-signal/)) from the flight controller and switch battery power to the motor windings at the right timing and speed. Most builds use a single 4-in-1 ESC board mounted in the electronics stack.

### Motors
Four [brushless motors](/drive/motors/) spin the [propellers](/drive/propellers/). They're bolted to the frame arms. Two spin clockwise, two counter-clockwise to cancel out rotational torque. Motor size (stator dimensions) and KV (RPM per volt) determine how much power and torque they produce.

### Propellers
[Propellers](/drive/propellers/) generate thrust. Defined by diameter, pitch, and blade count (e.g., 5143 = 5.1" diameter, 4.3" pitch, 3 blades). They're the cheapest component and the most frequently replaced since they break on every hard crash.

## Flight Control

### Flight Controller (FC)
The [flight controller](/building/flight-controller/) is the brain. A small circuit board running firmware (usually Betaflight) that reads gyroscope data thousands of times per second and adjusts motor speeds to keep the quad stable and responsive. It also manages the OSD, receives commands from the radio receiver, and provides UART ports for peripherals.

The FC mounts in the center of the electronics stack (typically above the ESC) on vibration-dampening grommets or silicone standoffs.

### Receiver (RX)
The [receiver](/control/receiver/) picks up commands from your radio transmitter. It connects to the FC via a UART serial connection. Modern receivers ([ELRS](/control/elrs/), Crossfire) are tiny and mount anywhere with space, often zip-tied to a standoff or tucked inside the frame.

## FPV Video

### FPV Camera
The [FPV camera](/fpv/camera/) mounts at the front of the frame, angled upward. It's optimized for low latency and fast light response rather than recording quality. On analog systems, it outputs composite video. On digital systems (DJI, HDZero, Walksnail), it connects directly to the air unit.

### Video Transmitter (VTX)
The [VTX](/fpv/vtx/) broadcasts the camera feed to your goggles. On analog systems, it's a separate module in the electronics stack. On digital systems, the VTX is the air unit (camera plugs directly into it). VTX power (25mW to 1W+) determines video range.

### Antenna
The VTX [antenna](/fpv/antenna/) should point upward and away from carbon fiber. Antenna choice and placement affect video range more than VTX power. Circular polarized antennas (RHCP or LHCP) are standard.

## On the Ground

### Radio Transmitter (TX)
Your [radio transmitter](/control/radio-transmitter/) is the controller in your hands. Sticks send roll, pitch, yaw, and throttle commands to the quad's receiver. Also provides switches for arming, flight mode changes, and other functions.

### Goggles
FPV [goggles](/fpv/goggles/) receive the video feed and display it on screens in front of your eyes. They range from budget box-style ($50-80) to slim OLED units ($400-650). This is the most personal gear choice since comfort and screen quality directly affect your experience.

## Optional Extras

- **[LEDs](/power/leds/)**: Programmable strips for visibility and style
- **[Telemetry](/control/telemetry/)**: Flight data sent back to your transmitter
- **GPS module**: Enables return-to-home failsafe and position hold
- **Action camera**: GoPro or similar for HD recording (separate from the FPV camera)
- **Buzzer**: Helps locate crashed quads by beeping on command
- **Capacitor**: Smooths battery voltage spikes, reduces electrical noise
