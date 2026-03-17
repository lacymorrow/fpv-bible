---
title: Tiny Whoops
description: Everything about tiny whoop drones — the smallest FPV aircraft.
---

Tiny whoops are the gateway drug of FPV. These palm-sized, ducted drones weigh under 30 grams and can fly safely indoors without destroying furniture, pets, or relationships.

## What is a Tiny Whoop?

A tiny whoop is a small ducted quadcopter, typically 65mm or 75mm motor-to-motor, with integrated prop guards that also function as aerodynamic ducts. The ducts increase thrust efficiency and protect the propellers from impacts.

The original "Tiny Whoop" was a Blade Inductrix fitted with an FPV camera — the name stuck and became the generic term for all small ducted FPV quads.

## Why Fly Whoops?

- **Indoor flying**: Fly year-round regardless of weather
- **Low risk**: Light enough that crashes don't break things (usually)
- **Cheap**: Complete setups under $100 for the drone
- **Quiet**: Won't bother neighbors
- **Skill building**: Tight spaces force precision flying
- **Social**: Whoop races are common at meetups and events
- **No registration required**: Under 250g (well under), no FAA registration needed in the US

## Components

### Frame
Whoop frames are injection-molded plastic (or carbon fiber for performance builds) with integrated ducts. Common sizes:
- **65mm**: Standard indoor whoop, 31mm props
- **75mm**: Slightly larger, more power, still indoor-friendly, 40mm props
- **85mm**: Pushes the "indoor safe" boundary, but more capable outdoors

### Motors
Tiny brushless motors, typically:
- **0603** or **0702** for 65mm (1S)
- **0802** for 65mm-75mm (1S-2S)
- **1102** or **1202** for 75mm (2S)
- **1303** for 85mm (2S)

KV ratings are high (10,000-25,000 KV) because the batteries are low voltage (1S = 3.7V-4.2V).

### Flight Controller + ESC
Most whoops use an AIO (all-in-one) board that combines the flight controller and 4 ESCs on a single PCB. Common form factors:
- **25.5x25.5mm** mounting
- **20x20mm** on some newer designs

Popular boards: BetaFPV F4 AIO, Happymodel CrazyBee, JHEMCU GHF411AIO.

### FPV Camera + VTX
Usually a tiny AIO camera/VTX combo. Runs on the same board voltage. Some use analog, some digital (Walksnail 1S, DJI O3 on heavier builds).

### Battery
- **1S (3.7V)**: Standard for 65mm whoops. 300-450mAh. Flight time: 3-5 minutes.
- **2S (7.4V)**: More power for 75mm+. 300-550mAh. Flight time: 3-6 minutes.

Connector types: BT2.0 (BetaFPV), PH2.0 (older, more resistance), GNB27 (Happymodel/GNB).

BT2.0 and GNB27 have lower resistance than PH2.0, meaning more power to the motors. If buying new, go with BT2.0 or GNB27.

### Propellers
Tiny 2 or 3-blade props:
- **31mm** for 65mm frames
- **40mm** for 75mm frames

They wear out fast from crashes — buy in bulk (packs of 16-32).

## Popular Whoops (2025-2026)

| Whoop | Size | Battery | FPV System | Notes |
|-------|------|---------|------------|-------|
| BetaFPV Meteor75 | 75mm | 1S/2S | Analog or ELRS | Solid all-rounder |
| Happymodel Mobula7 | 75mm | 1-2S | Multiple options | Long-running popular model |
| BetaFPV Cetus X | 65mm | 1S | DJI O3 Lite | Entry-level digital whoop |
| EMAX TinyHawk III | 75mm | 1S | Analog | Beginner-friendly |
| Happymodel Moblite6 | 65mm | 1S | Analog | Ultralight |

## Setup Tips

### Betaflight Settings for Whoops
- **Motor Protocol**: Usually DShot300 (some older AIOs need DShot150)
- **Idle percentage**: Raise slightly (5-6%) to prevent desync at low throttle
- **Rates**: Lower than a 5" quad — tight spaces need precision, not speed
- **Filters**: Stock filters are usually fine. Don't over-filter on whoops.

### Battery Tips
- Don't over-discharge — whoops are light and the batteries are tiny, so voltage sag is harsh
- Storage charge batteries you won't use within a day or two
- Buy lots of batteries — you'll go through 6-10 in a session easily

## Indoor Flying Tips

- **Remove obstacles**: Lamps, glasses, pets — clear the flight path
- **Start in a big room**: Living room or garage before attempting hallways
- **Fly low at first**: Ceiling fans and light fixtures are whoop killers
- **Turtle mode**: Set up "flip over after crash" — you'll use it constantly
- **Prop guards work**: Bouncing off walls is normal and expected
