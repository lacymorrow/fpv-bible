---
title: Installing the Receiver
description: Mounting and wiring the radio receiver on your build.
---

The receiver (RX) is small but its placement and antenna routing have a significant impact on your radio link quality.

## Mounting Location

### Where to Put It
- **Inside the stack**: Some pilots tuck the receiver between the ESC and FC or on top of the FC. Compact but can pick up electrical noise.
- **On top of the FC**: Double-sided tape on the FC's top surface. Easy access.
- **Under the top plate**: Protected from crashes, antennas route out the back.
- **On the rear of the frame**: Common for diversity receivers with two antennas. Good separation from electronics.

### Key Considerations
- **Away from the VTX**: The VTX transmits strong RF that can desensitize the receiver
- **Away from motor wires and ESC**: Electrical noise reduces receiver sensitivity
- **Accessible**: You may need to press the bind button or update firmware
- **Protected**: Inside the frame is better than exposed on top where crashes can damage it

### Mounting Methods
- **Double-sided foam tape**: Most common. Holds well, easy to remove.
- **Hot glue**: More permanent. A dab on the corners holds it securely.
- **Zip tie**: Through mounting holes if the receiver has them.
- **Conformal coat the receiver**: Before mounting, coat the receiver PCB with conformal coating to protect against moisture and shorts from conductive debris.

## Wiring

### ELRS / Crossfire (CRSF Protocol)
Four wires:
| Wire | Connect To |
|------|-----------|
| **5V** | FC 5V pad |
| **GND** | FC GND pad |
| **TX** (receiver transmit) | FC UART **RX** pad |
| **RX** (receiver receive) | FC UART **TX** pad |

Note the crossover: receiver TX goes to FC RX, and receiver RX goes to FC TX. This is because one device's transmit is the other device's receive.

### SBUS (FrSky)
Three wires:
| Wire | Connect To |
|------|-----------|
| **5V** | FC 5V pad |
| **GND** | FC GND pad |
| **SBUS** | FC UART RX pad (SBUS uses inverted serial) |

### Which UART?
Choose an available UART on your FC. Check the FC's documentation for which pads correspond to which UART number. Most FCs label them (TX1/RX1, TX2/RX2, etc.).

In Betaflight Configurator's **Ports tab**, enable "Serial RX" on the UART number you wired the receiver to.

## Antenna Routing

Antenna placement is critical for good radio link performance.

### Single Antenna Receivers
- Route the antenna away from the frame, pointing rearward and upward
- Keep at least 1-2cm of the antenna element past the carbon fiber frame
- Avoid running the antenna parallel to carbon fiber (it blocks RF)

### Diversity Receivers (Two Antennas)
- Route antennas at approximately **90° to each other** (e.g., one pointing up, one pointing sideways)
- This provides coverage in all orientations
- Use TPU antenna tubes zip-tied to the rear standoffs

### Antenna Protection
- **TPU tubes**: 3D-printed tubes that hold antennas at the correct angle and protect them in crashes
- **Heat shrink**: Over the base of wire antennas for strain relief
- **Hot glue**: A dab at the antenna solder joint prevents the wire from breaking off in crashes

### What to Avoid
- Don't coil excess antenna wire — it creates interference patterns
- Don't tape the antenna flat against the carbon fiber frame — carbon blocks the signal
- Don't route antennas near the VTX antenna — interference
- Don't let antennas dangle in the prop path — they'll get cut

## Betaflight Configuration

After physical installation:

1. **Ports tab**: Enable "Serial RX" on the correct UART
2. **Configuration tab**: 
   - Receiver Mode: Serial
   - Serial Receiver Provider: CRSF (for ELRS/Crossfire) or SBUS (for FrSky)
3. **Receiver tab**: 
   - Verify all channels respond to stick movements
   - Check channel map (AETR for CRSF, TAER for some SBUS setups)
   - All channels should center at ~1500 and range ~1000-2000

## Binding

If using binding phrase (ELRS), the TX and RX auto-connect when powered on with matching phrases. No manual binding needed.

For manual binding:
1. Power on the RX in bind mode (method varies: hold button, 3 quick power cycles, etc.)
2. Put your TX in bind mode
3. Wait for connection confirmation (usually LED changes from flashing to solid)
4. Power cycle both — they should reconnect automatically

→ See [ExpressLRS](/control/elrs) for ELRS-specific binding and setup.
