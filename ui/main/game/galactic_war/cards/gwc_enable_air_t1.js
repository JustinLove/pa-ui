// !LOCNS:galactic_war
define(['shared/gw_common'], function (GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return '!LOC:Basic air tech enables building of mobile air units and factories. Basic air factories are built via your commander or any basic fabricator.';
        },
        summarize: function(params) {
            return '!LOC:Basic Air Tech';
        },
        icon: function(params) {
            return 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_combat_air.png';
        },
        audio: function (parms) {
            return {
                found: '/VO/Computer/gw/board_tech_available_air'
            }
        },
        getContext: function (galaxy) {
            return {
                totalSize: galaxy.stars().length
            };
        },
        deal: function (system, context, inventory) {
            var chance = 0;
            var dist = system.distance();
            var chanceMod = 1;
            if( inventory.hasCard('gwc_enable_air_all') || inventory.hasCard('gwc_start_air') || inventory.hasCard('gwc_start_allfactory') )
            {
                chanceMod = 0;
            }
            if (dist > 0) {
                if (context.totalSize <= GW.balance.numberOfSystems[0]) {
                    chance = 200;
                    if (dist > 2)
                        chance = 50;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[1]) {
                    chance = 200;
                    if (dist > 3)
                        chance = 50;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
                    chance = 200;
                    if (dist > 4)
                        chance = 50;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
                    chance = 200;
                    if (dist > 5)
                        chance = 50;
                }
                else {
                    chance = 200;
                    if (dist > 6)
                        chance = 50;
                }
            }
            chance *= chanceMod;
            return { chance: chance };
        },
        buff: function(inventory, params) {
            inventory.addUnits([
                '/pa/units/air/air_factory/air_factory.json',
                '/pa/units/air/air_scout/air_scout.json',
                '/pa/units/air/bomber/bomber.json',
                '/pa/units/air/fighter/fighter.json',
                '/pa/units/air/transport/transport.json',
                '/pa/units/air/solar_drone/solar_drone.json'
            ]);
        },
        dull: function(inventory) {
        }
    };
});
