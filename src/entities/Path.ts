class Path {
    private static paths = [
        [ // Cucumber
            'A1',
            'A2',
            'B2',
            'B2_1',
            'B2',
            'C2',
            'D2',
            'E2',
            'E3',
            'E4'
        ],
        [ // Tomato
            'A1',
            'A2',
            'B2',
            'C2',
            'C2_1',
            'C2',
            'D2',
            'E2',
            'E3',
            'E4'
        ],
        [ // Carrot
            'A1',
            'A2',
            'B2',
            'C2',
            'D2',
            'D2_1',
            'D2',
            'E2',
            'E3',
            'E4'
        ],
        [ // Blueberry
            'A1',
            'A2',
            'A3',
            'B3',
            'B3_1',
            'B3',
            'C3',
            'D3',
            'E3',
            'E4'
        ],
        [ // Banana
            'A1',
            'A2',
            'A3',
            'B3',
            'C3',
            'C3_1',
            'C3',
            'D3',
            'E3',
            'E4'
        ],
        [ // Eggplant
            'A1',
            'A2',
            'A3',
            'B3',
            'C3',
            'D3',
            'D3_1',
            'D3',
            'E3',
            'E4'
        ],
    ]

    public static RandomPath() {
        const index = Math.floor(Math.random() * Path.paths.length);

        const path = Path.paths.at(index);

        if (!path) throw new Error('random path is invalid!');

        return path;
    }
}

export default Path