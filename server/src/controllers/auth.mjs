import jwt from 'jsonwebtoken';

export default function generateAccessToken(email) {
    const payload = {
        email: email
      };
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: '1h' };

    return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token) {
    console.log('verifyAccessToken');
    
    const secret = process.env.SECRET_KEY;

    try {
        const decoded = jwt.verify(token, secret);
        return { success: true, data: decoded };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export function authenticateToken(req, res, next) {
    console.log('authenticateToken');
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    const result = verifyAccessToken(token);

    if (!result.success) {
        return res.status(403).json({ error: result.error });
    }

    req.user = result.data;
    next();
}