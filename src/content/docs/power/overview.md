---
title: Power System
description: Batteries, power distribution, and voltage regulation — keeping your quad in the air.
---

The power system handles everything from storing energy to delivering it cleanly to every component on your quad. It's the foundation that everything else depends on. A bad power system causes issues that look like problems with other components: video noise, FC brownouts, motor desyncs, and random failsafes.

## Components

### [Battery (LiPo)](/power/battery/)
Lithium Polymer batteries are the energy source for FPV quads. They're chosen for their high discharge rate (they can dump a lot of current quickly) and favorable power-to-weight ratio. LiPo batteries are described by cell count (S), capacity (mAh), and discharge rate (C).

Common configurations:
- **4S (14.8V nominal)**: Standard for budget builds, lighter quads, and beginners
- **6S (22.2V nominal)**: Current standard for 5" freestyle and racing. Lower current draw for the same power output means cooler ESCs and motors.
- **1S (3.7V)**: Tiny Whoops and micro quads
- **2S (7.4V)**: Some micro builds and toothpick quads

### [Power Distribution](/power/pdb/)
Power from the battery needs to reach four ESCs, the flight controller, the VTX, the camera, and any other accessories. On modern builds, the 4-in-1 ESC handles most power distribution, with the FC providing regulated voltage outputs (5V, 9V) for accessories.

### [Voltage Regulators](/power/regulators/)
Many components can't handle raw battery voltage. The flight controller, VTX, and camera typically need 5V or 9V. BECs (Battery Eliminator Circuits) built into the FC or ESC step down the battery voltage. External regulators are sometimes added for high-draw accessories or to isolate noisy components.

### [Charging](/power/charging/)
LiPo batteries require balanced charging with a dedicated charger. Never charge unattended. Never charge damaged or puffed batteries. A good charger (ISDT, HOTA, ToolkitRC) is a safety-critical investment.

## Key Concepts

### Cell Count and Voltage
Each LiPo cell has a nominal voltage of 3.7V and a full charge of 4.2V. Cells are connected in series to increase voltage:

| Config | Nominal | Full Charge | Storage | Min Safe |
|--------|---------|-------------|---------|----------|
| 1S | 3.7V | 4.2V | 3.85V | 3.5V |
| 4S | 14.8V | 16.8V | 15.4V | 14.0V |
| 6S | 22.2V | 25.2V | 23.1V | 21.0V |

Never discharge below 3.5V per cell under load. Consistently deep-discharging batteries shortens their lifespan dramatically.

### C Rating and Current Draw
The C rating tells you the maximum safe continuous discharge rate. A 1500mAh 100C battery can theoretically deliver 150A continuously. In practice, C ratings are often inflated by manufacturers. Buy from reputable brands (CNHL, Tattu, GNB, RDQ) and don't trust marketing numbers over real-world reviews.

### [Serial vs. Parallel Charging](/power/serial-vs-parallel/)
Parallel charging lets you charge multiple same-voltage batteries simultaneously, saving time. It requires a parallel charging board and careful matching of battery voltages before connecting. Done correctly, it's a significant time saver. Done carelessly, it's a fire risk.

### [LEDs](/power/leds/)
Programmable LED strips (WS2812B) add visibility and style. They draw power from a 5V pad and receive data over a signal wire from the FC. Betaflight supports various LED patterns and can tie colors to flight mode, warnings, or other telemetry.

## [Battery Safety](/safety/lipo-safety/)

LiPo batteries store significant energy and can catch fire if mishandled. Essential safety practices:
- **Charge in a fireproof bag or container**, never unattended
- **Inspect before every charge**: Puffed, dented, or punctured batteries get retired
- **Store at storage voltage** (3.85V/cell) when not flying within 24 hours
- **Dispose properly**: Discharge fully into saltwater, then recycle at a battery drop-off
- **Never charge immediately after flying**: Let batteries cool to room temperature first (15-20 minutes minimum)

A LiPo fire burns hot, fast, and is difficult to extinguish. A $15 fireproof charging bag and basic discipline prevent house fires.
