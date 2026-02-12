import multer from 'multer';
import path from 'path';

// Multer Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Destination is relative to the process cwd usually, but safer to use absolute or relative to this file
        // Logic in server.js was 'uploads/', assuming run from root.
        // We will stick to 'uploads/' assuming server is started from root or handle path correctly.
        // Let's use path.join for robustness relative to root if possible or just 'uploads/' if CWD is root.
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 25 * 1024 * 1024 // 25MB
    }
});

export default upload;
