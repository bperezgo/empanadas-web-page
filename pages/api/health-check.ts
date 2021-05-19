import { NextApiResponse, NextApiRequest } from "next"

const healthCheck = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        message: "server is up"
    })
}

export default healthCheck