# Detection Systems

Hypas Anti-Cheat uses layered protection. The categories below are intentionally high level and do not disclose bypass-sensitive logic.

## Event firewall

The event firewall monitors and controls suspicious server-event activity.

A secure server should not trust a client request merely because the event exists. Sensitive actions should be validated using server-side state, permissions, location, workflow and reasonable limits.

## Honeypot protection

Honeypot events are defensive traps that legitimate resources should never call.

Their names and implementation are not documented publicly.

## Entity protection

Entity protection monitors abusive creation of objects, wagons, pedestrians, animals and other networked entities.

Useful context includes:

- Ownership
- Creation rate
- Entity type
- Repetition
- Player location
- Whether activity is ambient, scripted or player-created

## Economy watchdog

Economy monitoring looks for abnormal balance changes and suspicious financial behaviour.

It should supplement strong server-side validation rather than replace it.

## Inventory and weapon watchdogs

These systems monitor suspicious item or weapon changes, including behaviour inconsistent with expected server workflows.

Custom inventory integrations must be tested carefully.

## Resource integrity

Resource integrity checks help identify unexpected resource states, stopped protections or suspicious changes.

## Movement monitoring

Movement monitoring records abnormal travel, teleporting or positioning.

Legitimate administrative and scripted teleports should be accounted for.

## Aim and combat analysis

Combat analysis may consider multiple behavioural signals over time, including accuracy patterns, headshot ratios and line-of-sight context.

A single strong shot is not sufficient evidence by itself.

## Menu and native protection

The Menu Native Shield reports suspicious behaviour associated with abusive menu or native activity without publishing the exact detection logic.

## Risk scoring

Risk scoring helps staff prioritise investigations by combining evidence.

Risk scores should not be treated as a substitute for human review.
