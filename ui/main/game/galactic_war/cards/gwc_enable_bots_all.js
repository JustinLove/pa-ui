// !LOCNS:galactic_war
define(['shared/gw_common'], function (GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return '!LOC:Complete Bot tech enables building of all Bots and all Bot Factories. Basic Bot factories are built via your commander or any basic fabricator. Advanced Bot factories are built via basic or advanced bot fabricators.';
        },
        summarize: function(params) {
            return '!LOC:Complete Bot Tech';
        },
        icon: function(params) {
            return 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_bot_factory.png';
        },
        audio: function (parms) {
            return {
                found: '/VO/Computer/gw/board_tech_available_bot'
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
            if( !(inventory.hasCard('gwc_enable_bots_all') || inventory.hasCard('gwc_enable_vehicles_all') || inventory.hasCard('gwc_enable_air_all')) )
            {
                chanceMod = 3;
            }
            if (dist > 0) {
                if (context.totalSize <= GW.balance.numberOfSystems[0]) {
                    chance = 25;
                    if (dist > 2)
                        chance = 200;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[1]) {
                    chance = 25;
                    if (dist > 3)
                        chance = 200;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
                    chance = 25;
                    if (dist > 4)
                        chance = 200;
                }
                else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
                    chance = 25;
                    if (dist > 5)
                        chance = 200;
                }
                else {
                    chance = 25;
                    if (dist > 6)
                        chance = 200;
                }
            }
            chance *= chanceMod;
            return { chance: chance };

        },
        buff: function(inventory, params) {
            inventory.addUnits([
                '/pa/units/land/bot_factory_adv/bot_factory_adv.json',
                '/pa/units/land/bot_factory/bot_factory.json',
                '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
                '/pa/units/land/assault_bot/assault_bot.json',
                '/pa/units/land/bot_grenadier/bot_grenadier.json',
                '/pa/units/land/bot_bomb/bot_bomb.json',
                '/pa/units/land/bot_tesla/bot_tesla.json'
            ]);
        },
        dull: function(inventory) {
        }
    };
});
