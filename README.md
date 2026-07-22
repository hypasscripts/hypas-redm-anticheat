# Hypas Anti-Cheat Premium v4.12.4

Premium RedM/VORP anti-cheat and server-authority protection suite for serious roleplay servers.

This release is packaged for commercial sale and Cfx.re Asset Escrow upload. It keeps the working v4.11.25 standalone VORP inventory/money wipe adapter, the v4.12.x premium admin panel polish, safe customer defaults, and a warning-only escrow/update status panel.

## Important Folder Name Requirement

The resource folder must be named exactly:

```cfg
hypas_anticheat
```

The resource contains a commercial resource-name lock. If the folder is renamed, the script will log a resource-name mismatch and stop itself.

## Requirements

Required:

- RedM server
- VORP Core
- `vorp_inventory`
- `oxmysql`
- Database access to import `sql/install.sql`

Optional:

- `screenshot-basic` for screenshot evidence
- `hypas_economy` for Hypas economy examples
- `bcc-law` / law systems for law integrations
- `vorp_admin` is optional only; Hypas does not require it for inventory/money wipe tools

## Install

1. Place the resource in your resources folder as `hypas_anticheat`.
2. Import `sql/install.sql` into your database.
3. Add the resource after VORP and oxmysql in `server.cfg`.

```cfg
ensure oxmysql
ensure vorp_core
ensure vorp_inventory
ensure screenshot-basic # optional, only needed for screenshot evidence
ensure hypas_anticheat

add_ace group.admin hypas.ac.admin allow
```

4. Restart the server.
5. Join as an admin and run:

```cfg
/acsetup
/achealth
/aclevel status
/acpanel
```

Fresh installs start in safe testing mode. Do not enable kicks or bans until normal gameplay has been tested and false positives have been reviewed.

## Safe Go-Live Flow

1. Install in testing mode.
2. Run `/achealth`.
3. Open `/acpanel`.
4. Test normal player actions, jobs, shops, crafting, teleports, revive/respawn and rewards.
5. Review `/acrecent`, Discord logs and Staff Audit.
6. Move to `/aclevel balanced` only after false positives are cleared.
7. Enable kicks before bans.
8. Enable bans last.

## Access and Updates

Hypas Anti-Cheat Premium is sale-ready for Cfx Asset Escrow and Tebex delivery. The release does **not** require a local licence key by default because Cfx/Tebex asset access handles customer entitlement.

The `/acpanel` Access / Updates card shows:

- Access: `Escrow Managed`
- Customer: `Tebex / Cfx Asset Access`
- Installed version
- Latest version, if you configure `Config.License.LatestVersionUrl`
- Update status
- Protection status

The version checker is warning-only by default. Outdated versions are not blocked, so a customer server will not stop working if your update endpoint is offline.

## Headline Features

- Premium `/acpanel` command centre.
- Live player risk view.
- Recent detections and severity filtering.
- Evidence centre with ban evidence, appeal notes and unban workflow.
- Screenshot evidence support where `screenshot-basic` is installed.
- Staff action audit log.
- One-click Testing, Balanced and Strict protection levels.
- Standalone VORP inventory/money wipe adapter; `vorp_admin` is not required.
- Server-side payout gateway for protected money rewards.
- Protected item and weapon reward exports.
- Teleport allowance system for Guarma, Sisika, admin teleports, hospital respawns and jail/prison scripts.
- Event firewall, honeypots, resource integrity checks, SQL guard and panic lockdown.

## Admin Commands

```cfg
/acsetup
/achealth
/aclevel status
/aclevel testing
/aclevel balanced
/aclevel strict
/acpanel
/acrecent
/acstrikes [serverId]
/acreset [serverId]
/acsuspend [serverId] [seconds] [reason]
/acresume [serverId]
/acallowtp [serverId] [seconds] [reason]
/acteleports [serverId]
/acwipeprobe [serverId]
```

The required ACE permission for panel access is:

```cfg
add_ace group.admin hypas.ac.admin allow
```

## Documentation

- `docs/CUSTOMER_INSTALL_GUIDE.md` - detailed install and first-run guide.
- `docs/ESCROW_UPLOAD_GUIDE.md` - creator-side escrow upload checklist.
- `docs/SUPPORT_POLICY.md` - recommended support boundaries.
- `docs/ACCESS_AND_UPDATE_CHECKER.md` - escrow-managed access and optional version checker notes.
- `docs/COMPATIBILITY_MATRIX.md` - supported, partially supported and integration-required resources.
- `docs/FALSE_POSITIVE_GUIDE.md` - common false positives and safe fixes.
- `docs/STANDALONE_VORP_WIPE_ADAPTER.md` - inventory/money wipe support without `vorp_admin`.
- `docs/VERSIONING_POLICY.md` - release numbering and update policy.
- `docs/RELEASE_READINESS_CHECKLIST.md` - final test checklist.
- `docs/ADMIN_PANEL_SELLING_POINTS.md` - admin panel sales/screenshot guidance.
- `integrations_ready_to_copy/` - copyable gateway integration snippets.

## Maximum Protection Requires Integration

Hypas works immediately for logging, honeypots, panel investigation, connection logging, resource checks and common abuse guards.

For maximum protection, money, item, weapon and sensitive job events should be routed through Hypas exports.

### Safe money reward

```lua
exports.hypas_anticheat:PayPlayer(source, {
    action = 'job_payment',
    type = 'cash',
    amount = amount,
    resource = GetCurrentResourceName()
})
```

### Safe item reward

```lua
exports.hypas_anticheat:GiveItem(source, {
    action = 'crafting_reward',
    item = itemName,
    amount = amount,
    resource = GetCurrentResourceName()
})
```

### Safe weapon reward

```lua
exports.hypas_anticheat:GiveWeapon(source, {
    action = 'law_armoury',
    weapon = weaponName,
    ammo = ammo or 0,
    resource = GetCurrentResourceName()
})
```

### Safe scripted teleport

```lua
exports.hypas_anticheat:AllowTeleport(source, {
    reason = 'guarma_travel',
    seconds = 25,
    from = GetEntityCoords(GetPlayerPed(source)),
    to = vector3(1269.78, -6854.46, 43.37),
    radius = 100.0,
    maxDistance = 10000.0
})
```

## Commercial Defaults

- `Config.TestMode = true`
- `Config.ProtectionLevel = 'testing'`
- `Config.Punishments.KickEnabled = false`
- `Config.Punishments.BanEnabled = false`
- `Config.ResourceGuard.ExpectedResourceName = 'hypas_anticheat'`
- `Config.ResourceGuard.ResourceNameHardStop = true`

These defaults are intentional. Buyers should move into enforcement gradually after testing.

- `docs/RESOURCE_GUARD_OPTIONAL_RESOURCES.md` - optional integration monitoring without missing-resource console spam.


## New in v4.12.5

- Stronger Mod Menu Shield defaults for fake admin events, weather/time abuse, entity spam, ped/animal spawning, and crash-style event spam.
- Expanded honeypots and event firewall coverage for obvious non-admin admin actions.
- Stronger entity guard defaults with ped/animal rate limiting and cancel-on-rate-limit support.


## New in v4.12.6

- Entity spam detections are now marked as critical and use 12 strike points when punishments are live.
- Suspicious spawn bursts can trigger automatic deletion of the owner's peds, animals, vehicles, and objects.

## New in v4.12.7

- Safer RedM Entity Guard defaults with warning and critical thresholds.
- Auto-delete now targets recently tracked entities attributed to the same owner/type, reducing risk from ambient NPC ownership.

## New in v4.12.12

- Stable restore build.
- Entity Guard has been reverted to the last known working v4.12.7 behaviour.
- Later object-burst/client-cleanup experiments have been removed.

## New in v4.12.13

- Expanded anti-mod-menu trap layer.
- Added fake NUI callback traps, suspicious client resource-name scan, freecam/spectate evidence and horse speed manipulation reporting.
- Entity Guard remains the confirmed working v4.12.12 stable version.

## New in v4.12.14

- Ambient-safe Entity Guard adjustment.
- Ped/animal rate limiting is disabled by default because RedM can attribute town NPCs/animals to nearby players.
- Vehicle/wagon, object and unknown entity spam protection remains enabled.
