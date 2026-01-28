const parseList = (input) => {
    try {
        const parsed = typeof input === 'string' ? JSON.parse(input) : input;
        return Array.isArray(parsed) ? parsed.map(item => String(item).toUpperCase()) : [];
    } catch (e) {
        return typeof input === 'string'
            ? input.split(',').map(s => s.trim().toUpperCase()).filter(s => s)
            : [];
    }
};

console.log("Test 1 (string list):", parseList("red, blue, GREEN")); // Expect ["RED", "BLUE", "GREEN"]
console.log("Test 2 (JSON array string):", parseList("[\"red\", \"blue\"]")); // Expect ["RED", "BLUE"]
console.log("Test 3 (Array):", parseList(["red", "blue"])); // Expect ["RED", "BLUE"]
