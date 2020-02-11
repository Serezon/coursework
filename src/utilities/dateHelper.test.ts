import { formatDate } from "./dateHelper";

describe("dateHelper", () => {
    it("returns correct date", () => {
        const exampleDate: Date = new Date('1995-12-17T03:24:00');
        const formattedDate = formatDate(exampleDate);
        expect(formattedDate).toBe('1995-12-17');
    });

    it("returns empty string if no date provided", () => {
        const formattedDate = formatDate(null);
        expect(formattedDate).toBe("");
    });
});
