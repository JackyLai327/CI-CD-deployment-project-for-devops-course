const mockingoose = require('mockingoose');
const Note = require("../../models/note")

// Unit Tests only test the validation built into Note

describe('mockingoose', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks()
    })

    describe("Test Both Fields Are Set", () => {
        it('Validate Model', async () => {
            const todo = new Note({
                title: "Task Note",
                description: "Task Description (This was fixed)" // "This can't be blank"
            });

            const result = await todo.validateSync();
            expect(result).toBe(undefined);
        });
    })

    describe("Failure Scenario", () => {
        it('Failure Scenario', async () => {
            const todo = new Note({
                title: "Failure",
                description: "This will fail" // "This can't be blank"
            });

            const result = await todo.validateSync();
            expect(result).not.toBe(undefined);
        });
    })
})
