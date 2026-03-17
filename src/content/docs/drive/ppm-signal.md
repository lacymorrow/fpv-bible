---
title: PPM Signal
description: Pulse Position Modulation — a legacy RC signal protocol.
---

PPM (Pulse Position Modulation) is an older method of transmitting multiple RC channels over a single wire. While largely replaced by digital protocols like SBUS and CRSF, understanding PPM helps when working with legacy equipment.

## How PPM Works

PPM encodes multiple channels as a series of pulses with varying positions within a fixed time frame:

1. A sync pulse marks the start of a frame
2. Each channel is represented by the time gap between successive pulses
3. A typical gap of 1000-2000µs represents the channel value (1000µs = minimum, 1500µs = center, 2000µs = maximum)
4. After all channels are sent, a long sync gap resets the frame

A standard PPM frame transmits 8 channels at approximately 50Hz (one complete update every 20ms).

## PPM vs. PWM

| Feature | PPM | PWM |
|---------|-----|-----|
| Wires needed | 1 (plus ground and power) | 1 per channel |
| Channels | 8 on a single wire | 1 per wire |
| Update rate | ~50Hz | ~50Hz |
| Latency | Moderate (sequential) | Low (parallel) |

PPM was an improvement over PWM for multi-channel transmission because it reduced wiring from 8+ signal wires down to 1.

## Why PPM Is Outdated

Modern serial protocols (SBUS, CRSF, IBUS) have replaced PPM because:
- **Higher update rates**: CRSF runs up to 1000Hz vs PPM's 50Hz
- **More channels**: CRSF supports 12-16 channels easily
- **Lower latency**: Serial protocols are significantly faster
- **Error checking**: Digital protocols include checksums to detect corrupted data
- **Bidirectional**: CRSF supports telemetry on the same connection

## When You Might Still See PPM

- **Very old receivers**: Some legacy FrSky, FlySky, and Spektrum receivers output PPM
- **DIY projects**: PPM is simple to generate and decode, making it easy for Arduino-based projects
- **Trainer ports**: Some radios use PPM on the trainer/buddy-box port
- **Simulator adapters**: Some older sim dongles use PPM input

## Using PPM in Betaflight

If you must use a PPM receiver:
1. Connect the PPM signal wire to the FC's dedicated PPM input pad (not a UART)
2. In Betaflight Configuration tab, set Receiver Mode to "PPM"
3. Check the Receiver tab to verify channels respond

Note: With PPM's 50Hz update rate, stick response will feel noticeably laggy compared to CRSF/ELRS at 500-1000Hz. For any new build, use a modern protocol instead.
