---
title: PWM Signal
description: Pulse Width Modulation - how speed commands are encoded as signals.
---

Pulse Width Modulation (PWM) is a fundamental signal type in electronics. In the context of FPV quads, PWM has been used to communicate speed commands to ESCs, control servos, and dim LEDs. While it has been largely replaced by digital protocols like DShot for motor control, understanding PWM helps you work with older equipment and grasp how ESC communication evolved.

## How It Works

A PWM signal rapidly switches between high voltage (typically 3.3V or 5V) and low voltage (0V/ground). The signal has a fixed frequency, and within each cycle, the ratio of time spent "high" versus the total cycle time is called the **duty cycle**.

- **0% duty cycle** = signal is always low (off)
- **50% duty cycle** = signal is high half the time
- **100% duty cycle** = signal is always high (full on)

For ESC motor control, the duty cycle maps to a throttle value. The ESC reads the width of each high pulse to determine how fast the motor should spin.

### The Standard RC PWM Signal

Traditional RC PWM (used since the earliest days of radio control) uses a specific convention:

- **Signal frequency**: 50Hz (one pulse every 20ms)
- **Minimum throttle**: 1000 microsecond pulse width
- **Maximum throttle**: 2000 microsecond pulse width
- **Center/idle**: 1500 microsecond pulse width

So within each 20ms frame, the ESC looks at how long the signal stays high. A 1ms high pulse means zero throttle. A 2ms high pulse means full throttle. Everything in between is proportional.

This 50Hz update rate means the flight controller can only send a new throttle command 50 times per second. For early drones this was fine, but as PID loop rates increased to 4kHz and 8kHz, the slow PWM signal became a bottleneck.

## PWM Improvements: OneShot and MultiShot

As FPV racing pushed the need for faster ESC response, several improved versions of PWM appeared:

### OneShot125

Same concept as standard PWM but with shorter pulse widths (125-250 microseconds) and no fixed frame rate. The FC sends a new pulse at the end of each PID loop iteration, so the update rate matches the FC loop rate (up to 4kHz). This was a significant latency improvement.

### OneShot42

Further compressed pulse widths (42-84 microseconds) for even faster communication. Allowed update rates beyond 4kHz.

### MultiShot

The fastest analog protocol, with pulse widths of 5-25 microseconds. Supported update rates up to 32kHz. MultiShot was the pinnacle of analog ESC protocols before digital protocols took over.

## The Shift to DShot

All of the PWM-based protocols share fundamental limitations:

1. **Analog signal** - Susceptible to electrical noise, which can cause ESC desyncs or incorrect throttle readings.
2. **Calibration required** - Each ESC needs to learn what "minimum" and "maximum" pulse widths are. If calibration drifts, motors spin unevenly.
3. **No error checking** - If noise corrupts a pulse, the ESC has no way to know. It just interprets whatever it receives.
4. **One-directional** - The FC sends commands but gets nothing back from the ESC.

**DShot** (Digital Shot) solves all of these:

- **Digital signal** - Sends actual numeric values (0-2047) instead of pulse widths. Immune to analog noise.
- **No calibration** - 0 is zero throttle, 2047 is full throttle. Every ESC interprets it the same way.
- **CRC error checking** - Each packet includes a checksum. If the data is corrupted, the ESC ignores it rather than spinning to a wrong speed.
- **Bidirectional option** - With bidirectional DShot, the ESC sends RPM data back to the FC. This enables RPM filtering in Betaflight, which dramatically reduces motor noise in the gyro signal.

Common DShot speeds:
- **DShot150** - 150kbit/s. Slow, rarely used.
- **DShot300** - 300kbit/s. The safe default for most builds. Works with virtually all ESCs.
- **DShot600** - 600kbit/s. Faster updates but requires a reliable signal path. Use if your ESC supports it cleanly.

## PWM in Servo Control

While DShot has replaced PWM for motor control, PWM is still the standard for servo control. Servos on camera gimbals, fixed-wing control surfaces, and antenna trackers all use the traditional 50Hz PWM signal with 1000-2000 microsecond pulse widths.

If you are building a fixed-wing FPV plane or a tilt-rotor, you will still configure PWM outputs in Betaflight for your servos.

## PWM for LED Control

PWM is also used to control LED brightness. By switching an LED on and off thousands of times per second and varying the duty cycle, you can smoothly dim from 0% to 100% brightness. This is how programmable LED strips (WS2812B and similar) on FPV quads achieve color mixing and effects.

## Practical Summary

| Protocol | Type | Speed | Calibration | Error Check | Direction |
|----------|------|-------|-------------|-------------|-----------|
| Standard PWM | Analog | 50Hz | Yes | No | One-way |
| OneShot125 | Analog | Up to 4kHz | Yes | No | One-way |
| OneShot42 | Analog | Up to 8kHz | Yes | No | One-way |
| MultiShot | Analog | Up to 32kHz | Yes | No | One-way |
| DShot300 | Digital | 300kbit/s | No | Yes (CRC) | Bidirectional |
| DShot600 | Digital | 600kbit/s | No | Yes (CRC) | Bidirectional |

For any new build, use **DShot300** as your ESC protocol. Enable **bidirectional DShot** if your ESCs support it (most BLHeli_32 and AM32 ESCs do) to take advantage of RPM filtering. You should only deal with PWM if you are working with servos or maintaining very old equipment.
