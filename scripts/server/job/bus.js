// ===========================================================================
// Asshat-Gaming Roleplay
// https://github.com/VortrexFTW/gtac_asshat_rp
// Copyright (c) 2020 Asshat-Gaming (https://asshatgaming.com)
// ---------------------------------------------------------------------------
// FILE: bus.js
// DESC: Provides bus driver job functions and usage
// TYPE: Job (JavaScript)
// ===========================================================================

let busRoutes = [
    false,
    
    // GTA 3
    [   
        // PORTLAND ISLAND ROUTE 1
        { 
            name: "Portland Red Line", 
            island: 1, 
            busColour: toColour(120, 0, 0, 255),
            positions: [
                new Vec3(1269, -1056.4, 14.75),
                new Vec3(1088.7, -968.8, 14.91),
                new Vec3(1059.1, -870.9, 14.91),
                new Vec3(917.6, -815.9, 14.91),
                new Vec3(851.1, -766.1, 14.91),
                new Vec3(838.8, -598.7, 14.91),
                new Vec3(959.3, -581.6, 14.91),
                new Vec3(853.1, -485.9, 14.91),
                new Vec3(838.8, -312.68, 6.8),
                new Vec3(913.9, -177.4, 4.91),
                new Vec3(1123.3, -67.74, 7.41),
                new Vec3(1043.6, -191.63, 4.91),
                new Vec3(1213.2, -281.3, 25.76),
                new Vec3(1193.3, -474.3, 24.98),
                new Vec3(1335.4, -499.7, 45.28),
                new Vec3(1220.3, -341.4, 26.38),
                new Vec3(1122.6, -475.6, 19.91),
                new Vec3(1309.2, -642.4, 12.3),
                new Vec3(1350.5, -845, 14.91),
                new Vec3(1322.2, -1025.3, 14.76),
            ],
        }, 
        
        // STAUNTON ISLAND ROUTE 1
        { 
            name: "Staunton Red Line", 
            island: 2, 
            busColour: toColour(120, 0, 0, 255),
            positions: [
                new Vec3(-1.11, -388.4, 16.11),
                new Vec3(-15.75, -735.3, 26.15),
                new Vec3(33.63, -1029.4, 26.11),
                new Vec3(-53.92, -1233.4, 26.11),
                new Vec3(126.58, -1323.7, 26.11),
                new Vec3(189.39, -1285.6, 26.11),
                new Vec3(266.9, -1179.1, 26.11),
                new Vec3(283.93, -1370.2, 26.11),
                new Vec3(144.44, -1455.5, 26.11),
                new Vec3(34.5, -1511.7, 26.11),
                new Vec3(325.31, -1579, 26.03),
                new Vec3(302.33, -1417.7, 26.11),
                new Vec3(309.76, -1290, 26.11),
                new Vec3(378.5, -1235.1, 26.11),
                new Vec3(404, -1376.3, 26.11),
                new Vec3(189.07, -1159.3, 26.11),
                new Vec3(189.44, -956.9, 26.11),
                new Vec3(254.18, -722.3, 26.11),
                new Vec3(383.4, -704.2, 26.11),
                new Vec3(429.3, -420.6, 22.04),
                new Vec3(570.9, -336.4, 19.71),
                new Vec3(267.46, 91.12, 15.96),
                new Vec3(99.13, -31.96, 16.11),
                new Vec3(243.94, -187.01, 21.31),
                new Vec3(99.17, -263.44, 16.11),
                new Vec3(-26.92, -283.73, 16.11),
            ],
        },
    ],

    // GTA VC
    [

    ],

    // GTA SA
    [

    ],

    false,

    // GTA IV
    [

    ], 
];