---
title: Flight Safety
description: Safe flying practices for FPV drone pilots.
---

An FPV drone is a high-speed projectile. A 5" quad at full throttle weighs 600-700g and travels 80-120+ mph. That can cause serious injury or property damage. Safe flying isn't just about following rules — it's about protecting yourself, bystanders, and the hobby's reputation.

## Pre-Flight Checklist

Before every session:

1. **Props tight?** Loose props fly off mid-flight. Check every prop nut.
2. **Battery secure?** A battery ejecting mid-flight is a guaranteed crash.
3. **Antenna connected?** Flying without a VTX antenna can damage the VTX. Also check your goggle antennas.
4. **Frame integrity?** Check for cracked arms or loose screws from previous crashes.
5. **Motor check?** Spin each motor by hand — they should spin freely without grinding.
6. **Failsafe configured?** Your drone should know what to do if it loses radio signal.
7. **Airspace clear?** Check apps like B4UFLY. Know if you're in controlled airspace.
8. **Battery charged?** Both drone battery and goggle/radio batteries.
9. **Video feed working?** Power up and verify you see a clear FPV feed.

## Flying Safely

### Location Awareness
- **Open areas for learning**: Large fields with no people, cars, or structures nearby
- **Know your outs**: Before flying near structures, know where you'll go if something fails
- **Wind check**: Strong wind makes control harder, especially for beginners. If trees are swaying hard, consider not flying.
- **Altitude awareness**: Higher = more potential energy in a fall, and more chance of entering controlled airspace

### People and Property
- **Never fly over people** who haven't consented and understand the risk
- **Keep distance from bystanders**: Minimum 30 feet, more is better
- **Don't fly over roads or cars**: A drone falling onto a car's windshield at highway speed is catastrophic
- **No flying near emergency response**: Stay away from fire, ambulance, and police operations
- **Dogs and wildlife**: Animals are startled by drones. Keep distance.

### The Spotter
When flying FPV (with goggles), you can't see the real world. A **spotter** (visual observer) is someone who:
- Watches the drone and surrounding airspace with unaided eyes
- Alerts you to incoming aircraft, people entering the area, or other hazards
- Can communicate with you verbally
- Is legally recommended/required in many jurisdictions

### Arming Discipline
- **Never arm indoors** with props on (unless it's a tiny whoop)
- **Never arm while anyone is near the drone**: Establish a clear safety perimeter
- **Disarm immediately** after landing — don't leave your quad armed on the ground
- **Use a dedicated arm switch**: Not a position that can be accidentally toggled
- **Throttle at zero before arming**: Some firmware requires this; it should be habit regardless

### Failsafe
Configure failsafe **before your first flight**:
- **Drop**: Motors cut immediately. Simple, but the drone falls like a rock.
- **GPS Rescue** (Betaflight): Drone attempts to fly home. Best option if GPS is equipped.
- **Land**: Drone attempts to land in place.

Test failsafe by turning off your radio while hovering low over soft ground. Verify the behavior matches what you configured.

→ See [Failsafe](/control/failsafe)

## Emergency Procedures

### Loss of Video
If your FPV feed goes black or static:
1. **Don't panic.** The drone is still flying.
2. **Cut throttle immediately** if you're over a safe area — let it fall rather than fly blind into something.
3. If you have a spotter, they can guide you to a safe landing.
4. If you have GPS Rescue, activate it.

### Flyaway
A flyaway is when the drone stops responding to inputs and flies away on its own. Usually caused by a receiver failure, interference, or firmware bug.
1. Try failsafe (turn off radio to trigger failsafe behavior)
2. If GPS Rescue is configured, it should activate
3. Note the direction it flew — you may need to track it down

### Motor Failure
If a motor fails mid-flight, the drone will spin and lose altitude rapidly. Some FCs support "motor lost" recovery (flying on 3 motors), but typically:
1. Cut throttle
2. Accept the crash — focus on steering away from people/property
3. Inspect all components after retrieving

## Crash Recovery

After every crash:
1. **Disarm** (if the drone is still armed)
2. **Inspect battery** — look for dents, punctures, puffing
3. **Inspect frame** — cracked arms, loose standoffs
4. **Inspect motors** — spin by hand, check for bent shafts or debris
5. **Inspect props** — cracked or chipped props should be replaced
6. **Check electronics** — look for loose wires, disconnected antennas

If the battery is damaged, remove it carefully and place it on a non-flammable surface.

## Etiquette

- **Don't be the person who gets drone flying banned** at a location. Fly responsibly.
- **Pick up your trash** — broken props, zip ties, battery wraps
- **Talk to curious bystanders** — educate people about the hobby positively
- **Yield to full-scale aircraft** — always. No exceptions.
- **Respect noise** — drones are loud. Don't fly early morning in residential areas.
