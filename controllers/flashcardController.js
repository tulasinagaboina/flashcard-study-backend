export const createFlashcard = (req, res) => {
    const { term, definition } = req.body;
    if (!term || !definition) {
        return res.json({ error: 'Missing term or definition' });
    }
    res.json({ success: true, term, definition })
};
export default createFlashcard;
