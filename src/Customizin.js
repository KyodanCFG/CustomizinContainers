exports.mod = (mod_info) => {
    logger.logInfo(`   [MOD] Loading: ${mod_info.name} (${mod_info.version}) by ${mod_info.author}`);
    let itemsCache = fileIO.readParsed(db.user.cache.items);						    // read from server cache (items)
    let settingsFile = require("../settings.json");							                // read from settings.json file
    let containerSettings = settingsFile.containers;                                        // for tidying up code/abstraction	

    if (containerSettings.customizinContainers === true) {                                  // if 'customizinContainers' var in settings.json is set to true, execute script
        for (let item in itemsCache.data) {
            let cacheData = itemsCache.data[item];									        // for tidying up code/abstraction	
        
            // Pockets (4 total)
            if (cacheData._id === "557ffd194bdc2d28148b457f") {
                if (containerSettings.pockets.one.width > 0 && containerSettings.pockets.one.height > 0 &&
                    containerSettings.pockets.two.width > 0 && containerSettings.pockets.two.height > 0 &&
                    containerSettings.pockets.three.width > 0 && containerSettings.pockets.three.height > 0 &&
                    containerSettings.pockets.four.width > 0 && containerSettings.pockets.four.height > 0) {
                        cacheData._props.Grids[0]._props.cellsH = containerSettings.pockets.one.width;
                        cacheData._props.Grids[0]._props.cellsV = containerSettings.pockets.one.height;
                        cacheData._props.Grids[1]._props.cellsH = containerSettings.pockets.two.width;
                        cacheData._props.Grids[1]._props.cellsV = containerSettings.pockets.two.height;
                        cacheData._props.Grids[2]._props.cellsH = containerSettings.pockets.three.width;
                        cacheData._props.Grids[2]._props.cellsV = containerSettings.pockets.three.height;
                        cacheData._props.Grids[3]._props.cellsH = containerSettings.pockets.four.width;
                        cacheData._props.Grids[3]._props.cellsV = containerSettings.pockets.four.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.pockets variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Secure Containers
            if (cacheData._id === "544a11ac4bdc2d470e8b456a") {                              // 'Alpha' Secure Case ID
                if (containerSettings.secure.alpha.width > 0 && containerSettings.secure.alpha.height > 0) {        // check vars in settings.json if larger than 1
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.secure.alpha.width;                 // if there, change `cellsV` in cache to match the `width` var in settings.json
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.secure.alpha.height;                // if there, change `cellsH` in cache to match the `height` var in settings.json
                } else {													                // otherwise, spit out an error in server console and end script
                    logger.logError(`[MOD] ${mod_info.name}: settings.secure.alpha variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            if (cacheData._id === "5857a8b324597729ab0a0e7d") {                              // 'Beta' Secure Case ID
                if (containerSettings.secure.beta.width > 0 && containerSettings.secure.beta.height > 0) {          // check vars in settings.json if exists or is number
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.secure.beta.width;                  // if there, change `cellsV` in cache to match the `width` var in settings.json
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.secure.beta.height;                 // if there, change `cellsH` in cache to match the `height` var in settings.json
                } else {													                // otherwise, spit out an error in server console and end script
                    logger.logError(`[MOD] ${mod_info.name}: settings.secure.beta variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            if (cacheData._id === "59db794186f77448bc595262") {                              // 'Epsilon' Secure Case ID
                if (containerSettings.secure.epsilon.width > 0 && containerSettings.secure.epsilon.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.secure.epsilon.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.secure.epsilon.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.secure.epsilon variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            if (cacheData._id === "5857a8bc2459772bad15db29") {                              // 'Gamma' Secure Case ID
                if (containerSettings.secure.gamma.width > 0 && containerSettings.secure.gamma.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.secure.gamma.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.secure.gamma.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.secure.gamma variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            if (cacheData._id === "5c093ca986f7740a1867ab12") {                              // 'Kappa' Secure Case ID
                if (containerSettings.secure.kappa.width > 0 && containerSettings.secure.kappa.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.secure.kappa.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.secure.kappa.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.secure.kappa variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Ammo Case
            if (cacheData._id === "5aafbde786f774389d0cbc0f") {
                if (containerSettings.ammo.width > 0 && containerSettings.ammo.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.ammo.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.ammo.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.ammo variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Docs Case
            if (cacheData._id === "590c60fc86f77412b13fddcf") {
                if (containerSettings.docs.width > 0 && containerSettings.docs.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.docs.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.docs.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.docs variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Dogtag Case
            if (cacheData._id === "5c093e3486f77430cb02e593") {
                if (containerSettings.dogtag.width > 0 && containerSettings.dogtag.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.dogtag.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.dogtag.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.dogtag variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Grenade Case
            if (cacheData._id === "5e2af55f86f7746d4159f07c") {
                if (containerSettings.grenade.width > 0 && containerSettings.grenade.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.grenade.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.grenade.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.grenade variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Items Case
            if (cacheData._id === "59fb042886f7746c5005a7b2") {
                if (containerSettings.items.width > 0 && containerSettings.items.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.items.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.items.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.items variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Items - THICC Case
            if (cacheData._id === "5c0a840b86f7742ffa4f2482") {
                if (containerSettings.items_thicc.width > 0 && containerSettings.items_thicc.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.items_thicc.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.items_thicc.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.items_thicc variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Junk Box
            if (cacheData._id === "5b7c710788a4506dec015957") {
                if (containerSettings.junk.width > 0 && containerSettings.junk.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.junk.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.junk.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.junk variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Keytool
            if (cacheData._id === "59fafd4b86f7745ca07e1232") {
                if (containerSettings.keytool.width > 0 && containerSettings.keytool.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.keytool.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.keytool.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.keytool variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Mag Case
            if (cacheData._id === "5c127c4486f7745625356c13") {
                if (containerSettings.mag.width > 0 && containerSettings.mag.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.mag.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.mag.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.mag variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Meds Case
            if (cacheData._id === "5aafbcd986f7745e590fff23") {
                if (containerSettings.meds.width > 0 && containerSettings.meds.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.meds.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.meds.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.meds variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Money Case
            if (cacheData._id === "59fb016586f7746d0d4b423a") {
                if (containerSettings.money.width > 0 && containerSettings.money.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.money.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.money.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.money variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Pistol Case
            if (cacheData._id === "567143bf4bdc2d1a0f8b4567") {
                if (containerSettings.pistol.width > 0 && containerSettings.pistol.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.pistol.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.pistol.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.pistol variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // SICC Case
            if (cacheData._id === "5d235bb686f77443f4331278") {
                if (containerSettings.sicc.width > 0 && containerSettings.sicc.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.sicc.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.sicc.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.sicc variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Thermal Bag
            if (cacheData._id === "5c093db286f7740a1b2617e3") {
                if (containerSettings.thermal.width > 0 && containerSettings.thermal.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.thermal.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.thermal.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.thermal variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Wallet
            if (cacheData._id === "5783c43d2459774bbe137486") {
                if (containerSettings.wallet.width > 0 && containerSettings.wallet.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.wallet.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.wallet.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.wallet variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Weapons Case
            if (cacheData._id === "59fb023c86f7746d0d4b423c") {
                if (containerSettings.weapons.width > 0 && containerSettings.weapons.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.weapons.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.weapons.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.weapons variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            // Weapons - THICC Case
            if (cacheData._id === "5b6d9ce188a4501afc1b2b25") {
                if (containerSettings.weapons_thicc.width > 0 && containerSettings.weapons_thicc.height > 0) {
                    cacheData._props.Grids[0]._props.cellsH = containerSettings.weapons_thicc.width;
                    cacheData._props.Grids[0]._props.cellsV = containerSettings.weapons_thicc.height;
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: settings.weapons_thicc variables has no value/set to 0/is not a number! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }
        }

        if (containerSettings.removeRestrictions === true) {                            // if `removeRestrictions` is true, let's remove restrictions for secure cases and backpacks
            for (let item in itemsCache.data) {
                let cacheData = itemsCache.data[item];                                  // for tidying up code/abstraction
                let propsData = itemsCache.data[item]._props;                           // for tidying up code/abstraction (cuz fuck it why not)
                
                if (cacheData._parent === "5448bf274bdc2dfc2f8b456a"                    // secure container parent ID
                || cacheData._parent === "5448e53e4bdc2d60728b4567"                     // backpack parent ID (comment out this line if you want item restrictions in backpacks)
                    ) {                                                                 // did this to make it easier to comment out line above
                    propsData.Grids[0]._props.filters = [];
                }
            }
            logger.logInfo(`   [MOD] -- Remove Secure Case and Backpack Restrictions: ON`);
        } else {
            logger.logInfo(`   [MOD] -- Remove Secure Case and Backpack Restrictions: OFF`);
        }

        fileIO.write(db.user.cache.items, itemsCache);						            // write all changes to cache (items.json specifically)
        logger.logSuccess(`[MOD] -- ${mod_info.name}: ON`);
    } else {                                                                            // if 'customizinContainers' var in settings.json is set to false, skip entire script
        logger.logSuccess(`[MOD] -- ${mod_info.name}: OFF`); 
    }
}