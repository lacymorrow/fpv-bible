---
title: Failsafe
description: What your drone does when it loses radio signal.
---

Failsafe is what happens when your drone loses communication with your radio transmitter. This is not optional configuration — an unconfigured failsafe means your drone will either hover indefinitely, fly away, or drop from the sky when signal is lost.

Configure failsafe **before your first flight**.

## Why You Lose Signal

Signal loss can happen from:
- **Range**: Flying too far from your transmitter
- **Obstacles**: Buildings, hills, or terrain between you and the drone
- **Interference**: Other radio equipment, power lines, or electronic noise
- **Equipment failure**: Receiver antenna damage, TX battery dying, connection issue
- **Orientation**: Antenna nulls (positions where the antenna has minimal radiation)

## Failsafe Stages

Betaflight uses a two-stage failsafe system:

### Stage 1: Signal Loss Detection
When the FC stops receiving valid packets from the receiver:
1. The FC holds the last known stick positions for a configurable period (default: 0.3 seconds)
2. This covers brief signal dropouts (interference blips, antenna null passing through)
3. If signal returns within this window, flying continues normally

### Stage 2: Failsafe Action
If signal doesn't return within the Stage 1 timeout, Stage 2 activates — the actual failsafe behavior you configured.

## Failsafe Options

### Drop (Motors Off)
The simplest option. Motors cut immediately and the drone falls.

**Pros:** Predictable — the drone stops where it is. No risk of flyaway.
**Cons:** The drone falls like a rock. Can damage the quad and anything it lands on.
**Best for:** Flying over open fields where a falling drone is safe.

### Land
The drone attempts to descend at a steady rate and land.

**Pros:** Controlled descent, less impact damage.
**Cons:** Can't avoid obstacles during descent. May drift in wind. No GPS correction.
**Best for:** Open areas, as a slightly gentler alternative to drop.

### GPS Rescue (Recommended if GPS Equipped)
The drone uses GPS to fly back to the takeoff point, descend, and either land or hover at low altitude.

**Pros:** Drone comes back to you. Best option for recovering your quad.
**Cons:** Requires GPS module with good satellite lock. GPS isn't perfect — expect ~3-5m accuracy. Can behave unpredictably if GPS lock is poor.
**Best for:** Any build with GPS. The best failsafe for long range.

### GPS Rescue Configuration
In Betaflight:
1. **Enable GPS Rescue** in the Failsafe tab
2. Set **Return Altitude**: Height the drone will climb to before returning (e.g., 30-50m to clear obstacles)
3. Set **Ground Speed**: How fast it flies home (4-8 m/s is reasonable)
4. Set **Landing Altitude**: Height at which it descends and disarms
5. Set **Minimum Satellites**: Don't arm without sufficient GPS lock (8+ satellites recommended)
6. Set **Sanity Checks**: Enable to prevent GPS Rescue from activating with bad GPS data

**Test GPS Rescue** before relying on it:
1. Fly to a moderate distance (50-100m) and altitude
2. Turn off your transmitter
3. Observe the drone's behavior
4. Be ready to turn your transmitter back on if it behaves unexpectedly
5. Do this over an open area with no people

## Receiver Failsafe vs FC Failsafe

There are two levels of failsafe:

### Receiver-Level Failsafe
The receiver itself may have failsafe behavior (set during binding or configuration). Options vary:
- **No pulses**: Receiver stops sending data to the FC. The FC then triggers its own failsafe. **(Preferred)**
- **Hold**: Receiver sends the last known stick positions. **Dangerous** — the drone continues flying in the last commanded direction. Avoid this setting.
- **Preset values**: Receiver sends pre-configured values (e.g., throttle at zero). Better than hold but not as clean as no-pulses.

**Best practice:** Set the receiver to "no pulses" mode (ELRS does this by default). Let the FC handle all failsafe logic.

### FC-Level Failsafe
This is what you configure in Betaflight. It activates when the FC detects that the receiver has stopped sending valid data (triggered by the receiver's "no pulses" mode).

## Configuration in Betaflight

1. Go to the **Failsafe** tab
2. **Stage 1**: Set the guard time (how long to wait before Stage 2). Default 0.3s is fine.
3. **Stage 2**:
   - Select your failsafe behavior (Drop, Land, or GPS Rescue)
   - Set the timeout for how long Stage 2 runs before disarming
4. **GPS Rescue** (if selected):
   - Configure return altitude, speed, and landing parameters
   - Enable sanity checks

## Failsafe Testing

:::danger
Always test failsafe before relying on it. Test over soft ground, at low altitude, away from people.
:::

1. **Props on, low hover**: Arm and hover at 2-3 feet
2. **Turn off transmitter**: The drone should execute your configured failsafe behavior
3. **Observe**: Does it cut motors (drop)? Descend steadily (land)? Return to launch point (GPS Rescue)?
4. **Turn transmitter back on**: You should immediately regain control
5. **Repeat at slightly higher altitude** once you trust the basic behavior

## Tips

- **GPS Rescue is the best failsafe** if you have GPS. Even for freestyle, a GPS module + GPS Rescue is cheap insurance.
- **Don't rely on "hold"**: Receiver-level hold means your drone flies away in the last commanded direction until it runs out of battery. This is how flyaways happen.
- **Check failsafe after firmware updates**: Betaflight updates can reset configuration. Always verify.
- **Battery failsafe**: In addition to radio failsafe, set a low-voltage warning in the OSD so you land before the battery dies. A dead battery in flight is effectively a "drop" failsafe.
