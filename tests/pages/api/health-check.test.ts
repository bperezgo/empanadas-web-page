import healthCheck from "../../../pages/api/health-check";
import { NextApiRequest, NextApiResponse } from "next"

describe("Api - health-check", () => {
    it("should return server is up", () => {
        const response = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        healthCheck({} as NextApiRequest, response as unknown as NextApiResponse);
        expect(response.json.mock.calls).toEqual([[{ message: "server is up" }]])
    })
})