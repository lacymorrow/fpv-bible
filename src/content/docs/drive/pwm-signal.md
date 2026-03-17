---
title: PWM Signal
description: Pulse Width Modulation — how speed commands are encoded as signals.
---

Pulse Width Modulation (PWM) is a type of digital signal used extensively in electronics. In the context of FPV quads, PWM signals are used to communicate speed commands to ESCs.

> Pulse width modulation is used in a variety of applications including sophisticated control circuitry. A common way we use them is to control dimming of RGB LEDs or to control the direction of a servo motor.
>
> *via [SparkFun](https://learn.sparkfun.com/tutorials/pulse-width-modulation)*

## How It Works

A PWM signal rapidly switches between high and low voltage. The ratio of time spent "high" vs. the total cycle time (the **duty cycle**) encodes the desired value — in this case, motor speed.

## In Modern Quads

PWM as an ESC protocol has been largely replaced by **DShot** (a digital protocol) which is faster, more reliable, and doesn't require calibration. You'll still encounter PWM in servo control and older gear.
