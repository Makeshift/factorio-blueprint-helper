# Factorio Blueprint Unique Parameter Tool

Factorio will merge together parameters that have the same value, e.g. if you have a train station with priority 0 and a constant combinator which has an iron plate signal with amount 0, that 0 will be merged into one parameter, so they can't be distinguished.

The only way around that (as of 10/12/25) is to give each parameter a unique value when building out the blueprint.

This tool helps you keep track of those unique values, and generates debug/release versions of your blueprint to help during development.

## Terminology

To distinguish between variations of a blueprint, the following terms are used:

- `release` - this is a blueprint with the correct final parameters. This would be the one you'd share with your friends.
- `debug` - this is a blueprint with unique numbers in order to keep the parameters separate. This variation is the one you'd place in order to modify it, before selecting it as the new contents of the blueprint.


