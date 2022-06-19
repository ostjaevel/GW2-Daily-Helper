import React from 'react';
import './ResultContainer.css';
import ResultItemContainer from '../ResultItemContainer/ResultItemContainer.js';


const resultContainer = (props) => {
  let locationList = [];
  let filteredLocations = [];
  switch(props.menuOption){
    case 'PVE':
    locationList = [
         {
           Area: "Ascalon",
           MapName: "Plains of Ashford",
           Type: "Forager",
           WaypointCode: "[&BMcDAAA=]",
           WaypointName: "Loreclaw Waypoint",
           GatheringItem: "Potato",
           ImageName: "Ascalon/Ascalon_Gatherer_Loreclaw.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Blazeridge Steppes",
           Type: "Forager",
           WaypointCode: "[&BAACAAA=]",
           WaypointName: "Lunk Kraal Waypoint",
           GatheringItem: "Cabbage",
           ImageName: "Ascalon/Ascalon_Gatherer_LunkKraal.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Fields of Ruin",
           Type: "Lumberer",
           WaypointCode: "[&BE0BAAA=]",
           WaypointName: "Vulture's Waypoint",
            GatheringItem: "Soft Wood Logs",
           ImageName: "Ascalon/Ascalon_Lumberer_Vultures.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Diessa Plateau",
           Type: "Lumberer",
           WaypointCode: "[&BF4BAAA=]",
           WaypointName: "Oldgate Waypoint",
            GatheringItem: "Green Wood Logs",
           ImageName: "Ascalon/DiessaPlateau_Lumberer_Oldgate.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Fields of Ruin",
           Type: "Lumberer",
           WaypointCode: "[&BE8BAAA=]",
           WaypointName: "Ogre Road Waypoint",
            GatheringItem: "Soft Wood Logs",
           ImageName: "Ascalon/Ascalon_Lumberer_OgreRoad.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Iron Marches",
           Type: "Miner",
           WaypointCode: "[&BO8BAAA=]",
           WaypointName: "Grostogg's Kraal Waypoint",
            GatheringItem: "Rich Platinum",
           ImageName: "Ascalon/Ascalon_Miner_Grostogg.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Fields of Ruin",
           Type: "Miner",
           WaypointCode: "[&BEsBAAA=]",
           WaypointName: "Helliot Mine Waypoint",
            GatheringItem: "Rich Iron",
           ImageName: "Ascalon/FieldsOfRuin_Miner_helliot.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Iron Marches",
           Type: "Miner",
           WaypointCode: "[&BO4BAAA=]",
           WaypointName: "Gladefall Waypoint",
            GatheringItem: "Rich Platinum",
           ImageName: "Ascalon/Ascalon_Miner_Gladefall.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Black Citadel",
           Type: "Vista Viewer",
           WaypointCode: "[&BKYDAAA=]",
           WaypointName: "Memorial Waypoint",
            GatheringItem: "Vista",
           ImageName: "Ascalon/Ascalon_Vista_Memorial.jpg"
         },
         {
           Area: "Ascalon",
           MapName: "Diessa Plateau",
           Type: "Vista Viewer",
           WaypointCode: "[&BMYDAAA=]",
           WaypointName: "Redreave Mill Waypoint",
            GatheringItem: "Vista",
           ImageName: "Ascalon/Ascalon_Vista_RedreaveMill.jpg"
         },


         {
           Area: "Kryta",
           MapName: "Kessex Hills",
           Type: "Forager",
           WaypointCode: "[&BAcAAAA=]",
           WaypointName: "Sojourner's Waypoint",
           GatheringItem: "Herb Sprouts",
           ImageName: "Kryta/Kryta_Forager_SojournersWay.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Queensdale",
           Type: "Forager",
           WaypointCode: "[&BPoAAAA=]",
           WaypointName: "Beetletun Waypoint",
           GatheringItem: "Lettuce",
           ImageName: "Kryta/Kryta_Gatherer_Beetletun.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Gendarran Fields",
           Type: "Forager",
           WaypointCode: "[&BOQAAAA=]",
           WaypointName: "Provern Shore Waypoint",
           GatheringItem: "Spinach",
           ImageName: "Kryta/Kryta_Gatherer_ProvernShore.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Kessex Hills",
           Type: "Forager",
           WaypointCode: "[&BBIAAAA=]",
           WaypointName: "Cereboth Waypoint",
           GatheringItem: "Strawberries",
           ImageName: "Kryta/Kryta_Gatherer_Cereboth.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Harathi Hinterlands",
           Type: "Lumberer",
           WaypointCode: "[&BKgAAAA=]",
           WaypointName: "Wynchona Rally Point Waypoint",
            GatheringItem: "Seasoned Wood Logs",
           ImageName: "Kryta/Kryta_Lumberer_WynchonaRally.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Bloodtide Coast",
           Type: "Lumberer",
           WaypointCode: "[&BLABAAA=]",
           WaypointName: "Whisperwill Waypoint",
            GatheringItem: "Hard Wood Logs",
           ImageName: "Kryta/BloodtideCoast_Lumberer_Whisperwill.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Bloodtide Coast",
           Type: "Lumberer",
           WaypointCode: "[&BKMBAAA=]",
           WaypointName: "Archen Foreland Waypoint",
            GatheringItem: "Seasoned Wood Logs",
           ImageName: "Kryta/Kryta_Lumberer_ArchenForeland.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Queensdale",
           Type: "Miner",
           WaypointCode: "[&BPMAAAA=]",
           WaypointName: "Phinney Waypoint",
            GatheringItem: "Rich Copper",
           ImageName: "Kryta/Kryta_Miner_Phinney.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Gendarran Fields",
           Type: "Miner",
           WaypointCode: "[&BJMBAAA=]",
           WaypointName: "Icegate Waypoint",
            GatheringItem: "Rich Iron",
           ImageName: "Kryta/Kryta_Miner_Icegate.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Lion's Arch",
           Type: "Vista Viewer",
           WaypointCode: "[&BA0EAAA=]",
           WaypointName: "Guild Bluff Waypoint",
            GatheringItem: "Vista",
           ImageName: "Kryta/LionArch_Vista_GuildBluff.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Queensdale",
           Type: "Vista Viewer",
           WaypointCode: "[&BPoAAAA=]",
           WaypointName: "Beetletun Waypoint",
           GatheringItem: "Vista",
           ImageName: "Kryta/Kryta_Vista_Beetletun.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Queensdale",
           Type: "Vista Viewer",
           WaypointCode: "[&BPEAAAA=]",
           WaypointName: "Garrison Waypoint",
            GatheringItem: "Vista",
           ImageName: "Kryta/Kryta_Vista_Garrison.jpg"
         },
         {
           Area: "Kryta",
           MapName: "Divinity's Reach",
           Type: "Vista Viewer",
           WaypointCode: "[&BC0DAAA=]",
           WaypointName: "Ossan Waypoint",
            GatheringItem: "Vista (With Mount)",
           ImageName: "Kryta/Kryta_Vista_Ossan.jpg"
         },




         {
           Area: "Maguuma Jungle",
           MapName: "Metrica Province",
           Type: "Forager",
           WaypointCode: "[&BEIAAAA=]",
           WaypointName: "Akk Wilds Waypoint",
           GatheringItem: "Potato",
           ImageName: "Maguuma_Jungle/Metrica_Gatherer_AkkWilds.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Caledon Forest",
           Type: "Forager",
           WaypointCode: "[&BEABAAA=]",
           WaypointName: "Kraitbane Haven Waypoint",
           GatheringItem: "Lettuce",
           ImageName: "Maguuma_Jungle/CaledonForest_Gatherer_Kraitbane.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Mount Maelstrom",
           Type: "Lumberer",
           WaypointCode: "[&BNMCAAA=]",
           WaypointName: "Gauntlet Waypoint",
           GatheringItem: "Hard Wood Logs",
           ImageName: "Maguuma_Jungle/MountMaelstrom_Lumberer_Gauntlet.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Mount Maelstrom",
           Type: "Lumberer",
           WaypointCode: "[&BNECAAA=]",
           WaypointName: "Oxbow Isle Waypoint",
           GatheringItem: "Hard Wood Logs",
           ImageName: "Maguuma_Jungle/MountMaelstrom_Lumberer_OxbowIsle.jpg"
         },
           {
           Area: "Maguuma Jungle",
           MapName: "Mount Maelstrom",
           Type: "Miner",
           WaypointCode: "[&BMkCAAA=]",
           WaypointName: "Criterion Waypoint",
           GatheringItem: "Rich Platinum",
           ImageName: "Maguuma_Jungle/MountMaelstrom_Miner_Criterion.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Brisban Wildlands",
           Type: "Miner",
           WaypointCode: "[&BGMAAAA=]",
           WaypointName: "Gallowfields Waypoint",
           GatheringItem: "Iron",
           ImageName: "Maguuma_Jungle/BrisbanWildlands_Miner_Gallowfields.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Caledon Forest",
           Type: "Miner",
           WaypointCode: "[&BEEBAAA=]",
           WaypointName: "Wychmire Waypoint",
            GatheringItem: "Rich Copper",
           ImageName: "Maguuma_Jungle/CaledonForest_Miner_Wychmire.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Caledon Forest",
           Type: "Vista Viewer",
           WaypointCode: "[&BDwBAAA=]",
           WaypointName: "Caledon Haven Waypoint",
            GatheringItem: "Vista",
           ImageName: "Maguuma_Jungle/CaledonForest_Vista_CaledonHaven.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Metrica Province",
           Type: "Vista Viewer",
           WaypointCode: "[&BEMAAAA=]",
           WaypointName: "Rana Landing Complex Waypoint",
           GatheringItem: "Vista (With Mount)",
           ImageName: "Maguuma_Jungle/Metrica_Vista_RanaLanding.jpg"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "The Grove",
           Type: "Vista Viewer",
           WaypointCode: "[&BLoEAAA=]",
           WaypointName: "Upper Commons Waypoint",
           GatheringItem: "Vista (With Mount)",
           ImageName: "Maguuma_Jungle/Grove_Vista_UpperCommons.jpg"
         },


         {
           Area: "Orr",
           MapName: "Straits of Devastation",
           Type: "Forager",
           WaypointCode: "[&BFgGAAA=]",
           WaypointName: "Plinth Timberland Waypoint",
           GatheringItem: "Artichoke",
           ImageName: "Orr/Orr_Gatherer_PlinthTimberland.jpg"
         },
         {
           Area: "Orr",
           MapName: "Cursed Shore",
           Type: "Forager",
           WaypointCode: "[&BBsDAAA=]",
           WaypointName: "Verdance Waypoint",
           GatheringItem: "Lotus Root & Ghost Pepper",
           ImageName: "Orr/Orr_Gatherer_Verdance.jpg"
         },
         {
           Area: "Orr",
           MapName: "Malchor's Leap",
           Type: "Lumberer",
           WaypointCode: "[&BKYCAAA=]",
           WaypointName: "Pagga's Waypoint",
           GatheringItem: "Elder Wood Logs",
           ImageName: "Orr/Orr_Lumberer_Paggas.jpg"
         },
         {
           Area: "Orr",
           MapName: "Straits of Devastation",
           Type: "Lumberer",
           WaypointCode: "[&BFgGAAA=]",
           WaypointName: "Plinth Timberland Waypoint",
           GatheringItem: "Elder Wood Logs",
           ImageName: "Orr/Orr_Lumberer_PlinthTimberland.jpg"
         },
         {
           Area: "Orr",
           MapName: "Cursed Shore",
           Type: "Miner",
           WaypointCode: "[&BBsDAAA=]",
           WaypointName: "Verdance Waypoint",
           GatheringItem: "Rich Mithril & Mithril Ore",
           ImageName: "Orr/Orr_Miner_Verdance.jpg"
         },
         {
           Area: "Orr",
           MapName: "Malchor's Leap",
           Type: "Miner",
           WaypointCode: "[&BKYCAAA=]",
           WaypointName: "Pagga's Waypoint",
           GatheringItem: "Mithril Ore",
           ImageName: "Orr/Orr_Miner_Paggas.jpg"
         },
         {
           Area: "Orr",
           MapName: "Straits of Devastation",
           Type: "Vista Viewer",
           WaypointCode: "[&BO4CAAA=]",
           WaypointName: "Fort Trinity Waypoint",
           GatheringItem: "Vista",
           ImageName: "Orr/Orr_Vista_FortTrinity.jpg"
         },
         {
           Area: "Orr",
           MapName: "Cursed Shore",
           Type: "Vista Viewer",
           WaypointCode: "[&BCEDAAA=]",
           WaypointName: "Caer Shadowfain Waypoint",
           GatheringItem: "Vista",
           ImageName: "Orr/Orr_Vista_CaerShadowfain.jpg"
         },
         {
           Area: "Orr",
           MapName: "Cursed Shore",
           Type: "Vista Viewer",
           WaypointCode: "[&BBoDAAA=]",
           WaypointName: "Gavbeorn's Waypoint",
           GatheringItem: "Vista",
           ImageName: "Orr/Orr_Vista_Gavbeorns.jpg"
         },



         {
           Area: "Maguuma Wastes",
           MapName: "Dry Top",
           Type: "Forager",
           WaypointCode: "[&BIYHAAA=]",
           WaypointName: "Vine Bridge Waypoint",
           GatheringItem: "Cabbage, Lettuce & Carrots",
           ImageName: "Maguuma_Wastes/Maguuma_Wastes_Gatherer_VineBridge.jpg"
         },
         {
           Area: "Maguuma Wastes",
           MapName: "The Silverwastes",
           Type: "Lumberer",
           WaypointCode: "[&BH8HAAA=]",
           WaypointName: "Camp Resolve Waypoint",
           GatheringItem: "Cypress Sapling",
           ImageName: "Maguuma_Wastes/MaguumaWastes_Lumberer_CampResolve.jpg"
         },
         {
           Area: "Maguuma Wastes",
           MapName: "Dry Top",
           Type: "Lumberer",
           WaypointCode: "[&BHoHAAA=]",
           WaypointName: "Prosperity Waypoint",
           GatheringItem: "Cypress",
           ImageName: ""
         },
         {
           Area: "Maguuma Wastes",
           MapName: "Dry Top",
           Type: "Miner",
           WaypointCode: "[&BIYHAAA=]",
           WaypointName: "Vine Bridge Waypoint",
           GatheringItem: "Rich Mithril",
           ImageName: "Maguuma_Wastes/Maguuma_Wastes_Miner_VineBridge.jpg"
         },
         {
           Area: "Maguuma Wastes",
           MapName: "Dry Top",
           Type: "Miner",
           WaypointCode: "[&BIYHAAA=]",
           WaypointName: "Vine Bridge Waypoint",
           GatheringItem: "Rich Mithril",
           ImageName: "Maguuma_Wastes/Maguuma_Wastes_Miner_VineBridge2.jpg"
         },
         {
           Area: "Maguuma Wastes",
           MapName: "Dry Top",
           Type: "Miner",
           WaypointCode: "[&BHoHAAA=]",
           WaypointName: "Prosperity Waypoint",
           GatheringItem: "Rich Mithril",
           ImageName: "Maguuma_Wastes/Maguuma_Wastes_Miner_Prosperity.jpg"
         },
         {
           Area: "Maguuma Wastes",
           MapName: "The Silverwastes",
           Type: "Vista Viewer",
           WaypointCode: "[&BH8HAAA=]",
           WaypointName: "Camp Resolve Waypoint",
           GatheringItem: "Vista",
           ImageName: "Maguuma_Wastes/Maguuma_Wastes_Vista_CampResolve.jpg"
         },


         {
           Area: "Shiverpeaks",
           MapName: "Lornar's Pass",
           Type: "Forager",
           WaypointCode: "[&BOYAAAA=]",
           WaypointName: "Demon's Maw Waypoint",
           GatheringItem: "Grapes",
           ImageName: "Shiverpeaks/Lornars_Forager_DemonsMaw.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Snowden Drifts",
           Type: "Forager",
           WaypointCode: "[&BMAAAAA=]",
           WaypointName: "Reaver's Waypoint",
           GatheringItem: "Strawberries",
           ImageName: "Shiverpeaks/Shiverpeaks_Forager_Reaver.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Timberline Falls",
           Type: "Forager",
           WaypointCode: "[&BEACAAA=]",
           WaypointName: "Thistlereed Grove Waypoint",
           GatheringItem: "Cauliflower",
           ImageName: "Shiverpeaks/Shiverpeaks_Forager_ValanceTutory.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Frostgorge Sound",
           Type: "Forager",
           WaypointCode: "[&BHgCAAA=]",
           WaypointName: "Arundon Waypoint",
           GatheringItem: "Butternut Squash",
           ImageName: "Shiverpeaks/Shiverpeaks_Forager_Arundon.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Dredgehaunt Cliffs",
           Type: "Lumberer",
           WaypointCode: "[&BFsCAAA=]",
           WaypointName: " Steelbrachen Waypoint",
           GatheringItem: "Seasoned Wood Logs",
           ImageName: "Shiverpeaks/Shiverpeaks_Lumberer_Steelbrachen.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Timberline Falls",
           Type: "Lumberer",
           WaypointCode: "[&BE8CAAA=]",
           WaypointName: " White Paper Waypoint",
           GatheringItem: "Hard Wood Logs",
           ImageName: "Shiverpeaks/Shiverpeaks_Lumberer_WhitePaper.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Snowden Drifts",
           Type: "Miner",
           WaypointCode: "[&BL8AAAA=]",
           WaypointName: "Snowhawk Landing Waypoint",
           GatheringItem: "Rich Iron",
           ImageName: "Shiverpeaks/Shiverpeaks_Miner_SnowhawkLanding.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "TImberline Falls",
           Type: "Miner",
           WaypointCode: "[&BFECAAA=]",
           WaypointName: "Thistlereed Waypoint",
           GatheringItem: "Rich Platinum",
           ImageName: "Shiverpeaks/Shiverpeaks_Miner_ThistlereedWaypoint.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Hoelbrak",
           Type: "Vista Viewer",
           WaypointCode: "[&BI4DAAA=]",
           WaypointName: "Southern Watchpost Waypoint",
           GatheringItem: "Vista",
           ImageName: "Shiverpeaks/Shiverpeaks_Vista_SouthernWatchpost.jpg"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Lornar's Pass",
           Type: "Vista Viewer",
           WaypointCode: "[&BOYAAAA=]",
           WaypointName: "Demon's Maw Waypoint",
           GatheringItem: "Vista",
           ImageName: "Shiverpeaks/Shiverpeaks_Vista_DemonsMaw.jpg"
         },



         {
           Area: "Heart of Maguuma",
           MapName: "Verdant Brink",
           Type: "Forager",
           WaypointCode: "[&BOAHAAA=]",
           WaypointName: "Jaka Itzel Waypoint",
           GatheringItem: "Flax",
           ImageName: "Heart_of_Maguuma/HeartOfMaguuma_Forager_JakeItzel.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Ember Bay",
           Type: "Forager",
           WaypointCode: "[&BHgJAAA=]",
           WaypointName: "Castaway Circus Waypoint",
           GatheringItem: "Lotus",
           ImageName: "Heart_of_Maguuma/HeartOfMaguuma_Forager_CastawayCircus.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Auric Basin",
           Type: "Miner",
           WaypointCode: "[&BGwIAAA=]",
           WaypointName: "Eastwatch Waypoint",
           GatheringItem: "Orichalcum & Mithril Ores",
           ImageName: "Heart_of_Maguuma/AuricBasin_Miner_EastWatch.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Verdant Brink",
           Type: "Miner",
           WaypointCode: "[&BO8HAAA=]",
           WaypointName: "Faren's Flyer Waypoint",
           GatheringItem: "Rich Orichalcum",
           ImageName: "Heart_of_Maguuma/VerdantBrink_Miner_FarensFlyer.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Auric Basin",
           Type: "Lumberer",
           WaypointCode: "[&BN0HAAA=]",
           WaypointName: "Northwatch Waypoint",
           GatheringItem: "Logs",
           ImageName: "Heart_of_Maguuma/AuricBasin_Lumberer_Northwatch.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Verdant Brink",
           Type: "Vista Viewer",
           WaypointCode: "[&BAgIAAA=]",
           WaypointName: "Pact Encampment Waypoint",
           GatheringItem: "Vista",
           ImageName: "Heart_of_Maguuma/Verdant_Brink_Vista_PactEncampment.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Verdant Brink",
           Type: "Vista Viewer",
           WaypointCode: "[&BOAHAAA=]",
           WaypointName: "Jaka Itzel Waypoint",
           GatheringItem: "Vista",
           ImageName: "Heart_of_Maguuma/Verdant_Brink_Vista_Jakeltzel.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Lost Precipice",
           Type: "Guild hall",
           WaypointCode: "[&BMIIAAA=]",
           WaypointName: "Central Precipice Waypoint",
           GatheringItem: "Guild hall (Miner, Forager & Lumberer)",
           ImageName: "Guild_halls/LostPrecipice_HeartOfMaguuma_CentralPrecipice.jpg"
         },
         {
           Area: "Heart of Maguuma",
           MapName: "Gilded Hollow",
           Type: "Guild hall",
           WaypointCode: "[&BP8IAAA=]",
           WaypointName: "Central Hollow Waypoint",
           GatheringItem: "Guild hall (Miner, Forager & Lumberer)",
           ImageName: "Guild_halls/GildedHollow_HeartOfMaguuma_CentralHollow.jpg"
         },


         {
           Area: "Desert",
           MapName: "Crystal Oasis",
           Type: "Forager",
           WaypointCode: "[&BEAKAAA=]",
           WaypointName: "Temple of Kormir Waypoint",
           GatheringItem: "Mussels & Desert Vegetables",
           ImageName: "Desert/CrystalOasis_Forager_TempleOfKormir.jpg"
         },
         {
           Area: "Desert",
           MapName: "Domain of Kourna",
           Type: "Forager",
           WaypointCode: "[&BFcLAAA=]",
           WaypointName: "Allied Encampment Waypoint",
           GatheringItem: "Cluster of Desert Herbs",
           ImageName: "Desert/DomainKourna_Forager_Herbs.jpg"
         },
         {
           Area: "Desert",
           MapName: "Crystal Oasis",
           Type: "Miner",
           WaypointCode: "[&BJMKAAA=]",
           WaypointName: "Destiny's Gorge Waypoint",
           GatheringItem: "Mithril Ore",
           ImageName: "Desert/CrystalOasis_Miner_DestinysGorge.jpg"
         },
         {
           Area: "Desert",
           MapName: "Desert Highlands",
           Type: "Lumberer",
           WaypointCode: "[&BJ0KAAA=]",
           WaypointName: "Highjump Ranch Waypoint",
           GatheringItem: "Ancient Wood Log",
           ImageName: "Desert/DesertHighlands_Lumberer_Highjump.jpg"
         },
         {
           Area: "Desert",
           MapName: "Desert Highlands",
           Type: "Vista Viewer",
           WaypointCode: "[&BJ0KAAA=]",
           WaypointName: "Highjump Ranch Waypoint",
           GatheringItem: "Vista",
           ImageName: "Desert/DesertHighlands_Vista_Highjump.jpg"
         },
         {
           Area: "Desert",
           MapName: "Crystal Oasis",
           Type: "Vista Viewer",
           WaypointCode: "[&BLsKAAA=]",
           WaypointName: "Amnoon Waypoint",
           GatheringItem: "Vista (with springer)",
           ImageName: "Desert/CrystalOasis_Vista_Amnoon.jpg"
         },
         {
           Area: "Desert",
           MapName: "Crystal Oasis",
           Type: "Vista Viewer",
           WaypointCode: "[&BLsKAAA=]",
           WaypointName: "Amnoon Waypoint",
           GatheringItem: "Vista (with Raptor)",
           ImageName: "Desert/CrystalOasis_Vista_Amnoon2.jpg"
         },
         {
           Area: "Desert",
           MapName: "Crystal Oasis",
           Type: "Vista Viewer",
           WaypointCode: "[&BEAKAAA=]",
           WaypointName: "Temple of Kormir Waypoint",
           GatheringItem: "Vista (with Mount)",
           ImageName: "Desert/CrystalOasis_Vista_TempleOfKormir.jpg"
         },
         {
           Area: "Desert",
           MapName: "Windswept Haven",
           Type: "Guild hall",
           WaypointCode: "[&BN0KAAA=]",
           WaypointName: "Haven Terrace Waypoint",
           GatheringItem: "Guild hall (Miner, Forager & Lumberer)",
           ImageName: "Guild_halls/WindsweptHaven_Desert_HavenTerrace.jpg"
         },


         {
           Area: "Kryta",
           MapName: "Bad Neighborhood",
           Type: "Minidungeon",
           WaypointCode: "[&BPkAAAA=]",
           WaypointName: "Ojon's Lumbermill Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Bad_Neighborhood.jpg",
           Description: <><strong>Getting there:</strong><br />Look for a door embedded in the wall that is guarded by three bandits, and interact with it to enter the mini-dungeon.<br /><br /><strong>Walkthrough:</strong><br />Enter the cave and either fight your way or run to the Splendid Chest, guarded by a Veteran Bandit Saboteur, to get the achievement. To leave, run up the hill behind the chest and use the Door to exit the cave.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Bad_Neighborhood' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Kryta",
           MapName: "Goff's Loot",
           Type: "Minidungeon",
           WaypointCode: "[&BLoDAAA=]",
           WaypointName: "Gap Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Goffs_loot.jpg",
           Description: <><strong>Getting there:</strong><br />The entrance is at Earthlord's Gap, directly north of Gap Waypoint at the Goff's Bandits point of interest.<br /><br /><strong>Walkthrough:</strong><br />Fight your way through the bandits to the cage door at the back of the cave. Activating the door releases the two Veteran Cave Trolls. When these are both defeated, the door opens and you get the achievement when you reach the chest.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Goff%27s_Loot' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Shiverpeaks",
           MapName: "Forsaken Fortune",
           Type: "Minidungeon",
           WaypointCode: "[&BGUCAAA=]",
           WaypointName: "Wyrmblood Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Forsaken_Fortune.jpg",
          Description: <><strong>Getting there:</strong><br />To begin the mini-dungeon, go to Wyrmblood Waypoint and travel west to inspect the Sealed Dwarven Door. If you cannot interact with the door, it has not yet finished its 20 minute reset from the last event.<br /><br /> A note on the door directs you to Travelen's Steading to the northeast. There, speak to Gerrvid who tells you to read the 3 books in front of him (Working with Deldrimor Steel, Dwarven Defensive Strategies, and Lost Treasures of the Dwarven World).<br /><br />After you do, speak with Gerrvid again to tell him you solved the riddle. This triggers the event Escort Gerrvid to the dwarven ruins to lead Gerrvid back to the door, which he will then open so you can enter the Forsaken Halls. This mini-dungeon consists of 3 sections. <br /><br /><strong>Walkthrough</strong><br /><i>For full walkthrough visit: <a href='https://wiki.guildwars2.com/wiki/Forsaken_Fortune' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Shiverpeaks",
           MapName: "Windy Cave Treasure",
           Type: "Minidungeon",
           WaypointCode: "[&BJkBAAA=]",
           WaypointName: "Mistriven Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Windy_Cave_Treasure.jpg",
           Description: <><strong>Getting there:</strong><br />Heading south of the Mistriven Waypoint, make a right going west. The entrance to the cave has a stone wall on the right with some ooze inside the entrance.<br /><br /><strong>Walkthrough:</strong><br />Making your way up wooden platforms and parts of the wall is needed to advance. There are many enemies in the cave, and many veteran enemies, so it is best to complete this challenge with a party or at higher levels with a durable character. You will know you are going in the correct direction if you continue to see ooze and veteran ooze along the path. You'll know you're at the end of the mini-dungeon when you go down a set of stairs where a veteran ooze and a Grand Chest are located.<br /><br /><i>Source: <a href="https://wiki.guildwars2.com/wiki/Windy_Cave_Treasure" target='_blank' rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Ascalon",
           MapName: "Vexa's Lab",
           Type: "Minidungeon",
           WaypointCode: "[&BBoCAAA=]",
           WaypointName: "Breaktooth's Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Vexa_lab.jpg",
          Description: <><strong>Getting there:</strong><br />The portal entrance is found near the vista west of Breaktooth's Waypoint in the western most part of the Sloven Pitch. Just west of this vista is a cave pouring out a lava stream. Approach it from the West. Inside this cave are platforms that phase in and out. Wait for the platforms to phase in then jump and follow them into the cave.<br /><br /> The platforms will phase out after some time, potentially dropping you into the lava below and forcing you to start from the beginning. If the platforms phase out, you can remain on them by staying on their frame-like edges. Alternatively use a Skimmer. At the end of the path of platforms, you'll reach a portal that will take you to Vexa's Lab<br /><br /><strong>Walkthrough</strong><br /><i>For full walkthrough visit: <a href='https://wiki.guildwars2.com/wiki/Vexa%27s_Lab' target='_blank' rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Orr",
           MapName: "Ship of Sorrows",
           Type: "Minidungeon",
           WaypointCode: "[&BOUGAAA=]",
           WaypointName: "Dire Shoal Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Ship_of_Sorrows.jpg",
          Description: <><strong>Getting there:</strong><br />The mini-dungeon is in a sunken ship west of the Plaza of Lost Wisdom.<br /><br /><strong>Walkthrough:</strong><br />You can either enter the ship via a hole in the top 'roof' deck or a 'window' to the deck or approach the sunken ship from the southeast and head through a hole in the side of the ship; in the center of the deck will be an open hatch/stairwell into the hold of the ship that you will need to enter. The interior can be quite disorienting due to the tight viewpoint combined with the angle and tilt of the wreck. <br /><br />Once at the bottom, turn left and left again so that you are pointing to the southwest, then go all the way to the end of the corridor, turn left, and then turn right down another set of stairs. Turn right twice so that you are pointing northeast along the ship, and continue to the far end of the room where the chest should be located, tucked away in the the back corner on the right. The chest is surrounded by some purple lighting effects, various objects, and angles upwards from your entry point to the chamber. You do not need to loot the chest in order to get the achievement, but if you wish to do so bring a friend, as the room with the chest has several Risen Pirates that re-spawn quickly. <br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Ship_of_Sorrows' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Orr",
           MapName: "Forgotten Stream",
           Type: "Minidungeon",
           WaypointCode: "[&BBsDAAA=]",
           WaypointName: "Verdance Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Forgotten_Stream.jpg",
          Description: <><strong>Getting there:</strong><br />Starting at Verdance Waypoint in the Cathedral of Verdance head north-east into the water. Swim under the wreckage directly ahead and you should surface in a large tunnel.<br /><br /><strong>Walkthrough:</strong><br />This mini-dungeon is straightforward: run through the tunnel past the enemies until you get to the locked door at the end. The foes are mostly Orrian Spectral weapons and Risen, many of whom use AoE attacks, and if you do not have any sort of stealth, will likely need to fight through many to reach the end of the corridor. If you do not have the achievement for the mini dungeon, it is awarded just before arriving at the closed door at the far end.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Forgotten_Stream' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Don't Touch the Shiny",
           Type: "Minidungeon",
           WaypointCode: "[&BDoBAAA=]",
           WaypointName: "Mabon Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Dont_Touch_the_Shiny.jpg",
          Description: <><strong>Getting there:</strong><br/>The entrance to the mini-dungeon is north of Mabon Waypoint in a skritt cave in Ruins of the Unseen (the entrance is above the last 'n' of 'Unseen' on the map).<br /><br /><strong>Walkthrough:</strong><br />An electrical orb lies on a pedestal to the right as you enter, and a 'door' made of multicolored metal sheets can be found on the left side of the cave. To enter the sealed room, grab the orb and use the skill it provides you at the door. If you have not killed the numerous and fast-respawning skritt in the cave before attempting the door, and you have auto-targeting enabled, you should face the door and press the forward key while using the orb's skill, otherwise you will throw the orb on a nearby skritt rather than the door. Beyond the door is a chamber with several peaceful Eye of the Unseen golems and a Splendid Chest that can be opened safely.<br /><br /> To get the achievement, interact with the Sacred Skritt Shiny in front of the chest and select the response with the crossed swords to break it. Doing so will cause all the golems to become hostile and attack you, and it will also cause some electrical currents to flow down from the ceiling at intervals, making some areas unsafe to stand in. The space behind the chest is safe. There are 10 golems in the chamber, all level 15, while you will only be level 13, making this a potentially difficult fight. They can be pulled in smaller groups if you run to fight behind the chest after breaking the Shiny. Alternatively, players can avoid the golems and simply run out; killing them is not necessary to get the achievement.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Don%27t_Touch_the_Shiny' target='_blank' rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Orr",
           MapName: "Grounded",
           Type: "Minidungeon",
           WaypointCode: "[&BOQGAAA=]",
           WaypointName: "Shipwreck Rock Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Grounded.jpg",
          Description: <><strong>Getting there:</strong><br />From the Shipwreck Rock Waypoint, head northwest until the shipwreck is on your left.<br /><br /><strong>Walkthrough:</strong><br />Walk carefully up one of the masts leaning against the wreck, and jump down onto the deck. In the center of the deck is an open hatch - head due northwest until you reach the far end of the ship, at which point another set of stairs leads down into the hold. The achievement should appear when you stand roughly in the middle of the hold area, likely among an assortment of risen pirates.<br /><br /> Additionally, it can also be obtained by walking against the outside rock wall below ship directly south west of the point of interest.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Grounded_(mini-dungeon)' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Shiverpeaks",
           MapName: "Magellan's Memento",
           Type: "Minidungeon",
           WaypointCode: "[&BHgCAAA=]",
           WaypointName: "Arundon Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Magellans_Memento.jpg",
          Description: <><strong>Getting there:</strong><br />Proceed north and east from Arundon Waypoint to Safewatch Vale and then further east in the direction of Offering Stone. The cave entrance is in the mountainside midway between the two points of interest.<br /><br /><strong>Walkthrough</strong><br />Make your way through the cave avoiding traps and multiple veteran Grawl. Along the way you will see notes written by Francis Magellan about a treasure at the end of this cave. The achievement is earned upon getting to the chest of riches that doomed Francis Magellan. There will be many oozes at the end of the cave, with a few veteran oozes. The Grand Chest is guarded by a Champion Giant Blue Ooze, which can be avoided if you are careful.<br /><br />If you have a Springer mount, you can skip the minidungeon entirely by jumping up to the chest from the southwest of Safewatch Vale.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Magellan%27s_Memento' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Tears of Itlaocol",
           Type: "Minidungeon",
           WaypointCode: "[&BD4BAAA=]",
           WaypointName: "Falias Thorp Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Tears_of_Itlaocol.jpg",
          Description: <><strong>Getting there:</strong><br />The mini-dungeon entrance is south of the Falias Thorp Waypoint at the Dengatl Grounds, behind the veteran hylek chief. A large gong can be found above and to the right of one of the gates. Sounding the gong by means of throwing a boulder at it will open the gates (targeting the gong is easiest using action camera / by switching autotargeting off).<br /><br /><strong>Walkthrough:</strong><br /><i>For full walkthrough visit: <a href='https://wiki.guildwars2.com/wiki/Tears_of_Itlaocol' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
         },
         {
           Area: "Ascalon",
           MapName: "Rebel's Seclusion",
           Type: "Minidungeon",
           WaypointCode: "[&BBoCAAA=]",
           WaypointName: "Breaktooth's Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Rebels_Seclusion.jpg",
          Description: <><strong>Getting there:</strong><br />The mini-dungeon is located just southeast of Breaktooth's Waypoint, visible on the map as Rebel's Seclusion. To reach the entrance, travel northeast from the Waypoint initially, taking your first right.<br /><br /><strong>Walkthrough:</strong><br />Navigate the canyon to reach the chest. You can either fight or run through the mobs (most are normal mobs). The chest and Rebel’s Seclusion achievement is located a on top of a hill guarded by Veteran Ascalonian Enchanter.<br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/Rebel%27s_Seclusion' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a> and <a href='http://dulfy.net/2012/10/25/gw2-rebels-seclusion-achievement-guide/' target='_blank'  rel='noopener noreferrer'>Dulfy</a></i></>,
         },
         {
           Area: "Orr",
           MapName: "The Long Way Around",
           Type: "Minidungeon",
           WaypointCode: "[&BPICAAA=]",
           WaypointName: "Vesper Bell Waypoint",
           GatheringItem: "Chest of the Explorer",
           ImageName: "Minidungeons/Long_Way_Around.jpg",
          Description: <><strong>Getting there:</strong><br />The cavern entrance is located east of Vesper Bell Waypoint, around the center of the triangle made up of three small islands in Terzetto Bay. The entrance can be seen by looking to the south-east at the bottom of the shallow bay.<br /><br /><strong>Walkthrough</strong><br />You will have 5 minutes to deactivate the six Asuran Data Pad (as the 1st pad will reset in 5 minutes), dispersed throughout the cavern, mostly around floor level, with the first two being high on the left wall of the entrance tunnel. Deactivating all six will open the gate and allow you to reach Scholar Fryxx and the Grand Chest next to him, earning the achievement. You will need to deactivate all of them while avoiding getting hit by the Risen Hands and dead fish.<br /><br /> If you are hit by a hand or fish, you will have the effect Covered in Corruption applied to you and you will not be able to activate any Data Pads, so you will need to go back to Explorer Camelia to have it removed. The cavern itself is roughly in the form of an L-shaped tunnel which turns left towards the Gate. The Risen Hands are located on the floors, walls and ceiling of the cavern; sometimes hidden behind columns, and both they and the fish are immune to damage and cannot be destroyed. <br /><br />The greenish substance shot by the Risen Hands explodes into an AoE on contact and could end up contaminating you even while hiding behind columns, so it is best to keep moving to avoid the slow-moving shots, as the damage is negligible and the shots can be blocked, such as with aegis. However the contamination from fish cannot be blocked so give them as wide a berth as possible. Tour the cavern to determine the location of each of the data pads before you attempt to trigger the data pads. All of the data pads do not have to be triggered between each cleansing. The most difficult data pad to access is the second one from the end that is surrounded by dead fish. If you get that one first then the others are reasonably easy to get within the 5 minute limit. <br /><br /><i>Source: <a href='https://wiki.guildwars2.com/wiki/The_Long_Way_Around' target='_blank'  rel='noopener noreferrer'>Guild Wars 2 Wiki</a></i></>,
        },
         {
           Area: "Ascalon",
           MapName: "Chaos Crystal Cavern",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BOQBAAA=]",
           WaypointName: "Old Piken Ruins Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_chaos_crystal_cavern.png",
           Description: "BXztqUzly8Y"
         },
         {
           Area: "Ascalon",
           MapName: "Branded Mine",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BNcAAAA=]",
           WaypointName: "Tenaebron Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_Branded_mine.png",
           Description: "gzWWrg9T4FI"
         },
         {
           Area: "Kryta",
           MapName: "Collapsed Observatory",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BBIAAAA=]",
           WaypointName: "Cereboth Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_collapsed_observatory.png",
           Description: "O-2eJOrb5eQ"
         },
         {
           Area: "Kryta",
           MapName: "Skipping Stones",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BNAGAAA=]",
           WaypointName: "Lion Point Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_skipping_stones.png",
           Description: "hG-jAW-0ECM"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Shaman's Rookery",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BHcBAAA=]",
           WaypointName: "Zelechor Hot Springs Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_shamans_rookery.png",
           Description: "xClNpRZna5w"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Shattered Ice Ruins",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BH4CAAA=]",
           WaypointName: "Ice Floe Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_shattered_ice_ruins.png",
           Description: "QomMi8FEdys"
         },
         {
           Area: "Orr",
           MapName: "Scavenger's Chasm",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BKYCAAA=]",
           WaypointName: "Pagga's Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_scavengers_chasm.png",
           Description: "5DYmfiRQJQY"
         },
         {
           Area: "Kryta",
           MapName: "Swashbuckler's Cove",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BOMAAAA=]",
           WaypointName: "Cornucopian Fields Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_swashbucklers_cove.png",
           Description: "EYrXhwJGTFo"
         },
         {
           Area: "Ascalon",
           MapName: "Loreclaw Expanse",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BMcDAAA=]",
           WaypointName: "Loreclaw Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_loreclaw_expanse.png",
           Description: "W8n08qlfXnQ"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Griffinrook Run",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BOgAAAA=]",
           WaypointName: "False Lake Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_griffonrook_run.png",
           Description: "o5wEHgm3Aco"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Coddler's Cove",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BEYCAAA=]",
           WaypointName: "Okarinoo Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_coddlers_cove.png",
           Description: "l1SwH3Y5guE"
         },
         {
           Area: "Kryta",
           MapName: "Under New Management",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BNUGAAA=]",
           WaypointName: "Pearl Islet Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_under_new_management.png",
           Description: "1v5GZ4ClHvA"
         },
         {
           Area: "Orr",
           MapName: "Vizier's Tower",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BPcCAAA=]",
           WaypointName: "Lone Post Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_viziers_tower.png",
           Description: "M-w59O9y8ss"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Morgan's Leap",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BDUBAAA=]",
           WaypointName: "Spiral Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_morgans_spiral.png",
           Description: "BmDmi3z6ZaA"
         },
         {
           Area: "Kryta",
           MapName: "Professor Portmatt's Lap",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BKQBAAA=]",
           WaypointName: "Sorrowful Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_portmatts_lab.png",
           Description: "ItM2BBjYzoQ"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Spelunker's Delve",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BP4FAAA=]",
           WaypointName: "Sleive's Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_spelunkers_delve.png",
           Description: "HbGUNFFmlTw"
         },
         {
           Area: "Ascalon",
           MapName: "Crimson Plateau",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BMYDAAA=]",
           WaypointName: "Redreave Mill Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_crimson_plateau.png",
           Description: "NnAetuLkPZg"
         },
         {
           Area: "Kryta",
           MapName: "Demongrub Pits",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BPwAAAA=]",
           WaypointName: "Godslost Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_demongrub_pits.png",
           Description: "jVSDyyGe8mo"
         },
         {
           Area: "Ascalon",
           MapName: "Pig Iron Quarry",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BBkCAAA=]",
           WaypointName: "Severed Breach Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_pig_iron_quarry.png",
           Description: "jFn2uw8VTkw"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Dark Reverie",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BDUBAAA=]",
           WaypointName: "Spiral Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_dark_reviere.png",
           Description: "wtU3_DZfK5w"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Spekks's Lab",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BDcBAAA=]",
           WaypointName: "Gleaner's Cove Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_spekks_lab.png",
           Description: "_bHmav-lZEo"
         },
         {
           Area: "Orr",
           MapName: "Antre of Adjournment",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BKoCAAA=]",
           WaypointName: "Valley of Lyss Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_antre_of_adjournment.png",
           Description: "b39AbPKMgxc"
         },
         {
           Area: "Ascalon",
           MapName: "Behem Gauntlet",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BP0BAAA=]",
           WaypointName: "Behem Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_behem_gauntlet.png",
           Description: "hCShpaE5Nh8"
         },
         {
           Area: "Ascalon",
           MapName: "Craze's Folly",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BAECAAA=]",
           WaypointName: "Terra Carorunda Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_crazes_folly.png",
           Description: "ABBAsq45N_c"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Tribulation Rift Scaffolding",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BD8FAAA=]",
           WaypointName: "Sorrow's Embrace Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_tribulation_rift.png",
           Description: "hhu9H_eihGY"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Conundrum Cubed",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BMgCAAA=]",
           WaypointName: "Govoran Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_conundrum_cubed.png",
           Description: "CyO6W7z4vt4"
         },
         {
           Area: "Maguuma Wastes",
           MapName: "Crash Site",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BIAHAAA=]",
           WaypointName: "Dry Top Entry Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "",
           Description: "CyBI5EpUPcY"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Tribulation Caverns",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BD8FAAA=]",
           WaypointName: "Sorrow's Embrace Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_tribulation_caverns.png",
           Description: "avy0Osc6ezU"
         },
         {
           Area: "Kryta",
           MapName: "Urmaug's Secret",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BA0EAAA=]",
           WaypointName: "Guild Bluff Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_urmaugs_secret.png",
           Description: "EVclFebZuB8"
         },
         {
           Area: "Orr",
           MapName: "Buried Archives",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BOQGAAA=]",
           WaypointName: "Shipwreck Rock Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_buried_archives.png",
           Description: "FttFujmyJJA"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Hexfoundry Unhinged",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BM0BAAA=]",
           WaypointName: "Darkweather Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_hexfoundry_unhinged.png",
           Description: "m6x8CnA3yJ8"
         },
         {
           Area: "Maguuma Jungle",
           MapName: "Goemm's Lab",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BLIEAAA=]",
           WaypointName: "Cuatl Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_goemms_lab.png",
           Description: "aAPrH56ecNs"
         },
         {
           Area: "Ascalon",
           MapName: "Wall Breach Blitz",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BGEBAAA=]",
           WaypointName: "Breached Wall Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_wall_breach_blitz.png",
           Description: "FejoFvXRn8c"
         },
         {
           Area: "Shiverpeaks",
           MapName: "King Jalis's Refuge",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BL8AAAA=]",
           WaypointName: "Snowhawk Landing Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_king_jalis_refuge.png",
           Description: "8wI6njM5XkI"
         },
         {
           Area: "Kryta",
           MapName: "Fawcett's Bounty",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BLIAAAA=]",
           WaypointName: "Arca Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_fawcetts_bounty.png",
           Description: "jg_DPNw-0DY"
         },
         {
           Area: "Kryta",
           MapName: "Weyandt's Revenge",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BDMEAAA=]",
           WaypointName: "Farshore Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_weyandts_revenge.png",
           Description: "GdgKi47JsGA"
         },
         {
           Area: "Ascalon",
           MapName: "Grendich Gamble",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BNoAAAA=]",
           WaypointName: "Blasted Moors Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_grendich_gamble.png",
           Description: "VX-pLqekaZw"
         },
         {
           Area: "Shiverpeaks",
           MapName: "Only Zuhl",
           Type: "Jumping Puzzle",
           WaypointCode: "[&BE4CAAA=]",
           WaypointName: "Foundation 86 Waypoint",
           GatheringItem: "Chest of the Athlete",
           ImageName: "Jumping_Puzzles/jp_only_zuhl.png",
           Description: "_JXM8oZt-vg"
         },
       ];
    break;

    case 'PVP':
      locationList = [
        {
          Area: "PvP",
          MapName: "Hall of Memories",
          Type: "PvP Rank Points",
          WaypointCode: "",
          WaypointName: "Rank Points",
          GatheringItem: "",
          ImageName: "PvP/Hall_of_Memories.jpg"
        },
        {
          Area: "PvP",
          MapName: "Hall of Memories",
          Type: "PvP Player Kills",
          WaypointCode: "",
          WaypointName: "Player Kills",
          GatheringItem: "",
          ImageName: "PvP/Hall_of_Memories.jpg"
        },
        {
          Area: "PvP",
          MapName: "Hall of Memories",
          Type: "Top Stats",
          WaypointCode: "",
          WaypointName: "Top Stats",
          GatheringItem: "",
          ImageName: "PvP/Hall_of_Memories.jpg"
        },
        {
          Area: "PvP",
          MapName: "Hall of Memories",
          Type: "PvP Reward Earner",
          WaypointCode: "",
          WaypointName: "PvP Reward Earner",
          GatheringItem: "",
          ImageName: "PvP/Hall_of_Memories.jpg"
        },
      ];
    break;

    case 'WVW':
      locationList = [
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Camp",
          WaypointCode: "",
          WaypointName: "Camp capturer",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Camp_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Camp",
          WaypointCode: "",
          WaypointName: "Camp capturer",
          GatheringItem: "",
          ImageName: "WvW/Desert_Camp_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Eternal Battleground",
          Type: "WvW Camp",
          WaypointCode: "",
          WaypointName: "Camp capturer",
          GatheringItem: "",
          ImageName: "WvW/EBG_Camp_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Veteran",
          WaypointCode: "",
          WaypointName: "Harpy veteran",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Harpy_Veteran.png"
        },
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Veteran",
          WaypointCode: "",
          WaypointName: "Warg veteran",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Warg_Veteran.jpg"
        },
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Veteran",
          WaypointCode: "",
          WaypointName: "Wurm veteran",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Wurm_Veteran.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Veteran",
          WaypointCode: "",
          WaypointName: "Harpy veteran",
          GatheringItem: "",
          ImageName: "WvW/Desert_Harpy_Veteran.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Veteran",
          WaypointCode: "",
          WaypointName: "Warg veteran",
          GatheringItem: "",
          ImageName: "WvW/Desert_Warg_Veteran.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Veteran",
          WaypointCode: "",
          WaypointName: "Wurm veteran",
          GatheringItem: "",
          ImageName: "WvW/Desert_Wurm_Veteran.png"
        },
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Keep",
          WaypointCode: "",
          WaypointName: "Keep capturer",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Keep_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Keep",
          WaypointCode: "",
          WaypointName: "Keep capturer",
          GatheringItem: "",
          ImageName: "WvW/Desert_Keep_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Eternal Battleground",
          Type: "WvW Keep",
          WaypointCode: "",
          WaypointName: "Keep capturer",
          GatheringItem: "",
          ImageName: "WvW/EBG_Keep_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Land Claimer",
          WaypointCode: "",
          WaypointName: "Land claimer",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Land_Claimer.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Land Claimer",
          WaypointCode: "",
          WaypointName: "Land claimer",
          GatheringItem: "",
          ImageName: "WvW/Desert_Land_Claimer.png"
        },
        {
          Area: "WvW",
          MapName: "Eternal Battleground",
          Type: "WvW Land Claimer",
          WaypointCode: "",
          WaypointName: "Land claimer",
          GatheringItem: "",
          ImageName: "WvW/EBG_Land_Claimer.png"
        },
        {
          Area: "WvW",
          MapName: "Both Alpine Borderlands",
          Type: "WvW Tower",
          WaypointCode: "",
          WaypointName: "Tower capturer",
          GatheringItem: "",
          ImageName: "WvW/Alpine_Tower_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Desert Borderlands",
          Type: "WvW Tower",
          WaypointCode: "",
          WaypointName: "Tower capturer",
          GatheringItem: "",
          ImageName: "WvW/Desert_Tower_Capturer.png"
        },
        {
          Area: "WvW",
          MapName: "Eternal Battlegrounds",
          Type: "WvW Tower",
          WaypointCode: "",
          WaypointName: "Tower capturer",
          GatheringItem: "",
          ImageName: "WvW/EBG_Tower_Capturer.png"
        },
      ];
    break;

    case 'FRACTAL':
      locationList = [
        {
          Area: "Fractals of the Mists",
          MapName: "Volcanic",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Volcanic.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Uncategorized",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Uncategorized.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Snowblind",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Snowblind.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Urban Battleground",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Urban_Battleground.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Swampland",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Swampland.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Cliffside",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Cliffside.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Aquatic Ruins",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Aquatic.jpg"

        },
        {
          Area: "Fractals of the Mists",
          MapName: "Underground Facility",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Underground_Facility.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Molten Furnace",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Molten_Furnace.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Molten Boss",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Molten_Boss.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Deepstone",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Deepstone.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Siren's Reef",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Sirens_Reef.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Chaos",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Chaos.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Aetherblade",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Aetherblade.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Thaumanova Reactor",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Thaumanova.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Twilight Oasis",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Twilight_Oasis.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Captain Mai Trin Boss",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Mai_Trin.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Solid Ocean",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Solid_Ocean.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Nightmare",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Nightmare.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Shattered Observatory",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Shattered_Observatory.jpg"
        },
        {
          Area: "Fractals of the Mists",
          MapName: "Sunqua Peak",
          Type: "Fractal",
          WaypointCode: "[&BDAEAAA=]",
          WaypointName: "Fort Marriner Waypoint",
          GatheringItem: "",
          ImageName: "Fractal/Fractal_Sunqua_Peak.jpg"
        },
      ];
    break;

    default:
    locationList.length = 0;
  };

locationList.map((location, index) => {
    switch(props.filter.Type){
      case "Fractal":
        return props.filter.FractalName === location.MapName ?
          filteredLocations.push(location)
        : null;

      case "Minidungeon":
        return props.filter.SpecificLocation === location.MapName ? filteredLocations.push(location) : null;

      case "Jumping Puzzle":
        return props.filter.SpecificLocation === location.MapName ? filteredLocations.push(location) : null;

      default:
        return props.filter.Type === location.Type && props.filter.Area === location.Area ? filteredLocations.push(location) : null;
    }
  });

  const resultItems =  filteredLocations.map((location, index) => {
      return <ResultItemContainer key={index} location={location} index={index} expandDescriptionOfIndex={props.expandDescriptionOfIndex} setexpandDescriptionOfIndex={props.setexpandDescriptionOfIndex}/>
  });
  const noResultsText = filteredLocations.length <= 0 ? <h2 className="clickOnDailyMsg">Click on a daily <i className="fas fa-level-up-alt"></i></h2> : null;
  return(
    <div className="resultContainer--container">
      {noResultsText}
      {resultItems}
    </div>
  );
}

export default resultContainer;
